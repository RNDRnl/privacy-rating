import React, { Component } from "react";
import {Container, Col, Row, Image, Button} from "react-bootstrap";
import styles from './Embed.scss';
import LabelContext from '../../state/LabelContext';
import Header from "../Header";
import Footer from "../Footer";
import * as Scroll from 'react-scroll';
import Recommendations from "./Recommendations";
import { PDFDownloadLink, Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
import classNames from "classnames";

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

        const stylesPDF = StyleSheet.create({
            page: {
              flexDirection: 'row',
              backgroundColor: '#E4E4E4'
            },
            section: {
              margin: 10,
              padding: 10,
              flexGrow: 1,
              backgroundColor: '#B0B0B0'
            },
            smallType: {
                fontSize: 20
            }
          });

        const MyDoc = () => (
            <Document>
                <Page size="A4" style={stylesPDF.page}>
                    <View style={stylesPDF.section}>
                        <Text>Privacy Rating Report</Text>
                    </View>
                    <View style={stylesPDF.section}>
                        <Text style={stylesPDF.smallType}>Generated at https://www.privacyrating.info/</Text>
                    </View>
                </Page>
                <Page size="A4" style={stylesPDF.page}>
                </Page>
            </Document>
        )

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
                                            <h3>Embed the label</h3>
                                            <div>Use this embed code to implement the label into your website.</div>
                                            <div ref={this.containerRef} className={styles.containerRef} >
                                                {/* <textarea ref={this.myRef} onFocus={this.handleSelect} onChange={this.handleSelect} className={styles.iframeCodeBox} value={`<iframe src="${iframeSrc}
                                                " style="top: 0; left: 0; width: 430pt; height: 430pt; border: 0; overflow: hidden; margin: 0; padding: 0; border-radius: 8pt;" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen ></iframe>`} /> */}
                                                <textarea ref={this.myRef} onFocus={this.handleSelect} onChange={this.handleSelect} className={styles.iframeCodeBox} value={`<div class="privacy-rating" data-id="${this.props.labelId}" data-domain="${this.props.domain}"></div>\n<script src="${process.env.DOMAIN_PATH}/privacy.rating.js"></script>`} />
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
                                    <Col>
                                            <div className={styles.colHeader}>
                                                <div>
                                                    <h3>How to improve your score</h3>
                                                    <div>Below we will point out some recommendations for you.</div>
                                                </div>
                                                <div>
                                                    <div className={styles.buttonBox}>
                                                        <PDFDownloadLink className={classNames(styles.button, styles.privacyRatingSmallButton)} document={<MyDoc />} fileName="PrivacyRatingReport.pdf">
                                                            {({ blob, url, loading, error }) =>
                                                                loading ? 'Loading document...' : 'Download Report PDF'
                                                            }
                                                        </PDFDownloadLink>

                                                    </div>
                                                </div>
                                            </div>
                                            
                                            <Recommendations />
                                    </Col>
                                </Row>
                                
                                {/* <hr className={styles.hr} />

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
                                </Row> */}


                                
                            </div>
                            <br/>
                            <Footer/>
                        </Container>
            </div>
        )
    }
};

export default Embed;