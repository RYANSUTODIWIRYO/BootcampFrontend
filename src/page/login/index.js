import React, {Component} from "react";
// import {Redirect } from "react-router-dom";

import {RowInput} from "../../component"
// import { setLogin } from "../../action"
// import { connect } from "react-redux"
import "./login.css"

class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            username: "",
            password: "",
            // // name: "",
            // // position: "",
            // isLogin: false,
            
            // users: [],
            // userOnLogin: []
        };
    }

    // componentDidMount() {
    //     const defaulData = [
    //         {"username": "admin", "password": "admin", "name":"admin", "division": "hrd", "address":"jakarta"},
    //         {"username": "ryan", "password": "ryan", "name":"ryan", "division": "manager", "address":"curug"}
    //       ]
    //     const users = localStorage.users ? JSON.parse(localStorage.users) : defaulData
       
    //     let userOnLogin = []
    //     if (localStorage.userOnLogin) {
    //         userOnLogin = JSON.parse(localStorage.userOnLogin)
    //         this.setState({isLogin: true})
    //     } else {
    //         this.setState({isLogin: false})
    //     }
    //     this.setState({
    //         users,
    //         userOnLogin
    //     })
    // }

    setValue = (el) => {
        this.setState({
            [el.name]: el.value
        })
    }

    // onLogin = () => {
    //     // alert(this.state.username + "\n" + this.state.password)
    //     const {username, password, users} = this.state
       
    //     if (username === "") {
    //         alert("Username must not empty")
    //         return
    //     } else if (password === "") {
    //         alert("Password must not empty")
    //         return
    //     }

    //     const arrIndex = users.findIndex(user => user.username === username && user.password === password)
    //     if(arrIndex === -1){
    //         alert("Invalid username or password")
    //         return
    //     }

    //     const userOnLogin = users[arrIndex]
    //     localStorage.setItem("userOnLogin", JSON.stringify(userOnLogin))

    //     // const user = users[arrIndex]
    //     this.setState({
    //         userOnLogin,
    //         isLogin: true
    //     })
    // }

    onClickHandle = () => {
        // alert("try to login")
        const { username, password } = this.state
        const { users, doLogin } = this.props
        
        for (let i = 0; i < users.length; i++) {
            if (users[i].username === username && users[i].password === password ) {
                alert("Login success!")
                return doLogin(users[i])
            }
        }      

        return alert("Invalid username or password")
    }

    render(){
        // alert("masuuukkk " + this.props.users)
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

// // Get states from reducer as a props
// const mapStateToProps = (state) => ({
//     users : state.usersReducer.users
// })

// const mapDispatchToProps = (dispatch) => ({
//     doLogin: (user) => dispatch(setLogin(user))
// })

// export default connect(mapStateToProps, mapDispatchToProps)(Login)

export default Login