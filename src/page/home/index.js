import React, { Component } from 'react'
import Navbar from "../../component/template/navbar"
import "./home.css"
import ShowUsers from "../showUsers"
// import Card from "../../component/card"
import loginLogo from "../../asset/logo/login.png"
// import { connect } from "react-redux"
// import { Switch, Route } from 'react-router-dom'
import FirebaseContext from '../../config/firebase/firebaseContext';

class Home extends Component {
    // constructor(props){
    //     super(props)
    //     this.state = {
    //         users=[]
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
    //     return this.props.users.map((user, idx) => {
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
                        <div className="card">
                            <FirebaseContext.Consumer>
                                {firebase => <ShowUsers {...this.props} firebase={firebase} />}
                            </FirebaseContext.Consumer>
                        </div>  
                    </div>
                </div>
            </>
        )
    }
}

// const mapStateToProps = (state) => ({
//     users : state.usersReducer.users
// })

// export default connect(mapStateToProps, null)(Home)
export default Home