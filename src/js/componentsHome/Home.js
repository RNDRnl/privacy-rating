import React, { Component } from "react";
import styles from './Home.scss';
import {Button, Container, Row, Jumbotron, Image, Col, Card, CardDeck} from "react-bootstrap";
import Header from "../Header";
import Footer from "../Footer";


const initialFormState = {
}

const Home = () => {
    return (
        <div  className={styles.holder} >

            <Header/>

            <div className={styles.backgroundWhite}>

                <div className={styles.text}>
                    The Web 2.0 provides many possibilities such as almost unlimited access
                    to information and "round-the-clock" connectivity.
                    Online services range from social media (e.g. Facebook or lnstagram) and entertainment
                    (e.g. Netflix or Spotify) to shopping (e.g. Amazon or eBay) and banking (e.g. PayPal and e-banking).
                </div>

                <div className={styles.text}>
                    All of these services handle personal data.
                    Privacy policies describe how services handle user data but most users never
                    read them. Users often call for support in managing their online security and privacy.
                    To empower end- users in making informed decisions about which service to use and what data to share,
                    we developed a privacy rating, similar to the EU energy label.
                </div>

            </div>

            <div className={styles.backgroundWhite}>

                <Button className={styles.button} variant="dark" href="form">Create a new label</Button>

            </div>

            <div className={styles.backgroundGray}>

                <div className={styles.text}>
                    !!!!!!!!!!!!!!!!!!!!!!! THIS A DUMMY TEXT !!!!!!!!!!!!!!!!!!!!!!!! Privacy Rating specializes in helping enterprises comply
                    with client-side privacy and data leakage
                    regulations by protecting the customers' private data.
                    The company's qprivacy is a solution that allows businesses
                    that operate within highly regulated environments, such as financial services institutions,
                    to scrutinize and enforce their own data privacy policy and prevent the flow
                    of unauthorized communication from customers' devices.
                    Privacy Rating specializes in helping enterprises comply
                    with client-side privacy and data leakage
                    regulations by protecting the customers' private data.
                    The company's qprivacy is a solution that allows businesses
                    that operate within highly regulated environments, such as financial services institutions,
                    to scrutinize and enforce their own data privacy policy and prevent the flow
                    of unauthorized communication from customers' devices. !!!!!!!!!!!!!!!!!!!!!!!! THIS A DUMMY
                </div>

                <div className={styles.text}>
                    !!!!!!!!!!!!!!!!!!!!!!! THIS A DUMMY TEXT !!!!!!!!!!!!!!!!!!!!!!!! Privacy Rating specializes in helping enterprises comply
                    with client-side privacy and data leakage
                    regulations by protecting the customers' private data.
                    The company's qprivacy is a solution that allows businesses
                    that operate within highly regulated environments, such as financial services institutions,
                    to scrutinize and enforce their own data privacy policy and prevent the flow
                    of unauthorized communication from customers' devices.
                    Privacy Rating specializes in helping enterprises comply
                    with client-side privacy and data leakage
                    regulations by protecting the customers' private data.
                    The company's qprivacy is a solution that allows businesses
                    that operate within highly regulated environments, such as financial services institutions,
                    to scrutinize and enforce their own data privacy policy and prevent the flow
                    of unauthorized communication from customers' devices. !!!!!!!!!!!!!!!!!!!!!!!! THIS A DUMMY
                </div>

            </div>

            <div className={styles.backgroundWhite}>

                <div className={styles.text}>
                    Together, the 12 attributes determine the privacy class (A-to-G) of the online service.
                </div>

                <div className={styles.circleBox}>
                    <div className={styles.circleA}>A</div>
                    <div className={styles.circleB}>B</div>
                    <div className={styles.circleC}>C</div>
                    <div className={styles.circleD}>D</div>
                    <div className={styles.circleE}>E</div>
                    <div className={styles.circleF}>F</div>
                    <div className={styles.circleG}>G</div>
                </div>

            </div>

            <Footer/>

        </div>
    );
};

export default Home;