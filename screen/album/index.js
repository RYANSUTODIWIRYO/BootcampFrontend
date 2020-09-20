import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import { AlbumScreen, PhotoScreen } from "../../screen"


const StackAlbum = createStackNavigator()

class Album extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <StackAlbum.Navigator
                initialRouteName="AlbumScreen"
            >
                <StackAlbum.Screen
                    name="AlbumScreen"       
                    component={AlbumScreen}                 
                />
                <StackAlbum.Screen
                    name="PhotoScreen"
                    component={PhotoScreen} 
                    options={{
                        headerShown: true,                        
                    }}               
                />
            </StackAlbum.Navigator>
        )
    }
}

export default Album