import React, { Component } from 'react'
import Navbar from "../../component/template/navbar"
import { RowInput } from "../../component"
import "./login.css"
import { setLogin } from "../../store/action/authAction"
import { connect } from "react-redux"
import FirebaseContext from "../../config/firebase/firebaseContext"

import homeLogo from "../../asset/logo/home.png"

class LoginForm extends Component {
    constructor(props){
        super(props)
        this.state = {
            email: "",
            password: ""
        }
    }

    setValue = (el) => {
        this.setState({
            [el.name]: el.value
        })
    }

    // onLogin = () => {
    //     const { users } = this.props
    //     const { username, password } = this.state
        
    //     for (let i = 0; i < users.length; i++) {
    //         if(users[i].username === username && users[i].password === password) {
    //             // const user = users[i]
    //             this.props.fnChangeLoginStatus(users[i])
    //             return alert("login success")
    //         }          
    //     }

    //     return alert("Invalid username or password " + username + " dan " + password)
    // }

    loginHandler = () => {
        const { email, password } = this.state
        const { doLogin } = this.props
        const { loginFirebaseUser, usersDb } = this.props.firebase

        alert (password)

        if (email === "") {return alert("Email must not empty!")}
        else if (password === "") {return alert("Password must not empty!")}

        loginFirebaseUser({email, password}) // sign in with authentication
            .then( res => {
                if (res.user) {
                    // doLogin()
                    // alert(res.user.uid)
                    usersDb().doc(res.user.uid).get()
                        .then( userOnLogin => {
                            // console.log(userOnLogin.data())
                            // alert("berhasil login")
                            doLogin(userOnLogin.data())
                        })                    
                }
            })
            .catch( err => {
                console.error(err)
                alert(err.message)
            })
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
                                    type="email"
                                    name="email"
                                    label="Email"
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
                                <button onClick={this.loginHandler}>Login</button>
                            </div>
                        </div>
                    </div>                    
                </div>
            </>
        )               
    }
}

class Login extends Component {
    constructor(props){
        super()
        this.state = {}
    }

    render() {
        return (
            <FirebaseContext.Consumer>
                {firebase => <LoginForm {...this.props} firebase={firebase} />}
            </FirebaseContext.Consumer>
        )
    }
}

const mapStateToProps = (state) => ({
    users: state.usersReducer.users
})

const mapDispatchToProps = (dispatch) => ({
    doLogin: (user) => dispatch(setLogin(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)