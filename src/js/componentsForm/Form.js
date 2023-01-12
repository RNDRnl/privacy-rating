import React, { Component } from "react";
import {Container, Accordion, Col, Row, ProgressBar} from "react-bootstrap";
import styles from './Form.scss';
import FormConfig from "./FormConfig"
import FormContext from '../../state/FormContext'
import Header from "../Header";
import { Link } from "react-router-dom";
import * as Scroll from 'react-scroll';
import Footer from "../Footer";
import classnames from "classnames";

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
        const { Form } = this.context
        var scroll = Scroll.animateScroll;
        scroll.scrollTo((Form.scrollTarget - Math.round(window.innerHeight/3)), {duration:500});
    }

    componentDidMount() {
        var scroll = Scroll.animateScroll;
        scroll.scrollTo(0, {duration:250});
    }
    
    render() {

        const { Form } = this.context;

        var domain = '';
        if( Form.generatedHash != null) { 
            if(Form.validUrl) {
                domain = `/${Form.domain.replace(".", "**")}`;
            }
        }


        return (
                <div>
                    <Container className={styles.formContainer}>
                        <Header/>

                        <Row >
                            { this.getForm(FormConfig) }
                        </Row>

                        <div>
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
                                    Your label is complete!
                                </Col>
                                <Col className={styles.actionContainer}>
                                    <div className={classnames(styles.action)}>
                                        <Link to={`/embed/${Form.generatedHash}${domain}`}>
                                            <div className={classnames(styles.button, styles.download)}>
                                                Download label
                                            </div>
                                        </Link>
                                    </div>
                                </Col>
                            </Row>
                            }
                        </div>

                        <br/><br/>

                        <Footer />
                    </Container>
                </div>
        )
    }
};

export default FormView;