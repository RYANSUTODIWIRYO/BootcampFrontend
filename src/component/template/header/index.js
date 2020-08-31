import React, {Component} from "react"
import "./header.css"

class Header extends Component {
    render(){
        return (
            <>
                <div className="container-wrapper" style={{backgroundColor:"rgb(245, 245, 245)"}}>
                    <div className="header">                        
                        <h2>HRD Information System</h2>
                    </div>
                </div>
            </>
        )
    }
}

export default Header