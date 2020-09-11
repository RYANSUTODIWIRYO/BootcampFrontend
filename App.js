import React, { Component } from 'react'
// import { ScrollView, Text } from "react-native"
// import { Login, Home } from "./screen"
import Login from "./screen/login"
import Home from "./screen/home"
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { View, Button } from 'react-native'

const Stack = createStackNavigator()

class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Login"
          screenOptions={({route, navigation}) => ({
            headerRight: () => (
              <View style={{marginRight: 10}}>
                <Button
                  // only alert is ok, the other is error.
                  onPress={() => navigation.navigate('Login')}
                  title="Logout"
                  color="red"
                />
              </View>
            )
          })}>          
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
              headerLeft: null,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}

export default App