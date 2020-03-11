import React from 'react';
import {Button, Container, Jumbotron} from "react-bootstrap";
import { Wizard, Step, Controls } from "react-decision-tree-flow";

const tree = {
    collection1_1: ["collection1_2", "collection2_1"],
    collection1_2: ["collection2_1"],
    collection2_1: ["collection2_2", "collection3_1"],
    collection2_2: ["collection3_1"],
    collection3_1: ["collection3_2", "sharing1_1"],
    collection3_2: ["sharing1_1"],
    sharing1_1: ["sharing2_1"],

};

const FormView = () => (
    <Wizard tree={tree} first="collection1_1">
        <Container>
                <Container>
                    <Jumbotron>
                        <Step name="collection1_1">
                            <div>
                                <h1>Question collection 1.1</h1>
                                <br />
                                <Controls>
                                    {({ collection1_2, collection2_1 }) => (
                                        <div>
                                            <Button variant="success" onClick={collection2_1}>YES go to collection 2.1</Button>
                                            <br />
                                            <br />
                                            <Button variant="danger" onClick={collection1_2}>NO go to collection 1.2</Button>
                                        </div>
                                    )}
                                </Controls>
                            </div>
                        </Step>
                    </Jumbotron>
                    <Jumbotron>
                        <Step name="collection1_2">
                            <div>
                                <h1>Question collection 1.2</h1>
                                <br />
                                <Controls>
                                    {({ collection2_1}) => (
                                        <div>
                                            <Button variant="success" onClick={collection2_1}>YES go collection to 2.1</Button>
                                            <br />
                                            <br />
                                            <Button variant="danger" onClick={collection2_1}>NO go collection to 2.1</Button>
                                        </div>
                                    )}
                                </Controls>
                            </div>
                        </Step>
                    </Jumbotron>
                    <Jumbotron>
                        <Step name="collection2_1">
                            <div>
                                <h1>Question collection 2.1</h1>
                                <br />
                                <Controls>
                                    {({ collection2_2, collection3_1 }) => (
                                        <div>
                                            <Button variant="success" onClick={collection3_1}>YES go collection to 3.1</Button>
                                            <br />
                                            <br />
                                            <Button variant="danger" onClick={collection2_2}>NO go collection to 2.2</Button>
                                        </div>
                                    )}
                                </Controls>
                            </div>
                        </Step>
                    </Jumbotron>
                    <Jumbotron>
                        <Step name="collection2_2">
                            <div>
                                <h1>Question collection 2.2</h1>
                                <br />
                                <Controls>
                                    {({ collection3_1 }) => (
                                        <div>
                                            <Button variant="success" onClick={collection3_1}>YES go to collection 3.1</Button>
                                            <br />
                                            <br />
                                            <Button variant="danger" onClick={collection3_1}>NO go to collection 3.1</Button>
                                        </div>
                                    )}
                                </Controls>
                            </div>
                        </Step>
                    </Jumbotron>
                    <Jumbotron>
                        <Step name="collection3_1">
                            <div>
                                <h1>Question collection 3.1</h1>
                                <br />
                                <Controls>
                                    {({ collection3_2, sharing1_1 }) => (
                                        <div>
                                            <Button variant="success" onClick={sharing1_1}>YES go to sharing 1.1</Button>
                                            <br />
                                            <br />
                                            <Button variant="danger" onClick={collection3_2}>NO go to collection 3.2</Button>
                                        </div>
                                    )}
                                </Controls>
                            </div>
                        </Step>
                    </Jumbotron>
                </Container>
        </Container>

    </Wizard>
);


export default FormView;