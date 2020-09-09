import React, { Component } from 'react'
import Navbar from "../../component/template/navbar"
import CreateUser from "../createUser"
import ShowUsers from "../showUsers"
// import Home from "../home"
// import { Card } from "../../component"
import "./admin.css"
import { Switch, Route } from 'react-router-dom'
import FirebaseContext from '../../config/firebase/firebaseContext';

import homeLogo from "../../asset/logo/home.png"
import logoutLogo from "../../asset/logo/logout.png"
import studentsLogo from "../../asset/logo/student.png"

class Admin extends Component {
    // constructor(props) {
    //     super(props)
    //     this.state = {
    //         users: []
    //     }
    // }

    // componentDidMount() {
    //     this.props.firebase.usersDb.get()
    //         .then((snapshot) => {
    //             snapshot.forEeach((doc) => {
    //                 console.log(doc.id, '=>', doc.data())
    //             })
    //         })
    //         .catch((err) => {
    //             console.log("error :" + err)
    //         })
    // }
    
    // showCards = () => {
    //     const { users } = this.props
    //     return users.map((user, idx) => {
    //         return (
    //             <div key={idx} style={{margin:"10px"}}>
    //                 <Card
    //                     picture={user.picture}
    //                     name={user.name}
    //                     quotes={user.quotes}
    //                     github={user.github}            
    //                 />
    //             </div>
    //         )
    //     })
    // }

    render(){
        // const user = this.props.userOnLogin
        return (
            <>
                <div className="admin">
                    <div className="navbar">
                        <div className="navbarContent">
                            <img className="navbarLogo" src={homeLogo} alt="logo"/>
                            <Navbar
                                label="Home"
                                linkTo="/admin"
                            />
                        </div>
                        {/* <div className="navbarContent">
                            <img className="navbarLogo" src={studentsLogo} alt="logo"/>
                            <Navbar
                                label="Students"
                                linkTo="/admin/students"
                            />
                        </div> */}
                        <div className="navbarContent">
                            <img className="navbarLogo" src={studentsLogo} alt="logo"/>
                            <Navbar
                                label="Create User"
                                linkTo="/admin/create-user"
                            />
                        </div>
                        <div className="navbarContent" onClick={() => this.props.fnChangeLogoutStatus()}>
                            <img className="navbarLogo" src={logoutLogo} alt="logo"/>
                            <Navbar
                                label="Logout"
                                linkTo="/login"
                            />
                        </div>
                    </div>
                    <div className="adminContent">
                        <Switch>
                            <Route exact path="/admin">
                                <div className="card">
                                    <FirebaseContext.Consumer>
                                        {firebase => <ShowUsers {...this.props} firebase={firebase} />}
                                    </FirebaseContext.Consumer>
                                </div>                                
                            </Route> 
                            <Route path="/admin/create-user">
                                <div>
                                    <CreateUser />
                                </div>
                            </Route>
                        </Switch>

                    </div>
                </div>
            </>
        )
    }
}

export default Admin