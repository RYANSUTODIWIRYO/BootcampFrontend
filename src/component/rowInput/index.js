import React, {Component} from "react"
import Input from "../input"
import "./rowInput.css"

class RowInput extends Component {
    constructor(props){
        super(props)
        this.state = {}
    }
    
    render(){
        return (
            <>
                <label htmlFor={this.props.name}>{this.props.label}</label>
                <Input 
                    type={this.props.type}
                    name={this.props.name}
                    value={this.props.value}
                    fnSetValue={this.props.fnSetValue}
                    ref={this.props.ref}
                />
            </>
        )
    }
}

export default RowInput