import React, { Component } from "react";
import {Button, Container, Jumbotron, Accordion, Col, Row, Card, Table, ListGroup, ProgressBar} from "react-bootstrap";
import styles from './Contact.scss';
import Header from "../Header";
import Footer from "../Footer";

class ContactView extends Component {
    
    constructor() {
        super();

        this.state = {
        }
    }
    
    render() {

        return (
            <Container className={styles.formContainer}>
                <Header/>

                <div className={styles.backgroundWhite}>

                    <div className={styles.text}>
                        !!!!!!!!!!!!!!!!!!!!!!! THIS A DUMMY TEXT !!!!!!!!!!!!!!!!!!!!!!!! If you have any questions or want to conctact us please send us an e-mail and we will resopond to you.
                    </div>

                    <form className={styles.form} action="mailto:privacyrating@email.here" method="get"  enctype="text/plain">
                        <div>Subject</div>
                        <input className={styles.subject} name="subject" type="text"  /><br/>
                        <div>Text</div>
                        <textarea className={styles.text} name="body"></textarea><br/>
                        <input className={styles.send} type="submit" value="Send" /><br/>
                    </form>

                </div>
                            
                <Footer/>
            </Container>
        )
    }
};

export default ContactView;