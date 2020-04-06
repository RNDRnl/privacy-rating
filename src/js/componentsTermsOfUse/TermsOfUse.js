import React, { Component } from "react";
import {Button, Container, Jumbotron, Accordion, Col, Row, Form, Card, Table, ListGroup, ProgressBar} from "react-bootstrap";
import styles from './TermsOfUse.scss';
import Header from "../Header";
import Footer from "../Footer";

class ContactView extends Component {
    
    constructor() {
        super();

        this.state = {
            subject: "",
            body: "",
            send: false
        };

        this.setSubject = this.setSubject.bind(this);
        this.setBody = this.setBody.bind(this);
        this.sendToMailClient = this.sendToMailClient.bind(this);
    }

    setSubject(e) {
        this.setState({
            subject: e.target.value
        })
    }

    setBody(e) {
        this.setState({
            body: e.target.value
        })
    }

    sendToMailClient(e) {
        e.preventDefault();

        var email = "privacyrating@somemail.com";
        var subject = this.state.subject.replace(" ", "%20");
        var body = this.state.body.replace(" ", "%20");

        window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
    }
    
    render() {

        return (
            <Container className={styles.formContainer}>
                <Header/>

                    <Row className={styles.row}>
                        Terms of Use
                    </Row>
                            
                <Footer/>
            </Container>
        )
    }
};

export default ContactView;