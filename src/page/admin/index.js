import React, { Component } from 'react'
import Navbar from "../../component/template/navbar"
import { Card } from "../../component"
import "./admin.css"
import logoutLogo from "../../asset/logo/logout.png"

class Admin extends Component {
    showCards = () => {
        const { users } = this.props
        return users.map((user, idx) => {
            return (
                <div key={idx} style={{margin:"10px"}}>
                    <Card
                        picture={user.picture}
                        name={user.name}
                        quotes={user.quotes}
                        github={user.github}            
                    />
                </div>
            )
        })
    }

    render(){
        // const user = this.props.userOnLogin
        return (
            <>
                <div className="admin">
                    <div className="navbar">
                        <div className="navbarContent" onClick={() => this.props.fnChangeLogoutStatus()}>
                        <img className="navbarLogo" src={logoutLogo} alt="logo"/>
                            <Navbar
                                label="Logout"
                                linkTo="/login"
                            />
                        </div>
                    </div>
                    <div className="adminContent">
                        <div className="adminCard">
                            {this.showCards()}
                        </div>  
                    </div>
                </div>
            </>
        )
    }
}

export default Admin