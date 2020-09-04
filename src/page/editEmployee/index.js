import React, { Component } from "react"
import RowInput from "../../component/rowInput"

class EditKaryawan extends Component {
    constructor(props) {
        super(props)
        this.state = {
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
                    name,
                    address,
                    dateOfBirth
                }
            } else {
                return user
            }
        })

        doSaveUsers(updatedUsers)
        alert("Edit data is success")

        window.location.reload()
    }
    
    render(){
        const { name, address, dateOfBirth } = this.props.userOnEdit
        return(
            <div className="inputKaryawan">
                <form>
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