import React, { Component } from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import TableScreen from "../tableScreen"
import EditScreen from "../editScreen"
import { View, Text } from 'react-native'

const StackTable = createStackNavigator()

class Table extends Component {

    render() {
        return (
            <StackTable.Navigator
               initialRouteName="TableScreen" 
            >
                <StackTable.Screen 
                    name="TableScreen"
                    children={props => <TableScreen
                        {...props}
                        players={this.props.players}
                        deletePlayer={this.props.deletePlayer}/>}
                    // component={TableScreen}
                />
                <StackTable.Screen
                    name="EditScreen"
                    children={props => <EditScreen
                        {...props}
                        updatePlayer={this.props.updatePlayer}/>}
                />
            </StackTable.Navigator>
        )
    }
}

export default Table