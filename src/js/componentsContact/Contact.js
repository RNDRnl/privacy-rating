import React, { Component } from "react";
import {Button, Container, Col, Row, Form} from "react-bootstrap";
import styles from './Contact.scss';
import Header from "../Header";
import Footer from "../Footer";
import * as Scroll from 'react-scroll';

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

    componentDidMount() {
        var scroll = Scroll.animateScroll;
        scroll.scrollTo(0, {duration:250});
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
                       
                        <Col className={styles.contactField}>
                            <h1>Contact</h1>

                            <div className={styles.text}>
                                <p>If you have any questions or want to conctact us please send us an e-mail and we will resopond to you.</p>
                            </div>
                            <br/><br/>
                            <Form>
                                <Form.Row>
                                    <Form.Group as={Col}  controlId="subject">
                                        <Form.Label>Subject</Form.Label>
                                        <Form.Control value={this.state.subject} onChange={this.setSubject} placeholder="Subject" />
                                    </Form.Group>
                                </Form.Row>

                                <Form.Row>
                                    <Form.Group as={Col} controlId="body">
                                        <Form.Label>Message</Form.Label>
                                        <Form.Control value={this.state.body} onChange={this.setBody} rows={10} as="textarea" placeholder="Your message" />
                                    </Form.Group>
                                </Form.Row>

                                <Button variant="dark" type="submit" onClick={this.sendToMailClient}>
                                    Open mail client
                                </Button>
                            </Form>

                        </Col>
                    </Row>
                            
                <Footer/>
            </Container>
        )
    }
};

export default ContactView;