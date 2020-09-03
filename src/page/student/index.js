import React, { Component } from 'react'
import Navbar from "../../component/template/navbar"
import { Card } from "../../component"
import "./student.css"
import logoutLogo from "../../asset/logo/logout.png"

class Student extends Component {
    render(){
        const user = this.props.userOnLogin
        return (
            <>
                <div className="student">
                    <div className="navbar">
                        <div className="navbarContent" onClick={() => this.props.fnChangeLogoutStatus()}>
                            <img className="navbarLogo" src={logoutLogo} alt="logo"/>
                            <Navbar
                                label="Logout"
                                linkTo="/login"
                            />
                        </div>                        
                    </div>
                    <div className="studentContent">
                        {/* <div>
                            Helo {user.name}
                        </div> */}
                        <div className="card">
                            <div>
                                <Card
                                    picture={user.picture}
                                    name={user.name}
                                    quotes={user.quotes}
                                    github={user.github}            
                                />
                            </div>
                        </div>                        
                    </div>            
                </div>
            </>
        )
    }
}

export default Student