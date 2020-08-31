import React, { Component } from "react"
import RowInput from "../../../component/rowInput"

class InputKaryawan extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: "",
            password: "",
            name: "",
            address: "",

            users: []
        }
    }

    componentDidMount(){
        const users = localStorage.users ? JSON.parse(localStorage.users) : []
        this.setState({
            users
        })
    }
    
    setValue = (el) => {
        this.setState({
            [el.name]: el.value
        })
    }

    saveData = (dataName, data) => {
        let listOfData = localStorage.getItem(dataName) ? JSON.parse(localStorage.getItem(dataName)) : []
        listOfData.push(data)
        localStorage.setItem(dataName, JSON.stringify(listOfData))
        window.location.reload()
    }

    addEmployee = (event) => {
        event.preventDefault()
        const { username, name, address, users} = this.state
        const password = "password" + name
        const user = { username, password, name, address}

        const isExist = users.some(user => user.username == username)
        if (isExist){
            alert("Employee is already exist!")
            return
        }

        this.saveData("users", user)
        alert("Success add new employee!")
        }
    
    render(){
        return(
            <div>
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
                        label="Address"
                        type="text"
                        name="address"
                        fnSetValue={this.setValue}/>
                </div>
                <div>
                    <button onClick={this.addEmployee}>Add Employee</button>
                </div>
                </form>
            </div>
        )
    }
}

export default InputKaryawan