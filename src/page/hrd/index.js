import React, {Component} from "react";
import {Switch, Route, Link } from "react-router-dom";
import Navbar from "../../component/template/navbar"
import "./hrd.css"
import { InputDivisi, ListDivisi, InputKaryawan, ListKaryawan } from "../../page"
import CV from "../cv"

class HRD extends Component {
    logout = () => {
        this.props.doLogout()
    }

    render(){
        const { users, divisions, doSaveUsers, doSaveDivisions } = this.props

        return (
            <>
                <div className="hrd">
                    <div className="navbar">
                        <Navbar
                            linkTo="/hrd/input-karyawan"
                            label="Input Karyawan"
                        />
                        <Navbar
                            linkTo="/hrd/list-karyawan"
                            label="List Karyawan"
                        />
                        <Navbar
                            linkTo="/hrd/input-divisi"
                            label="Input Divisi"
                        />
                        <Navbar
                            linkTo="/hrd/list-divisi"
                            label="List Divisi"
                        />
                        <Navbar
                            linkTo="/hrd/cv"
                            label="CV"
                        />
                        <Link to="/">
                        <button onClick={this.logout}>Logout</button>
                        </Link>
                    </div>

                    <Switch>
                        <Route exact path="/hrd">
                            <div>
                                <h2>Welcome HRD</h2>
                            </div>
                        </Route>
                        <Route path="/hrd/input-karyawan">
                            <InputKaryawan
                                users = {users}
                                doSaveUsers = {doSaveUsers}
                            />
                        </Route>
                        <Route path="/hrd/list-karyawan">
                            <ListKaryawan
                                users = {users}
                                divisions = {divisions}
                                doSaveUsers = {doSaveUsers}
                            />
                        </Route>
                        <Route path="/hrd/input-divisi">
                            <InputDivisi
                                divisions = {divisions}
                                doSaveDivisions = {doSaveDivisions}
                            />
                        </Route>
                        <Route path="/hrd/list-divisi">
                            <ListDivisi
                                divisions = {divisions}
                            />
                        </Route>
                        <Route path="/hrd/cv">
                            <CV />
                        </Route>
                    </Switch>
                </div>
            </>
        )
    }
}

export default HRD