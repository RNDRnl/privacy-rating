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
                
                <Row className={styles.backgroundGray}>
                    <div className={styles.text}>
                        <p>The Web 2.0 provides many possibilities such as almost unlimited access
                        to information and "round-the-clock" connectivity.</p>
                        <p>Online services range from social media (e.g. Facebook or lnstagram) and entertainment
                        (e.g. Netflix or Spotify) to shopping (e.g. Amazon or eBay) and banking (e.g. PayPal and e-banking).
                        </p>
                    </div>
                    <div className={styles.text}>
                        <p>All of these services handle personal data.</p>
                        <p>Privacy policies describe how services handle user data but most users never
                        read them. Users often call for support in managing their online security and privacy.
                        </p>
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
                        <p>Privacy Rating specializes in helping enterprises comply
                        with client-side privacy and data leakage
                        regulations by protecting the customers' private data.
                        The company's qprivacy is a solution that allows businesses
                        that operate within highly regulated environments, such as financial services institutions,
                        to scrutinize and enforce their own data privacy policy and prevent the flow
                        of unauthorized communication from customers' devices.
                        Privacy Rating specializes in helping enterprises comply
                        with client-side privacy and data leakage
                        </p>
                        <p>
                        regulations by protecting the customers' private data.
                        The company's qprivacy is a solution that allows businesses
                        that operate within highly regulated environments, such as financial services institutions,
                        to scrutinize and enforce their own data privacy policy and prevent the flow
                        of unauthorized communication from customers' devices. 
                        </p>
                    </div>
                    <div className={styles.text}>
                        <p>Privacy Rating specializes in helping enterprises comply
                        with client-side privacy and data leakage
                        regulations by protecting the customers' private data.
                        The company's qprivacy is a solution that allows businesses
                        that operate within highly regulated environments, such as financial services institutions,
                        to scrutinize and enforce their own data privacy policy and prevent the flow
                        of unauthorized communication from customers' devices.
                        Privacy Rating specializes in helping enterprises comply
                        with client-side privacy and data leakage
                        regulations by protecting the customers' private data.
                        </p>
                        <p>
                        The company's qprivacy is a solution that allows businesses
                        that operate within highly regulated environments, such as financial services institutions,
                        to scrutinize and enforce their own data privacy policy and prevent the flow
                        of unauthorized communication from customers' devices. 
                        </p>
                    </div>
                </Row>
                
                <Row  className={styles.backgroundWhite}>
                    <div className={styles.downloadHandle}>
                        <div>
                            <div className={styles.pdfButton} variant="dark" href="form">ToS</div>
                        </div>
                        <div>
                            <p><b>ToS</b></p>
                            <p>
                            To read more about the this project click here for the ToS and a Whitepaper.
                            </p>
                            <p><a href="#">Download PDF</a></p>
                        </div>
                    </div>
                    <div className={styles.downloadHandle}>
                        <div>
                            <div className={styles.pdfButton} variant="dark" href="form">Whitepaper</div>
                        </div>
                        <div>
                            <p><b>Whitepaper</b></p>
                            <p>
                            To read more about the this project click here for the ToS and a Whitepaper.
                            </p>
                            <p><a href="#">Download PDF</a></p>
                        </div>
                    </div>
                </Row>
                
            <Footer/>
            </Container>
            </div>
    );
    }

export default Home;