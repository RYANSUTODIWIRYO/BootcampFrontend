import React, {Component} from "react"

class Input extends Component {
    constructor(props){
        super(props)
        this.state = {}
    }

    render(){
        return (
            <>
                <input
                    type={this.props.type}
                    name={this.props.name}
                    defaultValue={this.props.value}
                    onChange={(el) => this.props.fnSetValue(el.target)}
                    ref={this.props.ref}
                />
            </>
        )
    }
}

export default Input