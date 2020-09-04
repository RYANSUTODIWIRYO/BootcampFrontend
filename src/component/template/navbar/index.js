import React, {Component} from "react";
import { Link } from "react-router-dom";
import "./navbar.css"

class Navbar extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    
    render() {
        return (
            // <div className="navbar">
            //     <Link to="/hrd/input-karyawan">
            //         <div>Input Karyawan</div>
            //     </Link>
            //     <Link to="/hrd/list-karyawan">
            //         <div>List Karyawan</div>
            //     </Link>
            //     <Link to="/hrd/input-divisi">
            //         <div>Input Divisi</div>
            //     </Link>                    
            //     <Link to="/hrd/list-divisi">
            //         <div>List Divisi</div>
            //     </Link>
            //     <Link to="/hrd/cv">
            //         <div>CV</div>
            //     </Link> 
            // </div>
            <>
                <Link to={this.props.linkTo}>
                    <div style={{textDecoration: "none"}}>{this.props.label}</div>
                </Link>
            </>
        )
    }
}

export default Navbar;