import React, {Component} from "react";
import {Redirect } from "react-router-dom";

import {RowInput} from "../../component"
import "./login.css"

class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            username: "",
            password: "",
            // name: "",
            // position: "",
            isLogin: false,
            
            users: [],
            userOnLogin: []
        };
    }

    componentDidMount() {
        // const data = [
        //     {"username": "admin", "password": "passwordadmin", "name":"admin", "position": "hrd"},
        //     {"username": "ryan", "password": "passwordryan", "name":"ryan", "position": "manager"}
        //   ]
        const users = localStorage.users ? JSON.parse(localStorage.users) : []
        // const userOnLogin = localStorage.userOnLogin ? JSON.parse(localStorage.userOnLogin) : []
        
        let userOnLogin = []
        if (localStorage.userOnLogin) {
            userOnLogin = JSON.parse(localStorage.userOnLogin)
            this.setState({isLogin: true})
        } else {
            this.setState({isLogin: false})
        }
        this.setState({
            users,
            userOnLogin
        })

        // const arrIndex = users.findIndex(user => user.name === "ryan")
        // alert(users[arrIndex].position)
        
        // const users = [
        //     {"username": "admin", "password": "passwordadmin", "name":"admin", "position": "hrd", isLogin:"false"},
        //     {"username": "ryan", "password": "passwordryan", "name":"ryan", "position": "manager", isLogin:"false"}
        //   ]
        // localStorage.setItem("users", JSON.stringify(users))
    }

    setValue = (el) => {
        this.setState({
            [el.name]: el.value
        })
    }

    onLogin = () => {
        // alert(this.state.username + "\n" + this.state.password)
        const {username, password, users} = this.state
       
        if (username === "") {
            alert("Username must not empty")
            return
        } else if (password === "") {
            alert("Password must not empty")
            return
        }

        const arrIndex = users.findIndex(user => user.username === username && user.password === password)
        if(arrIndex === -1){
            alert("Invalid username or password")
            return
        }

        const userOnLogin = users[arrIndex]
        localStorage.setItem("userOnLogin", JSON.stringify(userOnLogin))

        // const user = users[arrIndex]
        this.setState({
            userOnLogin,
            isLogin: true
        })
    }

    render(){
        const {userOnLogin, isLogin} = this.state

        if (isLogin) {
            if(userOnLogin.division === "hrd"){
                return <Redirect to="/hrd"/>
            } else {
                return <Redirect to="/employee"/>
            }
        } else {
            return (
                <>
                    <div className="formLogin">
                        <h4>Login</h4>
                        <div>
                            <RowInput
                                type="text"
                                name="username"
                                label="Username"
                                fnSetValue={this.setValue}
                            />
                        </div>
                        <div>
                            <RowInput
                                type="password"
                                name="password"
                                label="Password"
                                fnSetValue={this.setValue}
                            />  
                        </div>
                        <div>
                            <button onClick={this.onLogin}>Login</button>
                        </div>
                    </div>
                </>
            )
        }
    }
}

export default Login;