import React, { Component } from 'react'
import { RowInput } from '../../component'
// import { connect } from "react-redux"
import FirebaseContext from '../../config/firebase/firebaseContext';
// import { auth } from 'firebase';

// Child class
class CreateUserForm extends Component {
    constructor(props){
        super(props)
        this.state = {
            email: "",
            name: "",
            role: "",
            picture: "",
            quotes:"",
            github: ""
        }
    }

    setValue = (el) => {
        this.setState({
            [el.name]: el.value
        })
    }

    onClickHandler = () => {
        const { email, name, role, picture , quotes, github } = this.state
        const password = "pass" + name.toLowerCase()
        
        this.props.firebase
            .createFirebaseUser({email, password}) // ke authentication
            .then(authUser => {
                return this.props.firebase.usersDb().doc(authUser.user.uid).set({ // firestore
                    name,
                    role,
                    picture,
                    quotes,
                    github
                }).then(() => {
                    window.location.reload()
                }).catch(err => {
                    // Handle error here
                    // Rollback for createFirebaseUser error
                })
            }).catch(err => {
                console.error(err)
                alert(err.message)
            })
    }

    render(){
        return(
            <div className="createUser">
                <div>
                    <h3>Create User</h3>
                </div>
                <div className="createUserContent">
                    <div className="createUserForm">
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
                                type="text"
                                name="name"
                                label="Name"
                                fnSetValue={this.setValue}
                            />
                        </div>
                        <div>
                            <RowInput
                                type="text"
                                name="role"
                                label="Role"
                                fnSetValue={this.setValue}
                            />
                        </div>                    
                        <div>
                            <RowInput
                                type="text"
                                name="picture"
                                label="Profile Picture"
                                fnSetValue={this.setValue}
                            />
                        </div>
                        <div>
                            <RowInput
                                type="text"
                                name="quotes"
                                label="Quotes"
                                fnSetValue={this.setValue}
                            />
                        </div>
                        <div>
                            <RowInput
                                type="text"
                                name="github"
                                label="Github"
                                fnSetValue={this.setValue}
                            />
                        </div>
                        <div>
                            <button onClick={this.onClickHandler}>Create User</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }    
}

// Parent class
class CreateUser extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <FirebaseContext.Consumer>
                {firebase => <CreateUserForm {...this.props} firebase={firebase} />}
            </FirebaseContext.Consumer>
        )
    }
}

export default CreateUser