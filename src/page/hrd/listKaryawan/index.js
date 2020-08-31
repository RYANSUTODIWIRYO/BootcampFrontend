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

    updateData = () => {

    }

    showTable = () => {
        const { users, divisions } = this.state
        return users.map((user, idx) => {
            const { username, name, division, address } = user

            // let divisionOption = divisions.map((div) =>
            //     <option key={div} value={div}>{div}</option>
            // )

            return (
                <tr key={idx + 1}>
                    <td>{idx + 1}</td>
                    <td>{name}</td>
                    <td>
                        <select onChange={this.updateData(username, this.value)}>
                            <option value=""> -- Please Choose -- </option>
                            {
                                divisions.map(div => {
                                    let isSelected = false
                                    if (div === division){
                                        isSelected = true
                                    }
                                    return (
                                        <option key={div} value={div} selected={isSelected}>{div}</option>
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