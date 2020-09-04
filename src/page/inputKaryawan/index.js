import React, { Component } from "react"
import RowInput from "../../component/rowInput"
import "./inputKaryawan.css"
class InputKaryawan extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: "",
            password: "",
            name: "",
            address: "",
            dateOfBirth: "",
        }
    }
    
    setValue = (el) => {
        this.setState({
            [el.name]: el.value
        })
    }

    onClickHandle = (event) => {
        event.preventDefault()
        let { users, doSaveUsers } = this.props
        const { username } = this.state
        const password = "pass" + username
        const newUser = { ...this.state, password }

        const isExist = users.some(user => user.username === username)
        if (isExist){
            return alert("Employee is already exist!")            
        }
        
        // Add data to users
        users.push(newUser)
        doSaveUsers(users)
        window.location.reload()
    }

    
    render(){
        return(
            <div className="inputKaryawan">
                <form>
                <div>
                    <RowInput 
                        label="Username"
                        type="text"
                        name="username"
                        fnSetValue={this.setValue}/>
                </div>
                <div>
                    <RowInput 
                        label="Name"
                        type="text"
                        name="name"
                        fnSetValue={this.setValue}/>
                </div>
                <div>
                    <RowInput 
                        label="Date of Birth"
                        type="date"
                        name="dateOfBirth"
                        fnSetValue={this.setValue}/>
                </div>
                <div>
                    <RowInput 
                        label="Address"
                        type="text"
                        name="address"
                        fnSetValue={this.setValue}/>
                </div>
                <div>
                    <button onClick={this.onClickHandle}>Add Employee</button>
                </div>
                </form>
            </div>
        )
    }
}

export default InputKaryawan
