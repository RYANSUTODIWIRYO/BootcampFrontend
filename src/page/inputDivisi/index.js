import React, { Component } from "react"
import RowInput from "../../component/rowInput"
import "./inputDivisi.css"
class InputDivisi extends Component {
    constructor(props){
        super(props)
        this.state = {
            division: "",
        }
    }

    setValue = (el) => {
        this.setState({
            [el.name]: el.value
        })
    }

    onClickHandle = (event) => {
        event.preventDefault()
        let { divisions, doSaveDivisions } = this.props
        const { division } = this.state

        const isExist = divisions.some(value => value === division)
        if (isExist){
            return alert("Division is already exist!")            
        }
        
        divisions.push(division)
        doSaveDivisions(divisions)
        window.location.reload()
    }

    render(){
        return(
            <div className="inputDivisi">
                <h3>Input Divisi</h3>
                <form>
                    <div>
                        <RowInput 
                            label="Division"
                            type="text"
                            name="division"
                            fnSetValue={this.setValue}/>
                    </div>        
                    <div>
                        <button onClick={this.onClickHandle}>Add Division</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default InputDivisi