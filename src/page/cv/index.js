import React, { Component } from "react"
import "./cv.css"

class CV extends Component {
    render(){
        const {name, address, dateOfBirth, division} = this.props.user
        return(
            <div>
                <table className="cvTable borderless">
                    <tbody>
                        <tr>
                            <th>Name</th>
                            <td>: {name}</td>
                        </tr>
                        <tr>
                            <th>Date of Birth</th>
                            <td>: {dateOfBirth}</td>
                        </tr>
                        <tr>
                            <th>Address</th>
                            <td>: {address}</td>
                        </tr>
                        <tr>
                            <th>Division</th>
                            <td>: {division}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

export default CV