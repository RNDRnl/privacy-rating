import React, { Component } from "react";
import {Button, Container, Jumbotron, Accordion, Col, Row, Card, Table, ListGroup, ProgressBar} from "react-bootstrap";
import { useAccordionToggle } from 'react-bootstrap/AccordionToggle';
import styles from './Form.scss';
import _ from 'underscore'
import FormConfig from "./FormConfig"
import FormContext from '../../state/FormContext'
import Header from "../Header";
import { Link } from "react-router-dom";
// import * as Scroll from 'react-scroll';
import Footer from "../Footer";

class FormView extends Component {
    static contextType = FormContext
    
    constructor() {
        super();

        this.state = {
            currentHandle: null,
            currentCategory: 0,
            currentStep: 0
        }
    }

    getForm(myForm) {
        var categories = [];
        myForm.categories.forEach(function (element, index){
            categories.push( element.getTag(index) );
        });
        return (
            <Accordion className={styles.accordionView} defaultActiveKey={"1"} >
                {categories}
            </Accordion>
        )
    }

    componentDidUpdate() {
        // var scroll = Scroll.animateScroll;
        // scroll.scrollToBottom({duration: 1500});
    }
    
    render() {

        const { Form } = this.context

        var domain = null;
        
        if( Form.generatedHash != null) { 
            domain = Form.domain.replace(".", "**");
        }

        return (
                <div>
                    <Header/>
                    <Container className={styles.formContainer}>
                        <Row >
                            { this.getForm(FormConfig) }
                        </Row>
                    </Container>

                    <div className={styles.formFooter}>
                        <Container>
                                { Form.generatedHash == null  &&
                                    <Row>
                                        <Col>
                                            <ProgressBar variant={Form.progress.variant} className={styles.ProgressBar} animated now={Form.progress.value} label={Form.progress.text} />
                                        </Col>
                                    </Row>
                                }
                                { Form.generatedHash != null &&
                                    <Row>
                                        <Col>
                                            <Link to={`/embed/${Form.generatedHash}/${domain}`}>
                                                <ProgressBar variant={"success"} className={styles.ProgressBar} animated now={100} label={"Label completed! Download here your embed code"}  >
                                                    </ProgressBar>
                                            </Link>
                                        </Col>
                                    </Row>
                                }

                                <br/>
                                <Row >
                                    <Col>
                                        <Footer/>
                                    </Col>
                                </Row>
                        </Container>
                    </div>
                </div>
        )
    }
};

export default FormView;