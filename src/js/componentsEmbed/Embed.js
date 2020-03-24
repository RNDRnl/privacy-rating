import React, { Component } from "react";
import {Container, Col, Row, Jumbotron} from "react-bootstrap";
import styles from './Embed.scss';
import _ from 'underscore'
import FormContext from '../../state/FormContext'
import Header from "../Header";
import Footer from "../Footer";

class Embed extends Component {
    static contextType = FormContext
    
    constructor() {
        super();
    }

    render() {
    
        return (
                <div>
                    <Header/>
                    <Container>
                        <Row>
                            <Col>
                                <div>Here is your label: {this.props.labelId}</div>
                                <div>Use this embed code</div>

                                <div>
                                    &lt;iframe
                                    style="top: 0; left: 0;
                                    width: 320pt; height: 320pt;
                                    border: 0; overflow: hidden;
                                    margin: 0; padding: 0; border-radius: 8pt;"
                                    frameBorder="0" gesture="media"
                                    allow="encrypted-media" allowFullScreen/&gt;
                                </div>
                                <Col>
                                    <iframe className={styles.iframe}
                                            src={`/${this.props.labelId}/${this.props.domain}`} frameBorder="0"
                                            gesture="media" allow="encrypted-media" allowFullScreen/>

                                </Col>

                            </Col>
                            <Col>
                                <div>Download the label from here</div>
                                <div>as svg</div>
                                <div>as png</div>
                            </Col>
                        </Row>
                        <Row >
                            <Col>
                            </Col>
                        </Row>
                    </Container>
                    <Footer/>
                </div>
        )
    }
};

export default Embed;