import React, { Component } from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import InputScreen from '../inputScreen'
import CameraScreen from "../cameraScreen"


const StackInputNav = createStackNavigator()

class InputNav extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <StackInputNav.Navigator
                initialRouteName="InputScreen"
            >
                <StackInputNav.Screen
                    name="InputScreen"       
                    children={(props) => <InputScreen {...props} addPlayer={this.props.addPlayer} />}                 
                />
                <StackInputNav.Screen
                    name="CameraScreen"
                    component={CameraScreen}
                    options={{
                        headerShown: false,                        
                    }}               
                />
            </StackInputNav.Navigator>
        )
    }
}

export default InputNav