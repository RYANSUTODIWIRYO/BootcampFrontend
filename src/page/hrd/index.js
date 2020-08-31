import React, {Component} from "react";
import {Switch, Route, Link } from "react-router-dom";
import Navbar from "../../component/template/navbar"
import "./hrd.css"

import InputKaryawan from "./inputKaryawan"
import ListKaryawan from "./listKaryawan"
import InputDivisi from "./inputDivisi"
import ListDivisi from "./listDivisi"
import CV from "./cv"

class HRD extends Component {

    logout = () => {
        localStorage.removeItem("userOnLogin")
    }

    render(){
        return (
            <>
                <div className="hrd">
                    {/* <Navbar /> */}

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
                            <InputKaryawan />
                        </Route>
                        <Route path="/hrd/list-karyawan">
                            <ListKaryawan />
                        </Route>
                        <Route path="/hrd/input-divisi">
                            <InputDivisi />
                        </Route>
                        <Route path="/hrd/list-divisi">
                            <ListDivisi />
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

export default HRD;