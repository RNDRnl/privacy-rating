import React, { Component } from "react";
import {Button, Container, Jumbotron, Accordion, Col, Row, Card, Table, ListGroup, ProgressBar} from "react-bootstrap";
import { useAccordionToggle } from 'react-bootstrap/AccordionToggle';
import styles from './Form.scss';
import _ from 'underscore'
import FormConfig from "./FormConfig"
import FormContext from '../../state/FormContext'
import Header from "../Header";
import { Link } from "react-router-dom";

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
    
    render() {

        const { Form } = this.context

        const now = 20;
        console.log("what i got", Form.generatedHash)
        return (

                <Container>
                    {/* {JSON.stringify(Form)} */}
                    <Row >
                        <Col>
                            <br />
                            <Header/>
                            {/* <br />
                            <div>current handle:{this.state.currentHandle}</div>
                            <div>current category: {this.state.currentCategory}</div>
                            <div>current step:{this.state.currentStep}</div> */}
                        </Col>
                    </Row>
                    <Row >
                        { this.getForm(FormConfig) }
                    </Row>
                    <Row>
                        <Col>
                            <ProgressBar variant="primary" className={styles.ProgressBar} animated now={now} label={`domain`} />
                        </Col>
                    </Row>
                    { Form.generatedHash != null && 
                        <Row>
                            <Col>
                                <div>We have a valid label for you!</div>
                                <Link to={`/embed/${Form.generatedHash}`}>
                                    {Form.generatedHash}
                                </Link>
                            </Col>
                        </Row>
                    }
                </Container>
        )
    }
};

export default FormView;