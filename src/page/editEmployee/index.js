import React, { Component } from "react"
import RowInput from "../../component/rowInput"
// import "./inputKaryawan.css"

class EditKaryawan extends Component {
    constructor(props) {
        super(props)
        this.state = {
            // username: "",
            // password: "",
            name: "",
            address: "",
            dateOfBirth: "",

            // users: [],
            // user: "",
            // userOnLogin: ""
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

    onClickHandle = (e) => {  
        e.preventDefault()
        const { users, userOnEdit, doSaveUsers } = this.props
        let { name, address, dateOfBirth } = this.state

        const updatedUsers = users.map((user) => {
            if (user.username === userOnEdit.username){
                if (name === "") {name = userOnEdit.name}
                if (address === "") {address = userOnEdit.address}
                if (dateOfBirth === "") {dateOfBirth = userOnEdit.dateOfBirth}
                return {
                    ...user,
                    // username: user.username,
                    // password: user.password,
                    name,
                    // division: div,
                    address,
                    dateOfBirth
                }
            } else {
                return user
            }
        })

        doSaveUsers(updatedUsers)
        alert("Edit data is success")
        // this.setState({
        //     users: newUsers
        // })

        // localStorage.users = JSON.stringify(newUsers)
        window.location.reload()
    }
    
    render(){
        const { name, address, dateOfBirth } = this.props.userOnEdit
        return(
            <div className="inputKaryawan">
                <form>
                    {/* <div>
                        <RowInput 
                            label="Username"
                            type="text"
                            name="username"
                            fnSetValue={this.setValue}/>
                    </div> */}
                    <div>
                        <RowInput 
                            label="Name"
                            type="text"
                            name="name"
                            value={name}
                            fnSetValue={this.setValue}
                        />
                    </div>
                    <div>
                        <RowInput 
                            label="Date of Birth"
                            type="date"
                            name="dateOfBirth"
                            value={dateOfBirth}
                            fnSetValue={this.setValue}
                        />
                    </div>
                    <div>
                        <RowInput 
                            label="Address"
                            type="text"
                            name="address"
                            value={address}
                            fnSetValue={this.setValue}
                        />
                    </div>
                    <div>
                        <button onClick={this.onClickHandle}>Update Employee</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default EditKaryawan