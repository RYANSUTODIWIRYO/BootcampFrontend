import React, { Component } from 'react'
import {
    createDrawerNavigator,
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem } from "@react-navigation/drawer"
import Home from "../home"
import { connect } from "react-redux"
import { setLogout } from  "../../store/action"

const Drawer = createDrawerNavigator()

class DrawerNavigator extends Component {

    render() {
        return (
            <Drawer.Navigator
                drawerContent={props => {
                    return (
                        <DrawerContentScrollView {...props}>
                            <DrawerItemList {...props} />
                            <DrawerItem label="Logout" onPress={() => this.props.doLogout()} />
                        </DrawerContentScrollView>
                    )
                }}
            >
                <Drawer.Screen 
                    name="HomeTab"
                    children={props => <Home {...props}/>}
                />
            </Drawer.Navigator>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    doLogout: () => dispatch(setLogout())
})

export default connect(null, mapDispatchToProps)(DrawerNavigator)

// export default DrawerNavigator