import React, { Component } from 'react'
import Navbar from "../../component/template/navbar"
import { RowInput } from "../../component"
import "./login.css"
import homeLogo from "../../asset/logo/home.png"

class Login extends Component {
    constructor(props){
        super(props)
        this.state = {
            username: "",
            password: ""
        }
    }

    setValue = (el) => {
        this.setState({
            [el.name]: el.value
        })
    }

    onLogin = () => {
        const { users } = this.props
        const { username, password } = this.state
        
        for (let i = 0; i < users.length; i++) {
            if(users[i].username === username && users[i].password === password) {
                // const user = users[i]
                this.props.fnChangeLoginStatus(users[i])
                return alert("login success")
            }          
        }

        return alert("Invalid username or password " + username + " dan " + password)
    }

    render(){
        return (
            <>
                <div className="login">
                    <div className="navbar">
                        <div className="navbarContent">
                            <img className="navbarLogo" src={homeLogo} alt="logo"/>                            
                            <Navbar
                            label="Home"
                            linkTo="/"
                            logo="home"/>
                        </div>                        
                    </div>
                    <div className="loginContent">
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
                    </div>                    
                </div>
            </>
        )               
    }
}

export default Login