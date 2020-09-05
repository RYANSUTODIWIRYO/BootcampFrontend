import React, { Component } from "react"
import RowInput from "../../component/rowInput"
import "./inputKaryawan.css"
// import { saveUsers } from "../../action"
// import { connect } from "react-redux"

class InputKaryawan extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: "",
            password: "",
            name: "",
            address: "",
            dateOfBirth: "",

            // users: []
        }
    }

    // componentDidMount(){
    //     const users = localStorage.users ? JSON.parse(localStorage.users) : []
    //     this.setState({
    //         users
    //     })
    // }
    
    setValue = (el) => {
        this.setState({
            [el.name]: el.value
        })
    }

    // saveData = (dataName, data) => {
    //     let listOfData = localStorage.getItem(dataName) ? JSON.parse(localStorage.getItem(dataName)) : []
    //     listOfData.push(data)
    //     localStorage.setItem(dataName, JSON.stringify(listOfData))
    //     window.location.reload()
    // }

    // addEmployee = (event) => {
    //     // event.preventDefault()
    //     const { username, name, address, dateOfBirth, users} = this.state
    //     const password = "pass" + username
    //     const user = { username, password, name, dateOfBirth, address}

    //     const isExist = users.some(user => user.username === username)
    //     if (isExist){
    //         alert("Employee is already exist!")
    //         return
    //     }

    //     this.saveData("users", user)
    //     alert("Success add new employee!")
    //     }

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
        alert("Success add new employee!")
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

// const mapDispatchToProps = (dispatch) => ({
//     doSaveUsers: (users) => dispatch(saveUsers(users))
// })

// export default connect(null, mapDispatchToProps)(InputKaryawan)

export default InputKaryawan
