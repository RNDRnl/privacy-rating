import React, { Component } from "react";
import {Button, Container, Jumbotron, Accordion, Col, Row, Form, Card, Table, ListGroup, ProgressBar} from "react-bootstrap";
import styles from './TermsOfUse.scss';
import Header from "../Header";
import Footer from "../Footer";
import * as Scroll from 'react-scroll';

class PageView extends Component {
    
    constructor() {
        super();

    }

    componentDidMount() {
        var scroll = Scroll.animateScroll;
        scroll.scrollTo(0, {duration:250});
    }

    render() {

        return (
            <Container className={styles.formContainer}>
                <Header/>

                    <Row className={styles.row}>
                        Terms of Use

                        <br />
                        <br />
                        Content will follow soon
                    </Row>
                            
                <Footer/>
            </Container>
        )
    }
};

export default PageView;