import React, { Component } from 'react'
// import { ScrollView, Text } from "react-native"
import { Login, Home } from "./screen"
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

const Stack = createStackNavigator()

class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">          
          <Stack.Screen
            name="Login"
            component={Login}
            options={{
              headerShown: null
            }}  
          />
          <Stack.Screen
            name="Home"
            component={Home}
            options={{
              headerShown: null
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}

export default App