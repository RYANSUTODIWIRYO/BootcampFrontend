import React, {Component} from "react";
import Header from "./component/header"
import Body from "./component/body"
import Footer from "./component/footer";

class App extends Component {
    render() {
      return (
        <>
            <Header/>
            <Body/>
            <Footer/>
        </>
      )
    }
  }

export default App;