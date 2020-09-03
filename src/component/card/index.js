import React, { Component } from 'react'
import "./card.css"

class Card extends Component {
    render(){
        return(
            <div className="cardItem">
                <div className="cardProfilePicture">
                    <img src={this.props.picture} alt="avatar"/> 
                </div>
                <div className="cardDetail">
                    <h4>{this.props.name}</h4>
                    <p>"{this.props.quotes}"</p>
                    <a href={this.props.github} target="blank"><img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="avatar"></img></a>
                </div>
            </div>
        )
    }
}

export default Card