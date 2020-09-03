import React, { Component } from 'react'
import Navbar from "../../component/template/navbar"
import "./home.css"
import loginLogo from "../../asset/logo/login.png"

class Home extends Component {

    // showStudents = () => {
    //     const users = this.props.users
    //     return users.map((user, idx) => {
    //         return (
    //             <tr key={idx}>
    //                 <td>{user.name}</td>
    //                 <td>{user.address}</td>
    //             </tr>
    //         )
    //     })
    // }

    render(){
        return (
            <>
                <div className="home">
                    <div className="navbar">
                        <div className="navbarContent">
                            <img className="navbarLogo" src={loginLogo} alt="logo"/>
                            <Navbar
                                linkTo="/login"
                                label="Login"
                            />
                        </div>
                    </div>
                    <div className="homeContent">
                        <div>
                            Welcome Home
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Home