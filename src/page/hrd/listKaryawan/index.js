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

            // let divisionOption = `
            //     <select onChange={this.updateData({username}, this.value)}>
            //         <option value="" /> -- Please Choose --
            // `
            // for (let i = 0; i < divisions.length; i++) {
                
                
            // }

            return (
                // const { username, name, division, address } = user
                // let divisionList = divisions.map((division) => {
                //     return(

                //     )

                // })


                <tr key={idx + 1}>
                    <td>{idx + 1}</td>
                    <td>{name}</td>
                    <td>
                        <select onChange={this.updateData(username, this.value)}>
                            <option value="" /> -- Please Choose --
                            {
                                divisions.map((division) => {
                                        return(
                                            <>
                                                <option value={division}/>{division}
                                            </>
                                        )                    
                                    })
                            }
                        </select>
                    </td>
                    {/* <td>{division}</td> */}
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