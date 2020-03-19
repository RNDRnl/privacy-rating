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



            <div className={styles.backgroundAbout}>

                <Header/>

                <Image className={styles.image} src="/resources/logos/about-label.png" />

                <div className={styles.subtitleAbout}>About Privacy Rating</div>

                    <div className={styles.plainTextAbout}>
                        !!!!!!!!!!!!!!!!!!!!!!!! THIS A DUMMY TEXT !!!!!!!!!!!!!!!!!!!!!!!! Privacy Rating specializes in helping enterprises comply
                        with client-side privacy and data leakage
                        regulations by protecting the customers' private data.
                        The company's qprivacy is a solution that allows businesses
                        that operate within highly regulated environments, such as financial services institutions,
                        to scrutinize and enforce their own data privacy policy and prevent the flow
                        of unauthorized communication from customers' devices.
                        <br/>
                        <br/>
                        Privacy Rating specializes in helping enterprises comply
                        with client-side privacy and data leakage
                        regulations by protecting the customers' private data.
                        The company's qprivacy is a solution that allows businesses
                        that operate within highly regulated environments, such as financial services institutions,
                        to scrutinize and enforce their own data privacy policy and prevent the flow
                        of unauthorized communication from customers' devices. !!!!!!!!!!!!!!!!!!!!!!!! THIS A DUMMY TEXT !!!!!!!!!!!!!!!!!!!!!!!!
                    </div>

            </div>
            <div className={styles.backgroundCreate}>

                <Button className={styles.button} variant="success" href="form">Create a new label</Button>

                <div className={styles.subtitleCreate}>Create your own label</div>

                <div className={styles.plainTextCreate}>
                    creating a label your self all you have to do is take a questionnaire about your website and the
                    label will be generated for your website and made to implement easily in to your own website.
                    <br/>
                    <br/>
                    creating a label your self all you have to do is take a questionnaire about your website and the
                    label will be generated for your website and made to implement easily in to your own website.

                </div>

            </div>
            <div className={styles.backgroundUse}>

                <div className={styles.logosBox}>
                    <div className={styles.logosFrame}>
                        <Image className={styles.logos} src="/resources/logos/bol.jpg" />
                    </div>
                    <div className={styles.logosFrame}>
                        <Image className={styles.logos} src="/resources/logos/eu.jpg" />
                    </div>
                    <div className={styles.logosFrame}>
                        <Image className={styles.logos} src="/resources/logos/rijksoverheid.jpg"/>
                    </div>
                </div>

                <div className={styles.plainTextUse}>
                    Website who already use the label:
                </div>
                    <div className={styles.plainTextAbout}>
                    Privacy Rating specializes in helping enterprises comply
                    with client-side privacy and data leakage
                    regulations by protecting the customers' private data.
                    The company's qprivacy is a solution that allows businesses
                    that operate within highly regulated environments, such as financial services institutions,
                    to scrutinize and enforce their own data privacy policy and prevent the flow
                    of unauthorized communication from customers' devices. !!!!!!!!!!!!!!!!!!!!!!!! THIS A DUMMY TEXT !!!!!!!!!!!!!!!!!!!!!!!!

                </div>

                <Footer/>

            </div>
        </div>
    );
};

export default Home;