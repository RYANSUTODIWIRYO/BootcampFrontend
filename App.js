import React, { Component } from 'react'
// import { ScrollView, Text } from "react-native"
// import { Login, Home } from "./screen"
import Login from "./screen/loginScreen"
// import Home from "./screen/home"
import DrawerNavigation from "./screen/drawer"
import { NavigationContainer, getFocusedRouteNameFromRoute } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { View, Button } from 'react-native'
import { connect } from 'react-redux'

const Stack = createStackNavigator()

class App extends Component {  
  state = {
    headerTitleName: "Home"
  }

  setHeaderTitleName = (headerTitleName) => {
    this.setState({
      headerTitleName
    })
  }

  render() {
    const { isLogin } = this.props
    // console.log(route)

    return (
      <NavigationContainer>
        <Stack.Navigator>
          {
            isLogin ? (
              <Stack.Screen
                name="Home"
                children={props => <DrawerNavigation {...props}/>}
                options={{
                  headerTitle: "Home"
                }}                         
              /> 
            ) : (
              <Stack.Screen
                name="Login"
                children={props => <Login {...props}/>}            
                options={{
                      headerShown: false           
                }}  
              />  
            )
          }       
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}

const mapStateToProps = (state) => ({
  isLogin: state.AuthReducer.isLogin
})

const mapDispatchToProps = (dispatch) => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(App)