import React, { Component } from "react";
import {Container, Col, Row, Jumbotron, Image, Button} from "react-bootstrap";
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

        var png = `/resources/privacyRatingSmall/PNG/PrivacyRating${this.props.labelId}.png`;
        var svg = `/resources/privacyRatingSmall/SVG/PrivacyRating${this.props.labelId}.svg`;
    
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

                                <div className={styles.text}>Download the header label here:</div>

                                <div className={styles.headerLabelDescription}>
                                    !!!!!!!!!!!PLACE HOLDER TEXT!!!!!!!!!!!
                                    Besides the label that you can implement in to your website you can also download a
                                    .svg or .png to put into your header of your website.
                                    !!!!!!!!!!!PLACE HOLDER TEXT!!!!!!!!!!!
                                </div>

                                <Image className={styles.privacyRatingSmall} src={svg}/>

                                <div className={styles.downloadButton}>
                                    <Button variant="secondary" href={svg} download>Download SVG</Button>
                                </div>

                                <div className={styles.downloadButton}>
                                    <Button variant="secondary" href={png} download>Download PNG</Button>
                                </div>


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