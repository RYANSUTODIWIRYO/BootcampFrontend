import React, {Component} from "react";

import {RowInput} from "../../component"
import "./login.css"

class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            username: "",
            password: ""
        };
    }

    setValue = (el) => {
        this.setState({
            [el.name]: el.value
        })
    }

    onClickHandle = () => {
        const { username, password } = this.state
        const { users, doLogin } = this.props

        for (let i = 0; i < users.length; i++) {
            if (users[i].username === username && users[i].password === password ) {
                doLogin(users[i])
            }
        }
        
        return alert("Invalid username or password")
    }

    render(){
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
                        <button onClick={this.onClickHandle}>Login</button>
                    </div>
                </div>
            </>
        )
    }
}

export default Login