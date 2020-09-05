import React, { Component } from "react"
import RowInput from "../../component/rowInput"
import "./inputDivisi.css"
// import { saveDivisions } from "../../action"
// import { connect } from "react-redux"

class InputDivisi extends Component {
    constructor(props){
        super(props)
        this.state = {
            division: "",
            // divisions: []
        }
    }

    // componentDidMount(){
    //     const divisions = localStorage.divisions ? JSON.parse(localStorage.divisions) : []
    //     this.setState({
    //         divisions
    //     })
    // }

    setValue = (el) => {
        this.setState({
            [el.name]: el.value
        })
    }

    // saveData = (dataName, data) => {
    //     let listOfData = localStorage.getItem(dataName) ? JSON.parse(localStorage.getItem(dataName)) : []
    //     listOfData.push(data)
    //     localStorage.setItem(dataName, JSON.stringify(listOfData))
    //     window.location.reload()
    // }

    // addDivision = (event) => {
    //     event.preventDefault()

    //     const isExist = this.state.divisions.some(division => this.state.division === division)
    //     if (isExist){
    //         alert("Division is already exist!")
    //         return
    //     }

    //     this.saveData("divisions", this.state.division)
    //     alert("Success add new division!")
    // }

    onClickHandle = async (event) => {
        event.preventDefault()
        let { divisions, doSaveDivisions } = this.props
        const { division } = this.state

        const isExist = divisions.some(value => value === division)
        if (isExist){
            return alert("Division is already exist!")            
        }
        
        // Add data to division
        alert("Success add new division " + division)
        divisions.push(division)
        doSaveDivisions(divisions)
        // window.location.reload()
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

// const mapDispatchToProps = (dispatch) => ({
//     doSaveDivisions: (divisions) => dispatch(saveDivisions(divisions))
// })

// export default connect(null, mapDispatchToProps)(InputDivisi)

export default InputDivisi