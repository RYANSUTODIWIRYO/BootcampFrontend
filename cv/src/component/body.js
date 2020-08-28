import React, { Component } from 'react';
import './style.css'
import photo from '../assets/picture/leonardo.jpg'


class Body extends Component {

    handleClick(id) {
        if (document.getElementById(id)) {
            let x = document.getElementById(id);
            if (x.style.display === "none") {
                x.style.display = "block";
            } else {
                x.style.display = "none";
            }
        }
    }

    render() {
        return (
            <div className="content-wrapper" id="body">
                <div className="body">
                    <div className="body-name">
                        <div><h1><b>Leonardo DiCaprio</b><br />(Java Programmer)</h1></div>
                        <img src={photo}></img>
                    </div>
                    <h4 onClick={() => this.handleClick('body-summary')}>Executive Summary&nbsp;</h4>
                    <div className="body-summary" id="body-summary">
                        <p>
                            &nbsp;&nbsp; A Java developer in G2Academy. I am self-confident, persistent, determined. hard worker and
                            a lifelong learner. Able to effectively self-manage during independent projects, as well as collaborate
                            as part of a productive team. I have good interpersonal, good communication, and analytical skills
                        </p>
                    </div>
                    <h4 onClick={() => this.handleClick('body-technical')}>Technical Skills&nbsp;</h4>
                    <div className="body-technical" id="body-technical">
                        <p><b>Programming Language : </b><br />Java, Go, C++</p>
                        <p><b>Web Development : </b><br />HTML, CSS, Javascript</p>
                        <p><b>Technology : </b><br />Springboot, RabbitMQ, MyBatis XML & Annotation, ProtoBuf, gRPC</p>
                        <p><b>Database : </b><br />MySQL, MongoDB</p>
                        <p><b>Tools : </b><br />GIT, Intellij IDEA, VSCode, Postman, MySQL Workbench, Sql Server, Adobe XD</p>
                        <p><b>Others :</b> <br />Analytical and Problem-Solving skills</p>
                    </div>
                    <h4 onClick={() => this.handleClick('body-education')}>Education&nbsp;</h4>
                    <div className="body-education" id="body-education">
                        <div>
                            <p><b>University of Indonesia</b><br />
                                Bachelor's Degree<br />
                                Major : Computer Science<br />
                            </p>
                            <p>2012-2015</p>
                        </div>
                    </div>
                    <h4 onClick={() => this.handleClick('body-experience')}>Professional Experience&nbsp;</h4>
                    <div className="body-experience" id="body-experience">
                        <div>
                            <p><b>Gojek - Senior Programmer</b><br />
                                <ol>
                                    <li>Develop Java Backend in a client proses</li>
                                    <li>Test and deploy the application using java</li>
                                </ol>
                            </p>
                            <p>2019-Present</p>
                        </div>
                        <div>
                            <p><b>Google Indonesia - Java Programmer</b>
                                <ol>
                                    <li>Develop Java Backend in a client proses</li>
                                    <li>Test and deploy the application using java</li>
                                </ol>
                            </p>
                            <p>2017-2019</p>
                        </div>
                        <div>
                            <p><b>Tokopedia - Junior Programmer</b><br />
                                <ol>
                                    <li>Develop Java Backend in a client proses</li>
                                    <li>Test and deploy the application using java</li>
                                </ol>
                            </p>
                            <p>2015-2017</p>
                        </div>
                    </div>
                    <h4 onClick={() => this.handleClick('body-additional-skills')}>Additional Skills&nbsp;</h4>
                    <div className="body-additional-skills" id="body-additional-skills">
                        <p><b>Language : </b><br />
                            English, Bahasa Indonesia<br />
                        </p>
                    </div>
                    <h4 onClick={() => this.handleClick('body-portofolio')}>Portofolio Project&nbsp;</h4>
                    <div className="body-portofolio" id="body-portofolio">
                        <div>
                            <p><b>Go-Rent feature</b><br />
                                <ol>
                                    <li>Rent car or vehicle</li>
                                </ol>
                            </p>
                        </div>
                        <div>
                            <p><b>Google Maps Lite</b><br />
                                <ol>
                                    <li>Develop Google Maps Lite</li>
                                    <li>Create Google maps with litgher data consumsion</li>
                                </ol>
                            </p>
                        </div>
                        <div>
                            <p><b>Payment</b><br />
                                <ol>
                                    <li>Auto update payment status</li>
                                    <li>Add payment methods</li>
                                </ol>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Body;