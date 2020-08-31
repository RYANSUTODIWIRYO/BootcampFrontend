import React, { Component } from "react"
import "./listKaryawan.css"

class ListKaryawan extends Component {
    constructor(props) {
        super(props)
        this.state = {
            users: [],
            divisions: []
        }
    }

    componentDidMount(){
        const users = localStorage.users ? JSON.parse(localStorage.users) : []
        const divisions = localStorage.divisions ? JSON.parse(localStorage.divisions) : []
        this.setState({
            users,
            divisions
        })
    }

    updateData = (e, username) => {        
        // console.log(username) 
        // console.log(e.target.value)
        const div = e.target.value 
        let newUsers = this.state.users.map((user) => {
            if (user.username === username){
                return {
                    username: user.username,
                    password: user.password,
                    name: user.name,
                    division: div,
                    address: user.address
                }
            } else {
                return user
            }
        })

        this.setState({
            users: newUsers
        })

        localStorage.users = JSON.stringify(newUsers)
        // window.location.reload()
    }

    

    showTable = () => {
        const { users, divisions } = this.state
        return users.map((user, idx) => {
            const { username, name, division, address } = user
            return (
                <tr key={idx}>
                    <td>{idx + 1}</td>
                    <td>{name}</td>
                    <td>
                        <select defaultValue={division} onChange={(e) => this.updateData(e, username)}>
                            <option value=""> -- Please Choose -- </option>
                            {
                                divisions.map(div => {
                                    return (
                                        <option key={div} value={div}>{div}</option>
                                    )
                                })
                            }                     
                        </select>
                    </td>
                    <td>{address}</td>
                </tr>
            )
        })
    }


    render(){
        return(
            <div>
                <h3>List Karyawan</h3>
                <table className="tableListKaryawan">
                    <thead>
                        <tr>                            
                            <th>No</th>
                            <th>Name</th>
                            <th>Division</th>
                            <th>Address</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.showTable()}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default ListKaryawan