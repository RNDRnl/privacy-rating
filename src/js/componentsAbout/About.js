import React, { Component } from "react";
import styles from './About.scss';
import {Button, Container, Row, Jumbotron, Image, Col, Card, CardDeck} from "react-bootstrap";
import Header from "../Header";
import Footer from "../Footer";
import { Link } from "react-router-dom";
import * as Scroll from 'react-scroll';

const initialFormState = {
}

const About = () => {

    var scroll = Scroll.animateScroll;
    scroll.scrollTo(0, {duration:250});

    return (
        <div  className={styles.holder} >
            <Container>
                <Header/>
                <Row className={styles.backgroundSlider}>
                    <Row>
                    <div className={styles.text}>
                        <div>
                            <h4>What is the privacy rating?</h4>
                            <p>
                                The privacy rating is a simple way to assess the
                                privacy of an online service. It looks at how
                                the service collects and shares user data, as well
                                as on the amount of control users have over
                                their data and the level of security provided to
                                protect user’s data.
                            </p>
                            <p>
                                The Privacy Rating is based on extensive
                                research into privacy regulation, standards and
                                guidelines.
                            </p>
                        </div>
                        <div>
                            <h4>How do I use the privacy rating?</h4>
                            <p>
                                Our website walks you through an <a target="_blank" href="/form">interactive
                                questionnaire</a> about different aspects of data
                                handling. Based on your answers, it determines
                                a privacy rating.
                            </p>

                            <p>
                                We also produce a privacy label which
                                summarizes these answers. Owners of websites
                                and apps are encouraged to display the label on
                                their cookie notification, home-screen, or as
                                part of their privacy policy.
                            </p>
                        </div>

                    </div>
                    </Row>
                    
                    <Row>
                        <div className={styles.text}>
                                <div>
                                    <h4 className={styles.h4spaced}>Example of privacy rating label</h4>
                                </div>
                        </div>
                    </Row>
                        
                    <Row className={styles.labelFrame}>
                        <Col>
                        <div className={styles.label}>
                                        <iframe src={`${process.env.BASE_PATH}/#/PPPPPRPRRLRR`}
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

                        <Col className={styles.smallLabels}>
                        <Image className={styles.privacyRatingSmall} src={`${process.env.BASE_PATH}/resources/privacyRatingSmall/PNG/PrivacyRatingA.png`}/>
                        <Image className={styles.privacyRatingSmall} src={`${process.env.BASE_PATH}/resources/privacyRatingSmall/PNG/PrivacyRatingB.png`}/>
                        <Image className={styles.privacyRatingSmall} src={`${process.env.BASE_PATH}/resources/privacyRatingSmall/PNG/PrivacyRatingC.png`}/>
                        <Image className={styles.privacyRatingSmall} src={`${process.env.BASE_PATH}/resources/privacyRatingSmall/PNG/PrivacyRatingD.png`}/>
                        <Image className={styles.privacyRatingSmall} src={`${process.env.BASE_PATH}/resources/privacyRatingSmall/PNG/PrivacyRatingE.png`}/>
                        <Image className={styles.privacyRatingSmall} src={`${process.env.BASE_PATH}/resources/privacyRatingSmall/PNG/PrivacyRatingF.png`}/>
                        <Image className={styles.privacyRatingSmall} src={`${process.env.BASE_PATH}/resources/privacyRatingSmall/PNG/PrivacyRatingG.png`}/>
                        </Col>
                    </Row>

                    <hr className={styles.hr} />

                    <Row>
                        <div className={styles.text}>
                            <div>
                                <h4>How does it work?</h4>
                                <p>
                                The system rates 12 different aspects of data
                                handling from good to bad. These are grouped into
                                four main categories: <br/>
                                Together, the attributes determine the privacy class (A-to-G) of the online service.
                                </p>
                            </div>
                        </div>
                    </Row>

                    <div className={styles.categoriesContainer}>
                        <div className={styles.categories}>
                            <Image className={styles.icon} src={`${process.env.BASE_PATH}/resources/icons/collection.gif`}/>
                            <h5>COLLECTION</h5>
                            <div className={styles.colouredDots}/>
                            <p className={styles.description}>
                                What kind of user data is collected?
                            </p>
                            <div className={styles.colouredDots}/>
                            <p className={styles.description}>
                                For which purpose is user data collected?
                            </p>
                            <div className={styles.colouredDots}/>
                            <p className={styles.description}>
                                How long is user data stored?
                            </p>
                        </div>
                        <div className={styles.categories}>
                            <Image className={styles.icon} src={`${process.env.BASE_PATH}/resources/icons/sharing.gif`}/>
                            <h5>SHARING</h5>
                            <div className={styles.colouredDots}/>
                            <p className={styles.description}>
                                What kind of user data is shared?
                            </p>
                            <div className={styles.colouredDots}/>
                            <p className={styles.description}>
                                Is any user data sold?
                            </p>
                            <div className={styles.colouredDots}/>
                            <p className={styles.description}>
                                Is data disclosed to authorities?
                            </p>
                        </div>
                    </div>

                   <div className={styles.categoriesContainer}>
                    <div className={styles.categories}>
                            <Image className={styles.icon} src={`${process.env.BASE_PATH}/resources/icons/control.gif`}/>
                            <h5>CONTROL</h5>
                            <div className={styles.colouredDots}/>
                            <p className={styles.description}>
                                Can the user decide whether to share the data?
                            </p>
                            <div className={styles.colouredDots}/>
                            <p className={styles.description}>
                                Can the user request tthat their data is removed?
                            </p>
                            <div className={styles.colouredDots}/>
                            <p className={styles.description}>
                                Can the user amend his/her data?
                            </p>
                        </div>

                        <div className={styles.categories}>
                            <Image className={styles.icon} src={`${process.env.BASE_PATH}/resources/icons/security.gif`}/>
                            <h5>SECURITY</h5>
                            <div className={styles.colouredDots}/>
                            <p className={styles.description}>
                                How secure is the service?
                            </p>
                            <div className={styles.colouredDots}/>
                            <p className={styles.description}>
                                Does the service provider anonymize data?
                            </p>
                            <div className={styles.colouredDots}/>
                            <p className={styles.description}>
                                Is the service provider liable for breaches?
                            </p>
                        </div>
                    </div>
                   
                    {/* <hr className={styles.hr} /> */}
                    
                    <Row>
                    
                    <div className={styles.text}>
                    
                            <div>
                            <br/>
                    
                                <h4 className={styles}>Downloads</h4>
                            </div>
                    </div>
                    </Row>
                    <Row>
                        <Col>
                            <div className={styles.downloadHandle}>
                                <div>
                                    <div className={styles.pdfButton} variant="dark" href="form">ToU</div>
                                </div>
                                <div>
                                    <p><b>Terms of Use</b></p>
                                    <p>
                                        To read more about the this project click here for the Terms of Use.
                                    </p>
                                    <p><a href={`${process.env.BASE_PATH}/resources/pdf/Terms_Of_Use.pdf`}>Download ToU as a PDF</a></p>
                                </div>
                            </div>
                        </Col>
                        <Col>
                            <div className={styles.downloadHandle}>
                                <div>
                                    <div className={styles.pdfButton} variant="dark" href="form">Whitepaper</div>
                                </div>
                                <div>
                                    <p><b>Whitepaper</b></p>
                                    <p>
                                        To read more about the this project click here for Whitepaper.
                                    </p>
                                    <p><a href={`${process.env.BASE_PATH}/resources/pdf/Whitepaper.pdf`}>Download whitepaper as PDF</a></p>
                                </div>
                            </div>
                    </Col>
            
                </Row>
                <hr className={styles.hr} />
               
                    
                <Row className={styles.actionsRow}>
                    <div className={styles.actions}>
                        <Link className={styles.button} to="/form">
                            Generate your own label
                        </Link>
                    </div>
                </Row>
                </Row>

            <br />
            <Footer/>
            </Container>
            </div>
    );
    }

export default About;