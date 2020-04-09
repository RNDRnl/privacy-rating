import React, { Component } from "react";
import styles from './Home.scss';
import {Button, Container, Row, Jumbotron, Image, Col, Card, CardDeck} from "react-bootstrap";
import Header from "../Header";
import Footer from "../Footer";
import { Link } from "react-router-dom";


const initialFormState = {
}

const Home= () => {
    return (
        <div  className={styles.holder} >
            <Container>
                <Header/>

                <Row className={styles.backgroundSlider}>
                    <div className={styles.label}>
                        <Image className={styles.video} src="/resources/home/exampleLabel.png" ></Image>
                        </div>

                    <div className={styles.text}>
                        <p>
                            As online services handle increasing amounts of
                            data, it becomes difficult to inform users about
                            how their information is handled.</p>
                        <p>
                            Nevertheless, more and more regulations and
                            standards require transparency when handling
                            personal data.
                        </p>
                    </div>
                    <div className={styles.text}>
                        <p>
                            Privacy policies describe how services handle
                            user data, but most users never read them.</p>
                        <p>
                            PrivacyRating.info creates an intuitive
                            visualization of your privacy policy that users
                            will actually look at. It shows the most relevant
                            privacy attributes to help obtain truly informed
                            consent.
                        </p>
                    </div>

                    <Link className={styles.button} to="/form">
                        Generate your own label
                    </Link>
                </Row>

                <Row className={styles.backgroundGray}>
                        <div className={styles.text}>
                            <h4>WHAT IS THE PRIVACY RATING?</h4>
                            <p>
                                The privacy rating is a simple way to assess the
                                privacy of on an online service. It looks at how
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
                            <div className={styles.spacer}/>

                            <div className={styles.text}>
                                <h4>HOW DOES IT WORK?</h4>
                                <p>
                                    The system rates 12 different aspects of data
                                    handling from good to bad. These are grouped into
                                    four main categories:
                                    Together, the 12 attributes determine the privacy class (A-to-G) of the online service.
                                </p>
                            </div>

                        </div>
                        <div className={styles.text}>
                            <h4>HOW DO I USE THE PRIVACY RATING?</h4>
                            <p>
                                Our website walks you through an interactive
                                questionnaire about different aspects of data
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
                </Row>

                <Row className={styles.backgroundCategories1}>
                    <div className={styles.categories}>
                        <Image className={styles.icon} src="/resources/icons/collection-V3.gif"/>
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
                        <Image className={styles.icon} src="/resources/icons/sharing-V3.gif"/>
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
                </Row>
                <Row className={styles.backgroundCategories}>

                    <div className={styles.categories}>
                        <Image className={styles.icon} src="/resources/icons/control-V3.gif"/>
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
                        <Image className={styles.icon} src="/resources/icons/security-V3.gif"/>
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
                </Row>

                <Row>
                    <div className={styles.downloadHandle}>
                        <div>
                            <div className={styles.pdfButton} variant="dark" href="form">ToS</div>
                        </div>
                        <div>
                            <p><b>Terms of Service</b></p>
                            <p>
                                To read more about the this project click here for the Terms of Service.
                            </p>
                            <p><a href="#">Download ToS as a PDF</a></p>
                        </div>
                    </div>
                    <div className={styles.downloadHandle}>
                        <div>
                            <div className={styles.pdfButton} variant="dark" href="form">Whitepaper</div>
                        </div>
                        <div>
                            <p><b>Whitepaper</b></p>
                            <p>
                                To read more about the this project click here for Whitepaper.
                            </p>
                            <p><a href="#">Download whitepaper as PDF</a></p>
                        </div>
                    </div>
                </Row>

            <Footer/>
            </Container>
            </div>
    );
    }

export default Home;