import React, {Component} from "react";
import {Switch, Route, Link } from "react-router-dom";
import Navbar from "../../component/template/navbar"
import EditKaryawan from "../editEmployee"
import CV from "../cv"
import "./employee.css"

class Employee extends Component {
    constructor(props){
        super(props)
        this.state = {
            currentUser: {}
        }
    }
    
    componentDidMount(){
        const { users, userOnLogin } = this.props
        for (let i = 0; i < users.length; i++) {
            if (users[i].username === userOnLogin.username) {
                this.setState({
                    currentUser: users[i]
                })
                return
            }            
        }
    }

    // logout = () => {
    //     localStorage.removeItem("userOnLogin")
    // }

    onClickLogoutHandle = () => {
        this.props.doLogout()
    }


    render(){
        const { users, doSaveUsers } = this.props
        return (
            <>
                <div className="employee">
                    {/* <h1>Ini Employee</h1> */}
                    <div className="navbar">                        
                        <Navbar
                            linkTo="/employee"
                            label="Home"
                        />
                        <Navbar
                            linkTo="/employee/edit-karyawan"
                            label="Edit CV"
                        />
                        <Link to="/">
                            <button onClick={this.onClickLogoutHandle}>Logout</button>
                        </Link>
                    </div>                    
                    <div>
                        <Switch>
                            <Route exact path="/employee">
                                <div>Welcome {this.state.currentUser.name}</div>
                                <CV
                                    user={this.state.currentUser}
                                />
                            </Route>
                            <Route path="/employee/edit-karyawan">
                                <EditKaryawan
                                    users = {users}
                                    userOnEdit = {this.state.currentUser}
                                    doSaveUsers = {doSaveUsers}
                                />
                            </Route>                            
                        </Switch>
                    </div>
                </div>
            </>
        )
    }
}

export default Employee;