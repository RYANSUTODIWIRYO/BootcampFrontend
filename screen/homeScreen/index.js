import React, { Component } from 'react'
import { View, Text } from 'react-native'

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
                    <Text>{user.name}</Text>
                    <Text>{user.id}</Text>
                </View>
            )
        })
    }

    render() {
        return(
            <View>
                <Text>Ini Home Screen</Text>
                {this.showCard()}
            </View>
        )
    }
}

export default HomeScreen