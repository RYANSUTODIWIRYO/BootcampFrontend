import React, {Component} from 'react';
import './style.css'
import photo from '../assets/picture/pl.png'

class Footer extends Component {
    render() {
        return (
            <div className="content-wrapper" id="footer">
                <footer className="footer">
                    <img src={photo}></img>
                    <p><b>Curriculum Vitae @2020</b></p>
                </footer>                
            </div>
        )
    }
}

export default Footer;