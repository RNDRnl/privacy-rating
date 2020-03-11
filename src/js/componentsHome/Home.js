import React, { Component } from "react";
import {Button, Container, Row, Jumbotron, Image, Col, Card, CardDeck} from "react-bootstrap";

const initialFormState = {
}

const Home = () => {
    return (
        <Container>
            <Row>
                <Jumbotron>
                    <h1>PRIVACY RATING</h1>

                    <h2>About</h2>
                    <p>
                        Privacy Rating specializes in helping enterprises comply
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
                        of unauthorized communication from customers' devices.
                    </p>

                    <h2>Create your own label</h2>

                    <p>
                        creating a label your self all you have to do is take a questionnaire about your website and the
                        label will be generated for your website and made to implement easily in to your own website.
                    </p>

                    <p>
                        <Button variant="success" href="form">Click here to create a label</Button>{' '}
                    </p>

                    <h4> Websites who already use the label</h4>

                    <Row>
                        <CardDeck>
                            <Card>
                                <Card.Body>
                                    <Card.Img variant="top" src="resources/logos/rijksoverheid.jpg" />
                                </Card.Body>
                                <Card.Footer>
                                    <small className="text-muted">Rijksoverheid</small>
                                </Card.Footer>
                            </Card>

                            <Card>
                                <Card.Body>
                                    <Card.Img variant="top" src="resources/logos/eu.jpg" />
                                </Card.Body>
                                <Card.Footer>
                                    <small className="text-muted">EU Parlement</small>
                                </Card.Footer>
                            </Card>

                            <Card>
                                <Card.Body>
                                    <Card.Img variant="top" src="resources/logos/bol.jpg" />
                                </Card.Body>
                                <Card.Footer>
                                    <small className="text-muted">Bol.com</small>
                                </Card.Footer>
                            </Card>

                        </CardDeck>
                    </Row>

                </Jumbotron>
            </Row>
        </Container>
    );
};

export default Home;