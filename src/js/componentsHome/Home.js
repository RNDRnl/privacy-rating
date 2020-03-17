import React, { Component } from "react";
import styles from './Home.scss';
import {Button, Container, Row, Jumbotron, Image, Col, Card, CardDeck} from "react-bootstrap";
import LabelBar from "../componentsLabel/LabelBar";


const initialFormState = {
}

const Home = () => {
    return (
        <div  className={styles.holder} >

            {/*<LabelBar/>*/}

            <div className={styles.privacyRatingBox}>

                <div className={styles.cirleA}/>
                <div className={styles.cirleB}/>
                <div className={styles.cirleA}/>
                <div className={styles.cirleA}/>
                <div className={styles.cirleA}/>
                <div className={styles.cirleA}/>
                <div className={styles.cirleA}/>
                <div className={styles.privacyRatingFont}>PRIVACY<br/>RATING</div>

            </div>


            <div className={styles.subTitleBox}>About</div>


            <div className={styles.plaintextBox}>
                !!!!!!!!!!!!!!!!!!!!!!!! THIS A DUMMY TEXT !!!!!!!!!!!!!!!!!!!!!!!! Privacy Rating specializes in helping enterprises comply
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
                of unauthorized communication from customers' devices. !!!!!!!!!!!!!!!!!!!!!!!! THIS A DUMMY TEXT !!!!!!!!!!!!!!!!!!!!!!!!
            </div>

            <div className={styles.subTitleBox}>Create your own label</div>

            <p>
                creating a label your self all you have to do is take a questionnaire about your website and the
                label will be generated for your website and made to implement easily in to your own website.
            </p>

            <p>
                <Button variant="success" href="form">Create a new label</Button>{' '}
            </p>

        </div>
    );
};

export default Home;