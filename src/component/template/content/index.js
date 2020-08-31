import React, {Component} from "react"
import {Switch, Route} from "react-router-dom"
import {Login, HRD, Employee} from "../../../page"

class Content extends Component {
    render(){
        return (
            <>
                <Switch>
                    <Route exact path="/">
                        <Login />
                    </Route>
                    <Route path="/hrd">
                        <HRD />
                    </Route>
                    <Route path="/employee">
                        <Employee />
                    </Route>
                </Switch>
            </>
        )
    }
}

export default Content;