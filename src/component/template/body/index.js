import React, { Component } from 'react'
import {Switch, Route, Redirect} from "react-router-dom"
import {Admin, Home, Login, Student} from "../../../page"

class Body extends Component {
    constructor(props){
        super(props)
        this.state = {
            users: [],
            userOnLogin: "",
            isLogin: false
        }
    }

    componentDidMount() {
        const defaultData = [
            {"username": "Admin", "password": "passwordadmin", "name":"Admin", "role":"admin", "quotes":"Mantap Juragan", "github":"https://github.com", "picture":"https://www.juventus.com/images/image/private/t_portrait_tablet_desktop/f_auto/dev/gasthabxcnpnfjah5uac.jpg"},
            {"username": "Ryan", "password": "passwordryan", "name":"Ryan", "role":"student", "quotes":"Mantap Gan", "github":"https://github.com/RYANSUTODIWIRYO", "picture":"https://i.ibb.co/kQMJF86/DSC-7410.jpg"},
            {"username": "Leonardo", "password": "passwordleonardo", "name":"Leonardo DiCaprio", "role":"student", "quotes":"Enak Rose", "github":"https://github.com", "picture":"https://cdn.idntimes.com/content-images/community/2019/02/186413a2093d0f5ee331075dc44e99e2-0f20dff170d646afc3ace3ea0738b750.jpg"},
            {"username": "Nabil", "password": "passwordnabil", "name":"Ahmad Nabil", "role":"student", "quotes":"Seharusnya kamu belajar berjalan dulu, nak! Barulah kamu bisa berlari.", "github":"hhttps://github.com/nbl77", "picture":"https://i.ibb.co/yFkZY5y/photoku.jpg"}
          ]
        let users = [], userOnLogin = "", isLogin = false

        // Get users data from local storage
        if (localStorage.users) { 
            users = JSON.parse(localStorage.users)
        } else {
            users = defaultData
            localStorage.setItem("users", JSON.stringify(users))
        }

        // Get login info from local storage
        if (localStorage.userOnLogin) { 
            isLogin = true
            userOnLogin = JSON.parse(localStorage.userOnLogin)
        }

        localStorage.setItem("isLogin", isLogin)
        this.setState({
            users,
            userOnLogin,
            isLogin
        })
    }

    changeLoginStatus = (userOnLogin) => {
        const isLogin = true
        localStorage.setItem("isLogin", isLogin)
        localStorage.setItem("userOnLogin", JSON.stringify(userOnLogin))
        this.setState({
            isLogin,
            userOnLogin
        })
    }

    changeLogoutStatus = () => {
        const isLogin = false, userOnLogin = ""
        localStorage.setItem("isLogin", isLogin)
        localStorage.removeItem("userOnLogin")
        this.setState({
            isLogin,
            userOnLogin
        })
    }

    render() {
        return(
            <Switch>
                <Route exact path="/">
                    {
                        (this.state.isLogin && this.state.userOnLogin.role === "admin") ? (
                            <Redirect to="/admin"/>
                        ) : (this.state.isLogin && this.state.userOnLogin.role === "student") ? (
                            <Redirect to="/student"/>
                        ) : 
                            <Home
                                users={this.state.users}
                            /> 
                    }
                </Route>
                <Route path="/login">
                    {
                        (this.state.isLogin && this.state.userOnLogin.role === "admin") ? (
                            <Redirect to="/admin"/>
                        ) : (this.state.isLogin && this.state.userOnLogin.role === "student") ? (
                            <Redirect to="/student"/>
                        ) : 
                            <Login
                                users = {this.state.users}
                                isLogin = {this.state.isLogin}
                                fnChangeLoginStatus = {this.changeLoginStatus}
                            /> 
                    }
                </Route>
                <Route path="/admin">
                    {
                        (this.state.isLogin && this.state.userOnLogin.role === "admin") ? (
                            <Admin
                                users = {this.state.users}
                                userOnLogin = {this.state.userOnLogin}
                                isLogin = {this.state.isLogin}
                                fnChangeLogoutStatus = {this.changeLogoutStatus}
                            />
                        ) : (
                            <Redirect to="/login"/>
                        )
                    }
                </Route>
                <Route path="/student">
                    {
                        (this.state.isLogin && this.state.userOnLogin.role === "student")? (
                            <Student
                                userOnLogin = {this.state.userOnLogin}
                                isLogin = {this.state.isLogin}
                                fnChangeLogoutStatus = {this.changeLogoutStatus}
                            />
                        ) : (
                            <Redirect to="/login"/>
                        )
                    }
                </Route>
            </Switch>
        )
    }
}

export default Body