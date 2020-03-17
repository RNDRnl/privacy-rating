import React, { Component } from "react";
import styles from './Home.scss';
import {Button, Container, Row, Jumbotron, Image, Col, Card, CardDeck} from "react-bootstrap";
import Header from "../Header";

const initialFormState = {
}

const Home = () => {
    return (
        <div  className={styles.holder} >

            <Header/>

            <div className={styles.Box}>

                <div className={styles.subTitleBox}>About</div>

                <Image className={styles.image} src="resources/logos/label.png"/>

                <div className={styles.plainText}>
                    !!!!!!!!!!!!!!!!!!!!!!!! THIS A DUMMY TEXT !!!!!!!!!!!!!!!!!!!!!!!! Privacy Rating specializes in helping enterprises comply
                    with client-side privacy and data leakage
                    regulations by protecting the customers' private data.
                    The company's qprivacy is a solution that allows businesses
                    that operate within highly regulated environments, such as financial services institutions,
                    to scrutinize and enforce their own data privacy policy and prevent the flow
                    of unauthorized communication from customers' devices.
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

            <div className={styles.Box}>

                <div className={styles.subTitleBox}>Create your own label</div>

                <Button className={styles.image} variant="success" href="form">Create a new label</Button>

                <div className={styles.plainText}>
                    creating a label your self all you have to do is take a questionnaire about your website and the
                    label will be generated for your website and made to implement easily in to your own website.
                </div>

            </div>

        </div>
    );
};

export default Home;