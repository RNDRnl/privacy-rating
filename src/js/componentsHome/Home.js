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

                <Row>
                    <Link className={styles.button} to="/form">
                        Generate your own label
                    </Link>
                </Row>
                
                <Row className={styles.backgroundGray}>
                    <div className={styles.text}>
                        <p>As online services handle increasing amounts of data, it becomes difficult to inform users about how their information is handled. </p>
                        <p>Nevertheless, more and more regulations and standards require transparency when handling personal data.
                        </p>
                    </div>
                    <div className={styles.text}>
                        <p>All of these services handle personal data.</p>
                        <p>Privacy policies describe how services handle user data but most users never
                        read them. Users often call for support in managing their online security and privacy.
                        </p>
                        <p>Privacy policies describe how services handle user data, but most users never read them. </p>
                        <p>PrivacyRating.info creates an intuitive visualization of your privacy policy that users will actually look at.
                            It shows the most relevant privacy attributes to help obtain truly informed consent.</p>
                    </div>
                </Row>
                
                <Row className={styles.backgroundButton}>
                    <div className={styles.label}>
                        <iframe src="/AAAAAAAAAAAA/google**com" top="0" left="0" width="430pt" height="430pt" border="0" overflow="hidden" margin="0" padding="0" border-radius="8pt" frameBorder="0" gesture="media" allow="encrypted-media" allowFullScreen/>
                    </div>
                </Row>
                <Row >
                    <Link className={styles.button} to="/form">
                            Create a privacy label for your website
                    </Link>
                </Row>

                <Row className={styles.backgroundGray}>
                    <div className={styles.text}>
                        <h4>What is The Privacy Rating?</h4>
                        <p>The privacy rating is a simple way to assess the
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
                        <Button  variant="dark">Read our Whitepaper</Button>
                    </div>
                    <div className={styles.text}>
                        <h4>How do I use The Privacy Rating?</h4>
                        <p>Our website walks you through an interactive
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
                        <Button href="/form" variant="dark">Generate your own label</Button>
                    </div>
                </Row>

                <Row className={styles.backgroundWhite}>

                        <div className={styles.text}>
                            <h4>How do I use The Privacy Rating?</h4>
                            <p>
                                The system rates 12 different aspects of data
                                handling from good to bad. These are grouped into
                                four main categories:
                            </p>

                            <Row className={styles.categoryBoxes}>
                                <div className={styles.categories}>
                                    <h4>Collection:</h4>
                                    <p>
                                        • What kind of user data is collected?
                                        <br/>
                                        • For which purpose is user data collected?
                                        <br/>
                                        • How long is user data stored?
                                    </p>
                                </div>
                                <div className={styles.categories}>
                                    <h4>Sharing:</h4>
                                    <p>
                                        • What kind of user data is shared?
                                        <br/>
                                        • Is any user data sold?
                                        <br/>
                                        • Is data disclosed to authorities?
                                    </p>
                                </div>
                            </Row>
                            <Row className={styles.categoryBoxes}>
                                <div className={styles.categories}>
                                    <h4>Control:</h4>
                                    <p>
                                        • Can the user decide whether to share the data?
                                        <br/>
                                        • Can the user request tthat their data is removed?
                                        <br/>
                                        • Can the user amend his/her data?
                                    </p>
                                </div>
                                <div className={styles.categories}>
                                    <h4>Security:</h4>
                                    <p>
                                        • How secure is the service?
                                        <br/>
                                        • Does the service provider anonymize data?
                                        <br/>
                                        • Is the service provider liable for breaches?
                                    </p>
                                </div>
                            </Row>
                            <p>
                                Together, the 12 attributes determine the privacy
                                class (A-to-G) of the online service.
                            </p>
                        </div>


                    <div className={styles.text}>
                        <h4>Example labels</h4>

                        <div className={styles.backgroundLabel}>
                            <div className={styles.label}>
                                <iframe src="/AAAAAAAAAAAA/google**com" top="0" left="0" width="430pt" height="430pt" border="0" overflow="hidden" margin="0" padding="0" border-radius="8pt" frameBorder="0" gesture="media" allow="encrypted-media" allowFullScreen/>
                            </div>
                            <Image className={styles.labelSmall} src="/resources/privacyRatingSmall/PNG/PrivacyRatingA.png"/>
                        </div>
                    </div>
                </Row>

                <Row>
                    <Link className={styles.button} to="/form">
                        Generate your own label
                    </Link>
                </Row>
            <Footer/>
            </Container>
            </div>
    );
    }

export default Home;