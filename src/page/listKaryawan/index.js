import React, { Component } from "react"
import "./listKaryawan.css"
import CV from "../cv"
// import { saveUsers } from "../../action"
// import { connect } from "react-redux"

class ListKaryawan extends Component {
    constructor(props){
        super(props)
        this.state = {
            userOnView: null
        }
    }

    onChangeHandle = (e, username) => {   

        const { users, doSaveUsers } = this.props
        const div = e.target.value 
        const updatedUsers = users.map((user) => {
            if (user.username === username){
                return {
                    ...user,
                    // username: user.username,
                    // password: user.password,
                    // name: user.name,
                    division: div,
                    // address: user.address,
                    // dateOfBirth: user.dateOfBirth
                }
            } else {
                return user
            }
        })

        doSaveUsers(updatedUsers)

        // this.setState({
        //     users: newUsers
        // })

        // localStorage.users = JSON.stringify(newUsers)
        // window.location.reload()
    }

    setValue = (val) => {
        this.setState({
            userOnView: val
        })
    }

    showTable = () => {
        const { users, divisions } = this.props
        return users.map((user, idx) => {
            const { username, name, division } = user
            return (
                <tr key={idx}>
                    <td>{idx + 1}</td>
                    <td>{name}</td>
                    <td>
                        <select defaultValue={division} onChange={(e) => this.onChangeHandle(e, username)}>
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
                    <td><button onClick={() => {this.setValue(user)}}>View CV</button></td>
                </tr>
            )
        })
    }


    render(){
        const { userOnView } = this.state
        if (userOnView === null) {
            return(
                <div>
                    <h3>List Karyawan</h3>
                    <table className="tableListKaryawan">
                        <thead>
                            <tr>                            
                                <th>No</th>
                                <th>Name</th>          
                                <th>Division</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.showTable()}
                        </tbody>
                    </table>
                </div>
            )
        } else {
            return (
                <>
                    <CV
                        user={userOnView}
                    />
                    <button style={{marginLeft:"120px"}} onClick={() => {this.setValue(null)}}>Back</button>
                </>                
            )
        }
       
    }
}

// const mapDispatchToProps = (dispatch) => ({
//     doSaveUsers: (users) => dispatch(saveUsers(users))
// })

// export default connect(null, mapDispatchToProps)(ListKaryawan)

export default ListKaryawan