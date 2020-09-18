import React, { Component } from 'react'
import { View, StyleSheet, Text, ScrollView, ViewPropTypes, Image, Alert } from "react-native"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
// import HomeScreen from "../homeScreen"
// import InputScreen from "../inputScreen"
import { HomeScreen, InputScreen, TableScreen} from "../../screen"
import Table from "../table"
import Album from "../album"

import SQLite from 'react-native-sqlite-storage'

const Tab = createBottomTabNavigator()


class Home extends Component {   
    state = {
        players: []
    }

    componentDidMount(){
        this.getPlayers()
    }

    // For executing query template
    ExecuteQuery = (sql, params = []) => new Promise((resolve, reject) => {
        db.transaction((trans) => {
            trans.executeSql(sql, params, (trans, results) => {
            resolve(results);
            },
            (error) => {
                reject(error);
            });
        });
    });

    // Get Query
    getPlayers = async () => {
        const result = await this.ExecuteQuery("SELECT * FROM players",[])
        // console.info("Players:", result)
        console.info("Players:", result.rows)
        
        let players = []
        for (let i = 0; i < result.rows.length; i++) {
            players.push(result.rows.item(i))
        }

        this.setState({
            players
        })
    }

    // Insert
    addPlayer = async (player) => {
        const { id, name, picture } = player
        const result = await this.ExecuteQuery(
            "INSERT INTO players (id, name, picture) VALUES (?, ?, ?)",
            [id, name, picture])
        console.log("Add Player", result)
        this.getPlayers()
        Alert.alert("Add Player Complete")
    }

    deletePlayer = async (id) => {
        // alert(id)
        const result = await this.ExecuteQuery(
            "DELETE FROM players WHERE id=?",
            [id])
        
        console.log("Delete Player", result)
        this.getPlayers()
    } 

    updatePlayer = async (player) => {
        const { id, name, picture } = player
        const result = await this.ExecuteQuery(
            "UPDATE players SET name=?, picture=? WHERE id=?",
            [name, picture, parseInt(id, 10)])

        console.log("Update Player", result)
        this.getPlayers()
    }

    render(){             
        return (                              
            <Tab.Navigator>
                <Tab.Screen
                    name="Home"
                    children={() => <HomeScreen players={this.state.players}/>}
                    options={{
                        tabBarIcon: (props) => (
                            <IconBottom data={props} image={images.homeImage} />)                                               
                }}/>
                <Tab.Screen
                    name="Table"
                    children={() => <Table
                        players={this.state.players}
                        deletePlayer={this.deletePlayer}
                        updatePlayer={this.updatePlayer}/>
                    }
                    options={{
                        tabBarIcon: (props) => (
                            <IconBottom data={props} image={images.tableImage} />
                        )                            
                    }}
                />
                <Tab.Screen
                    name="Input"
                    children={() => <InputScreen addPlayer={this.addPlayer}/>}
                    options={{
                        tabBarIcon: (props) => (
                            <IconBottom data={props} image={images.inputImage} />
                        )                            
                    }}
                />
                <Tab.Screen
                    name="Albums"
                    children={() => <Album/>}
                    options={{
                        tabBarIcon: (props) => (
                            <IconBottom data={props} image={images.albumImage} />
                        )                        
                    }}
                />
            </Tab.Navigator>          
        )
    }
}

const IconBottom = (props) => {
    const { color, focused } = props.data
    let colorSelected = focused ? color : 'grey'
    return (
        <View>
            <Image source={props.image} style={{width:25, height:25, tintColor: colorSelected}} />
        </View>
    )
}

// For images 
const images = {
    homeImage: require("../../assets/image/home.png"),
    tableImage: require("../../assets/image/list.png"),
    inputImage: require("../../assets/image/input.png"),
    albumImage: require("../../assets/image/album.png")
}

// For styling
const styles = StyleSheet.create({
})

export default Home