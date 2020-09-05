import React, {Component} from "react"
import {Switch, Route, Redirect} from "react-router-dom"
import {Login, HRD, Employee} from "../../../page"
import { saveUsers, saveDivisions, setLogin, setLogout } from "../../../action"
import { connect } from "react-redux"

class Content extends Component {
    constructor(props){
        super(props)
        this.state = {}
    }

    render(){
        const { users, divisions, userOnLogin, isLogin, doLogin, doLogout, doSaveUsers, doSaveDivisions } = this.props
        return (
            <>
                <Switch>
                    <Route exact path="/">
                        {
                            (isLogin && (userOnLogin.division).toUpperCase() === "HRD") ? (
                                <Redirect to="/hrd"/>
                            ) : (isLogin) ? (
                                <Redirect to="/employee"
                                />
                            ) : (
                                <Login
                                    users = {users}
                                    doLogin = {doLogin}
                                />
                            )
                        }
                    </Route>
                    <Route path="/hrd">
                        {
                            (!isLogin || (userOnLogin.division).toUpperCase() !== "HRD") ? (
                                <Redirect to="/"/>
                            ) : (
                                <HRD
                                    users = {users}
                                    divisions = {divisions}
                                    userOnLogin = {userOnLogin}
                                    doLogout = {doLogout}
                                    doSaveUsers = {doSaveUsers}
                                    doSaveDivisions = {doSaveDivisions}
                                />
                            )
                        }
                    </Route>
                    <Route path="/employee">
                        {
                            (!isLogin) ? (
                                <Redirect to="/"/>
                            ) : (
                                <Employee
                                    users = {users}
                                    userOnLogin = {userOnLogin}
                                    doLogout = {doLogout}
                                    doSaveUsers = {doSaveUsers}
                                />
                            )
                        }
                    </Route>
                </Switch>
            </>
        )
    }
}

// Get states from reducer as a props
const mapStateToProps = (state) => ({
    users : state.usersReducer.users,
    divisions : state.divisionsReducer.divisions,
    userOnLogin : state.authReducer.userOnLogin,
    isLogin : state.authReducer.isLogin
})

const mapDispatchToProps = (dispatch) => ({
    doSaveUsers: (users) => dispatch(saveUsers(users)),
    doSaveDivisions: (divisions) => dispatch(saveDivisions(divisions)),
    doLogin: (user) => dispatch(setLogin(user)),
    doLogout: () => dispatch(setLogout())
})

// Connect it to redux
export default connect(mapStateToProps, mapDispatchToProps)(Content);