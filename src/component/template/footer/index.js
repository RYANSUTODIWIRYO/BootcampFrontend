import React, {Component} from "react"
import "./footer.css"

class Footer extends Component {
    render(){
        return (
            <>
                <div className="container-wrapper" style={{backgroundColor:"rgb(68, 68, 68)"}}>
                    <div className="footer">
                        <h4>© Copyright 2020. All Right Reserved</h4>
                    </div>
                </div>
            </>
        )
    }
}

export default Footer