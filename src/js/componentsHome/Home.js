import React, { Component } from "react";
import styles from './Home.scss';
import {Button, Container, Row, Modal, Jumbotron, Image, Col, Card, CardDeck} from "react-bootstrap";
import Header from "../Header";
import Footer from "../Footer";
import { Link } from "react-router-dom";
import ImageGalleryView from "./ImageGalleryView";




class Home extends Component {

    constructor() {
        super();
    }

    render() {
    return (
        <div  className={styles.holder} >
           
            <Container>
                <Header/>
                <Row className={styles.backgroundSlider}>
                    <div className={styles.label}>
                        <ImageGalleryView />
                        <br />    
                    </div>
                    <div className={styles.text}>
                        <div>
                            <p>
                                As online services handle increasing amounts of
                                data, it becomes difficult to inform users about
                                how their information is handled.
                            </p>
                            <p>
                                Nevertheless, more and more regulations and
                                standards require transparency when handling
                                personal data.
                            </p>
                        </div>
                        <div >
                            <p>
                                Privacy policies describe how services handle
                                user data, but most users never read them.
                            </p>
                            <p>
                                PrivacyRating.info creates an intuitive
                                visualization of your privacy policy that users
                                will actually look at. It shows the most relevant
                                privacy attributes to help obtain truly informed
                                consent.
                            </p>
                        </div>
                    </div>
                    <div className={styles.actions}>
                        <div>
                            <Link className={styles.button} to="/about">
                                Learn more
                            </Link>
                        </div>
                        <div>
                            <Link className={styles.button} to="/form">
                                Generate your own label
                            </Link>
                        </div>
                    </div>
                </Row>
            <br />
            <Footer/>
            </Container>
            {/* <link href="resources/css/bootstrap.min.css" rel="stylesheet"></link>
            <link href="resources/css/imagegellery.css" rel="stylesheet"></link> */}
            </div>
    );
    }
}

export default Home;