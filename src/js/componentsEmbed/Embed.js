import React, { Component } from "react";
import {Container, Col, Row, Jumbotron, Image, Button, Overlay, Popover} from "react-bootstrap";
import styles from './Embed.scss';
import _ from 'underscore'
import LabelContext from '../../state/LabelContext';
import Header from "../Header";
import Footer from "../Footer";

class Embed extends Component {
    static contextType = LabelContext;

    constructor() {
        super();

        this.state = {
            show: false
        }

        this.myRef = React.createRef();
        this.containerRef = React.createRef();

        this.handleSelect = this.handleSelect.bind(this);
    }

    componentDidMount() {
        const { pupulateLabel } = this.context;
        pupulateLabel({hash:this.props.labelId, domain:this.props.domain});
    }

    handleSelect() {
        console.log("handle select");
        console.log(this.myRef);
        this.myRef.current.select();
        document.execCommand("copy");
        this.setState({
            show: true
        });
    }

    render() {
        const { LabelObject } = this.context;

        var rank = null;

        if(LabelObject!=null) {
            rank = LabelObject.rank;
        }

        var png = `/resources/privacyRatingSmall/PNG/PrivacyRating${rank}.png`;
        var svg = `/resources/privacyRatingSmall/SVG/PrivacyRating${rank}.svg`;
    
        return (
            <div className={styles.holder} >
                   
                        <Container>
                        <Header/>
                        <br />
                        <Row>
                            <Col>
                                <div className={styles.text}>Here is your label</div>
                                <iframe className={styles.iframe} 
                                        src={`/${this.props.labelId}/${this.props.domain}`} 
                                        frameBorder="0"
                                        gesture="media" 
                                        allow="encrypted-media" 
                                        allowFullScreen
                                />
                            </Col>
                            <Col>

                                <div className={styles.text}>Use this embed code for your website</div>
                                <div ref={this.containerRef} className={styles.containerRef} >
                                    { this.state.show &&
                                        <div className={styles.overlayView}>
                                                <span>Embed code has been copied to clipboard</span>
                                        </div>
                                    }

                                     <textarea ref={this.myRef} onFocus={this.handleSelect} className={styles.iframeCodeBox} value={`<iframe src="https://privacy-label.com/${this.props.labelId}}/${this.props.domain}" style="top: 0; left: 0; width: 320pt; height: 320pt; border: 0; overflow: hidden; margin: 0; padding: 0; border-radius: 8pt;" frameBorder="0" gesture="media" allow="encrypted-media" allowFullScreen />`} /> 
                                </div>

                                <div className={styles.text}>Download the header label here</div>
                                <div className={styles.headerLabelDescription}>
                                    !!!!!!!!!!!PLACE HOLDER TEXT!!!!!!!!!!!
                                    Besides the label that you can implement in to your website you can also download a
                                    .svg or .png to put into your header of your website.
                                    !!!!!!!!!!!PLACE HOLDER TEXT!!!!!!!!!!!
                                </div>

                               

                                <Row>
                                    <div className={styles.downloadButton}>
                                        <Image className={styles.privacyRatingSmall} src={png}/>
                                        <Button variant="secondary" href={png} download>Download PNG</Button>
                                    </div>
                                </Row>

                                <Row>
                                    <div className={styles.downloadButton}>
                                        <Image className={styles.privacyRatingSmall} src={svg}/>
                                        <Button variant="secondary" href={svg} download>Download SVG</Button>
                                    </div>
                                </Row>


                            </Col>
                        </Row>
                        <Footer/>
                        </Container>
                </div>
        )
    }
};

export default Embed;