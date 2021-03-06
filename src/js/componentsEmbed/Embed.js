import React, { Component } from "react";
import {Container, Col, Row, Image, Button} from "react-bootstrap";
import styles from './Embed.scss';
import LabelContext from '../../state/LabelContext';
import Header from "../Header";
import Footer from "../Footer";
import * as Scroll from 'react-scroll';

class Embed extends  Component {
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
        
        var scroll = Scroll.animateScroll;
        scroll.scrollTo(0, {duration:250});
    }

    handleSelect() {
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

        var png = `${process.env.BASE_PATH}/resources/privacyRatingSmall/PNG/PrivacyRating${rank}.png`;
        var svg = `${process.env.BASE_PATH}/resources/privacyRatingSmall/SVG/PrivacyRating${rank}.svg`;

        var iframeSrc = `${process.env.DOMAIN_PATH}${process.env.BASE_PATH}/#/${this.props.labelId}`;
        if(typeof this.props.domain !== 'undefined') {
            iframeSrc = `${process.env.DOMAIN_PATH}${process.env.BASE_PATH}/#/${this.props.labelId}/${this.props.domain}`
        }

        return (
            <div className={styles.holder} >
                        <Container>
                        <Header/>
                            <div className={styles.background}>
                                <Row>
                                    <Col>
                                        <div>
                                            <iframe src={iframeSrc}
                                                    top="0"
                                                    left="0"
                                                    width="430pt"
                                                    height="430pt"
                                                    border="0"
                                                    overflow="hidden"
                                                    margin="0"
                                                    padding="0"
                                                    border-radius="8pt"
                                                    frameBorder="0"
                                                    gesture="media"
                                                    allow="encrypted-media"
                                                    allowFullScreen/>
                                        </div>
                                    </Col>

                                    <Col>
                                        <div>
                                            <h3>Generated label for your website</h3>
                                            <div>Use this embed code to implement the label into your website.</div>
                                            <div ref={this.containerRef} className={styles.containerRef} >
                                                <textarea ref={this.myRef} onFocus={this.handleSelect} onChange={this.handleSelect} className={styles.iframeCodeBox} value={`<iframe src="${iframeSrc}" style="top: 0; left: 0; width: 430pt; height: 430pt; border: 0; overflow: hidden; margin: 0; padding: 0; border-radius: 8pt;" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen ></iframe>`} />
                                                { this.state.show &&
                                                <div className={styles.overlayView}>
                                                    <span>Embed code has been copied</span>
                                                </div>
                                                }
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                                
                                <hr className={styles.hr} />

                                <Row>

                                    { rank != null &&
                                        <Col className={styles.leftCol}>
                                            <Image className={styles.privacyRatingSmall} src={svg}/>
                                        </Col>
                                    }

                                    <Col>
                                        <div>
                                            <h3>Download the small label here</h3>
                                            <p>
                                                Besides the label that you can implement in to your website you can also download a
                                                .svg or .png to put into your header of your website.
                                            </p>
                                        </div>

                                        { rank != null &&
                                            <div>
                                                <Button className={styles.privacyRatingSmallButton} variant="secondary" href={png} download>Download PNG</Button>
                                                <Button className={styles.privacyRatingSmallButton} variant="secondary" href={svg} download>Download SVG</Button>
                                            </div>
                                        }
                                    </Col>
                                </Row>
                            </div>
                            <br/>
                            <Footer/>
                        </Container>
            </div>
        )
    }
};

export default Embed;