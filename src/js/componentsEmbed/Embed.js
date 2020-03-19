import React, { Component } from "react";
import {Button, Container, Jumbotron, Accordion, Col, Row, Card, Table, ListGroup, ProgressBar} from "react-bootstrap";
import styles from './Embed.scss';
import _ from 'underscore'
import FormContext from '../../state/FormContext'
import Header from "../Header";

class Embed extends Component {
    static contextType = FormContext
    
    constructor() {
        super();
    }

    render() {
    
        return (
                <div>
                    <Container>
                        <Row >
                            <Col>
                                <Header/>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <div>Here is your label: {this.props.labelId}</div>
                                <div>Use this embed code</div>
                                <iframe width={"500pt"} height={"500pt"} src={`http://0.0.0.0:3000/${this.props.labelId}/${this.props.domain}`} />
                            </Col>
                            <Col>
                                <div>Download the label from here</div>
                                <div>as svg</div>
                                <div>as png</div>
                            </Col>
                        </Row>
                    </Container>
                </div>
        )
    }
};

export default Embed;