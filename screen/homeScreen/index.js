import React, { Component } from 'react'
import { View, Text, Image } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'

class HomeScreen extends Component {
    constructor(props){
        super(props)
        this.state = {}
    }
    
    showCard = () => {
        const { users } = this.props
        return users.map((user, idx) => {
            return (                
                <View key={idx}>
                    <Text>Id : {user.id}</Text>
                    <Text>Name: {user.name}</Text>
                    {/* <Image source={{uri: user.picture}} /> */}
                    {/* <Text>{user.picture}</Text> */}
                </View>
            )
        })
    }

    render() {
        return(
            <ScrollView>
                <Text>Ini Home Screen</Text>
                {this.showCard()}
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

export default HomeScreen