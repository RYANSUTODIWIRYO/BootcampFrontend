import React, { Component } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import {Header, Body, Footer} from "./component/template"
import "./style.css"

class App extends Component {
  render() {
    return(
      <>
        <Router>
          <Header />
          <Body />
          <Footer />
        </Router>
      </>
    )
  }
}

export default App;
