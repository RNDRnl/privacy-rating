import React, { Component } from "react";
import {Button, Container, Jumbotron, Accordion, Col, Row, Card, Table, ListGroup, ProgressBar} from "react-bootstrap";
import { useAccordionToggle } from 'react-bootstrap/AccordionToggle';
import styles from './Form.scss';
import _ from 'underscore'

const labelRating = {
    rank: 0.8275,
    label: 'b',
    domain: 'bol.com',
    year: 2020,
    categories: [
        {
            rank: 0.66,
            category: 'Collection',
            descriptoins: [
                { rank: 2, text: 'Collects sensetive data' },
                { rank: 0, text: 'Data used for functionality' },
                { rank: 0, text: 'Data not stored' }
            ]
        },
        {
            rank: 1.33,
            category: 'Sharing',
            descriptoins: [
                { rank: 0, text: 'no sharing of user data' },
                { rank: 2, text: 'Sale of user data' },
                { rank: 2, text: 'Cooperates with law enforment outside users juristinction' }
            ]
        },
        {
            rank: 0.66,
            category: 'Control',
            descriptoins: [
                { rank: 2, text: 'No-opt-out' },
                { rank: 0, text: 'Data removed upon request' },
                { rank: 0, text: 'Some data can be amended' }
            ]
        },
        {
            rank: 0.66,
            category: 'Security',
            descriptoins: [
                { rank: 2, text: 'No-opt-out' },
                { rank: 0, text: 'Data removed upon request' },
                { rank: 0, text: 'Some data can be amended' }
            ]
        }
    ]
}

const EmptyRating = {
    rank: null,
    label: null,
    domain: null,
    year: 2020,
    categories: [
        {
            rank: null,
            category: 'Start',
            descriptoins: [
                { rank: null, text: null },
            ]
        },
        {
            rank: null,
            category: 'Collection',
            descriptoins: [
                { rank: null, text: null },
                { rank: null, text: null },
                { rank: null, text: null }
            ]
        },
        {
            rank: null,
            category: 'Sharing',
            descriptoins: [
                { rank: 0, text: null },
                { rank: 2, text: null },
                { rank: 2, text: null }
            ]
        },
        {
            rank: null,
            category: 'Control',
            descriptoins: [
                { rank: 2, text: null },
                { rank: 0, text: null },
                { rank: 0, text: null }
            ]
        },
        {
            rank: null,
            category: 'Security',
            descriptoins: [
                { rank: 2, text: null },
                { rank: 0, text: null },
                { rank: 0, text: null }
            ]
        }
    ]   
}

// const wizzard = [
//         {
//             category: 0, 
//             section: 0,
//             question: 0
//         }
//     ]

const ratingModel = {
    categories: [
        {
            category: 'start',
            activeIfStepBiggerThen: -1,
            sections: [
                {
                    section: "start_1",
                    activeIfStepBiggerThen: -1,
                    questions: [
                        {
                            handle: 'start',
                            question: 'I declare that the answers accurately represent the full extent of storage, processing, and handling of user data',
                            options: [
                                {
                                    answer: 'OK',
                                    nextHandle: 'collection_1_a',
                                    nextCategory: 1,
                                    nextStep: 1,
                                    rank: null
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            category: 'collection',
            activeIfStepBiggerThen: 0,
            sections: [
                {
                    section: "collection_1",
                    activeIfStepBiggerThen: 0,
                    questions: [
                        {
                            handle: 'collection_1_a',
                            question: 'Does the service provider collect  data consisting of racial or ethnic origin, political opinions, religious or philosophical beliefs, or trade union membership, genetic data, biometric data, data concerning health or data concerning a natural person\'s sex life or sexual orientation from its users? (GDPR Art. 9)',
                            options: [
                                { answer: 'yes', rank: 2, nextHandle: 'collection_2_a', nextCategory:1, nextStep:2, text: 'Collects sensitive data' },
                                { answer: 'no', rank: null, nextHandle: 'collection_1_b', nextCategory:1, nextStep:2, text: null }
                            ]
                        },
                        {
                            handle: 'collection_1_b',
                            question: 'Does the service collect information relating to an identified or identifiable natural person from its users? (GDPR Art. 4)',
                            options: [
                                { answer: 'yes', rank: 1, nextHandle: 'collection_2_a', text: 'Collects personal data' },
                                { answer: 'no', rank: 0, nextHandle: 'collection_2_a', text: 'Collects anonymous data' }
                            ]
                        }
                    ]
                },
                {
                    section: "collection_2",
                    activeIfStepBiggerThen: 1,
                    questions: [
                        {
                            handle: 'collection_2_a',
                            question: 'Here is my question',
                            options: [
                                { answer: 'yes', rank: 2, nextHandle: 'collection_2_a' },
                                { answer: 'no', rank: null, nextHandle: 'collection_1_b' }
                            ]
                        },
                        {
                            handle: 'collection_2_b',
                            question: 'Here is my question',
                            options: [
                                { answer: 'yes', rank: 2, nextHandle: 'collection_2_a' },
                                { answer: 'no', rank: null, nextHandle: 'collection_1_b' }
                            ]
                        }
                    ]
                },
                {
                    section: "collection_3",
                    activeIfStepBiggerThen: 2,
                    questions: [
                        {
                            handle: 'collection_3_a',
                            question: 'Here is my question',
                            options: [
                                { answer: 'yes', rank: 2, nextHandle: 'collection_2_a' },
                                { answer: 'no', rank: null, nextHandle: 'collection_1_b' }
                            ]
                        },
                        {
                            handle: 'collection_3_b',
                            question: 'Here is my question',
                            options: [
                                { answer: 'yes', rank: 2, nextHandle: 'collection_2_a' },
                                { answer: 'no', rank: null, nextHandle: 'collection_1_b' }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            category: 'sharing',
            activeIfStepBiggerThen: 10,
            sections: [
                
            ]
        },
        {
            category: 'control',
            activeIfStepBiggerThen: 20,
            sections: [
                
            ]
        },
        {
            category: 'securety',
            activeIfStepBiggerThen: 30,
            sections: [
                
            ]
        }
    ]
}

class FormView extends Component {
    constructor() {
        super();

        this.state = { 
            currentHandle: null,
            currentCategory: 0,
            currentStep: 0,
            currentRating : _.clone(EmptyRating)
        }

        this.createOptions = this.createOptions.bind(this);
    }

    getForm() {
        let form = []
        for (var c = 0; c < ratingModel.categories.length; c++) {
            var category = ratingModel.categories[c];
            form.push( this.createCategory(category, c))
        }

        return (
            <Accordion className={styles.accordionView} defaultActiveKey={0} >
                {form}
            </Accordion>
        );
    }


    createCategory = (category, cIndex) => {
        let categoryRender = []
        
        for (var s = 0; s < category.sections.length; s++) {
            var section = category.sections[s];
            categoryRender.push( this.createSection(section, s) )
        }

        return (
            <Card key={category.category} >   
                <Card.Header>
                  
                    <Accordion.Toggle as={Button} variant="link" eventKey={cIndex}>
                        {category.category}
                    </Accordion.Toggle>
                    
                </Card.Header>
                <Accordion.Collapse eventKey={cIndex}>
                    <Card.Body>
                        <ListGroup variant="flush">
                            {categoryRender}
                        </ListGroup>
                    </Card.Body>
                </Accordion.Collapse>
            </Card>
        )
    }

    createSection = (section, sIndex) => {
        let sectionRender = []

        for (var q = 0; q < section.questions.length; q++) {
            var question = section.questions[q];
            sectionRender.push( this.createQuestion(question, q) )
        }

        return (
            <div>
                 
                <div key={sIndex}>
                    <div>section: <u>{section.section}</u></div>
                    {sectionRender}
                </div>
                
            </div>
        )

    }

    // this.createQuestion( question, q )

    createQuestion = (question, qIndex) => {
        let questionRender = []
        questionRender.push(
            <ListGroup.Item key={qIndex}>
                    <div >{question.handle}</div>
                    <div >{question.question}</div>
                    {this.createOptions(question.options)} 
            </ListGroup.Item>
        )
        return questionRender
    }

    

    createOptions = (options) => {
        let optionsRender = []
        
        function CustomToggle({ children, eventKey, optionVal, contextVal }) {
            const decoratedOnClick = useAccordionToggle(eventKey, (_context) => {
                _context[1].setState({ 
                    ..._context[1].state,
                    currentHandle: _context[0].nextHandle,
                    currentCategory: _context[0].nextCategory,
                    currentStep: _context[0].nextStep
                })
            });
            return (
                <button className={styles.answerButton} type="button" onClick={() => decoratedOnClick([optionVal, contextVal])} >
                    {children}
                </button>
            );
        }

        var that = this;


        for (var op = 0; op < options.length; op++) {
            let option = options[op]
            optionsRender.push(
                // <Button key={op} variant="dark"  eventKey="0" onClick={() => this.handleClick(option)} >{option.answer}</Button>
                <CustomToggle key={op} eventKey={1} optionVal={option} contextVal={that} >{option.answer}</CustomToggle>
            )
        }
        return optionsRender
    }

    handleClick(option) {

        console.log(option)

        useAccordionToggle(1, () =>
        console.log('totally custom!'),
      );

  

    }
    
    render() {
        const now = 10;
        return (
            <Container>
                <Row >
                    <Col>
                        <br />
                        <h1>PRIVACY LABEL FORM</h1>
                        <br />
                        <div>current handle:{this.state.currentHandle}</div>
                        <div>current category: {this.state.currentCategory}</div>
                        <div>current step:{this.state.currentStep}</div>
                        
                    </Col>
                </Row>
                <Row >
                    { this.getForm() }
                </Row>
                <Row>
                    <Col>
                        <ProgressBar variant="primary" className={styles.ProgressBar} animated now={now} label={`start`} />
                    </Col>
                </Row>
            </Container>
        )
    }
};

export default FormView;
