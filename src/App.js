import React, {Component} from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Header, Content, Footer } from "./component/template";

class App extends Component {
    render() {
        return (
            <>
                <Router>
                    <Header/>
                    <Content/>
                    <Footer/>
                </Router>
            </>
        )
    }
}

export default App;