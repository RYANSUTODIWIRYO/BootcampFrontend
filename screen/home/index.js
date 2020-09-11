import React, { Component } from 'react'
import { View, StyleSheet, Text, ScrollView, ViewPropTypes, Image } from "react-native"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
// import HomeScreen from "../homeScreen"
// import InputScreen from "../inputScreen"
import { HomeScreen, InputScreen, TableScreen } from "../../screen"
import Album from "../album"


const Tab = createBottomTabNavigator()

class Home extends Component {   
    constructor(props){
        super(props)
        this.state={
            users: [
                {
                    "id":1,
                    "name":"Ronaldo",
                    "picture": 'https://worldfootballindex.com/wp-content/uploads/2020/06/Ronaldo-Juventus-Penalty-miss.jpg'
                },
                {
                    "id":2,
                    "name":"Messi",
                    "picture":"https://images.daznservices.com/di/library/GOAL/e4/8b/lionel-messi-barcelona_m1mnrhlhcckr191bi45zhmzcp.jpg?t=-2070385135&quality=60&w=1200&h=800"
                }
            ]
        }
    }
    
    addUser = (user) => {
        let { users } = this.state
        users.push(user)
        this.setState({users})
    }

    deleteUser = (id) => {
        // alert(id)
        let { users } = this.state
        for (let i = 0; i < users.length; i++) {
            if (users[i].id === id){
                users.splice(i, 1)
            }
        }
        this.setState({users})
    }

    render(){
        return (
        <Tab.Navigator>
            <Tab.Screen
                name="Home"
                children={() => <HomeScreen users={this.state.users}/>}
                options={{
                    tabBarIcon: (props) => (
                        <IconBottom data={props} image={images.homeImage} />
                    )   
                }}
            />
            <Tab.Screen
                name="Table"
                children={() => <TableScreen users={this.state.users} deleteUser={this.deleteUser}/>}
                options={{
                    tabBarIcon: (props) => (
                        <IconBottom data={props} image={images.tableImage} />
                    )
                        
                }}
            />
            <Tab.Screen
                name="Input"
                children={() => <InputScreen addUser={this.addUser}/>}
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