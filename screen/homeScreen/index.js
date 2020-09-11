import React, { Component } from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { Avatar } from 'react-native-elements';
import { Input } from 'react-native-elements';


class HomeScreen extends Component {
    constructor(props){
        super(props)
        this.state = {
            nameFilter:""
        }
    }
    
    showCard = () => {
        const { users } = this.props
        const { nameFilter } = this.state

        let filterUsers = users.filter(user => {
            return user.name.toLowerCase().includes(nameFilter.toLowerCase())
            // return Object.keys(user).some(k => user[k].includes(str))
        })

        return filterUsers.map((user, idx) => {
            return (                
                <View key={idx}>
                    <Text>Id : {user.id}</Text>
                    <Text>Name: {user.name}</Text>
                    <Avatar source={{uri: user.picture}}/>
                    {/* <Image source={{uri: user.picture}} /> */}
                    {/* <Text>{user.picture}</Text> */}
                </View>
            )
        })
    }

    render() {
        return(
            <ScrollView>
                <View style={styles.container}>
                    <Text style={styles.textHead}>Home</Text>
                    <View style={{width:"100%"}}>
                        <Input
                            placeholder='Find Name'
                            onChangeText={(nameFilter) => this.setState({nameFilter})}
                        />
                    </View>
                    <View>
                        {this.showCard()}
                    </View>
                </View>
            </ScrollView>
        )
    }
}

// For images 
const images = {
    homeImage: require("../../assets/image/home.png"),
    tableImage: require("../../assets/image/list.png"),
    inputImage: require("../../assets/image/input.png")
}

// For styling
const styles = StyleSheet.create({
    textHead: { fontSize: 25 },
    container: { flex: 1, flexDirection: "column", alignItems:"center", padding: 16, paddingTop: 30, backgroundColor: '#fff' },
    inputIcon : { width: 25, height: 25, marginRight: 10 },
    button: { alignItems: "center", justifyContent: "center", width: 100, height: 40, backgroundColor:"#DDDDDD", borderRadius: 5 }
})

export default HomeScreen