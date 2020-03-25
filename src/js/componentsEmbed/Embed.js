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
            <div  className={styles.holder} >
                    <Header/>
                        <Row>
                            <Col>
                                {/*<div>Here is your label: {this.props.labelId}</div>*/}
                                <div className={styles.text}>Here is your label: </div>
                                <iframe className={styles.iframe}
                                        src={`/${this.props.labelId}/${this.props.domain}`} frameBorder="0"
                                        gesture="media" allow="encrypted-media" allowFullScreen/>
                            </Col>
                            <Col>
                                <div className={styles.text}>Use this embed code for your website:</div>
                                <div className={styles.iframeCodeBox}>
                                    &lt;iframe
                                    style="top: 0; left: 0;
                                    width: 320pt; height: 320pt;
                                    border: 0; overflow: hidden;
                                    margin: 0; padding: 0; border-radius: 8pt;"
                                    frameBorder="0" gesture="media"
                                    allow="encrypted-media" allowFullScreen/&gt;
                                </div>
                                <br/>
                                <div>Download the label from here:</div>
                                <div>as svg</div>
                                <div>as png</div>

                            </Col>
                        </Row>
                        <Row >
                            <Col>
                            </Col>
                        </Row>
                    <Footer/>
                </div>
        )
    }
};

export default Embed;