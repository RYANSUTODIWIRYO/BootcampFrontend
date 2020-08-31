import React, { Component } from "react"
import "./listDivisi.css"

class ListDivisi extends Component {
    constructor(props){
        super(props)
        this.state = {
            divisions : []
        }    
    }

    componentDidMount(){
        const divisions = localStorage.divisions ? JSON.parse(localStorage.divisions) : []
        this.setState({
            divisions
        })
    }

    showDataTable = () => {
        return this.state.divisions.map((division, idx) => {
            return (
                <tr key={idx + 1}>
                    <td style={{textAlign:"center"}}>{idx + 1}</td>
                    <td>{division}</td>
                </tr>
            )
        })
    }

    render(){
        return(
            <div>
                <h3>List Divisi</h3>
                <table className="tableListDivisi">
                    <thead>
                        <tr>                            
                            <th>No</th>
                            <th>Divisi</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.showDataTable()}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default ListDivisi