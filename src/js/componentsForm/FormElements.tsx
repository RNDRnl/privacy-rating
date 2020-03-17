import * as React from "react";
import {Button, Container, InputGroup, Navbar, Jumbotron, FormControl, Accordion, Col, Row, Card, Table, ListGroup, ProgressBar, FormCheck} from "react-bootstrap";
// import * as stylesvalues from './FormElements.scss';
const styles = require('./FormElements.scss');
import FormContext from '../../state/FormContext';
import { useAccordionToggle } from 'react-bootstrap/AccordionToggle';

// //////////////
// Category
// /////////////

export interface ValidPropsCategory { 
    categoryName: String; 
    eventKey: string;
    children: any;
    availableIf: String;
    completedIf: String[];
}

export class FormCategory extends React.Component<ValidPropsCategory, {}> {
    static contextType = FormContext
    
    render() {

        const { checkForm } = this.context;


        var openState = checkForm( `${this.props.categoryName.toLowerCase()}_open` )

        return (
            <Card key={""+this.props.categoryName} >   
                <Card.Header>
                        <div>
                            <Navbar.Text>
                                {this.props.categoryName}
                            </Navbar.Text>
                            <Navbar.Text className={styles.justifyContentEnd}>
                                { checkForm(this.props.completedIf) != null &&
                                    <div>Check</div>
                                }
                                { checkForm(this.props.completedIf) == null &&
                                    <div>x</div>
                                }
                            </Navbar.Text>
                        </div>
                </Card.Header>
                <Accordion.Collapse eventKey={openState}>
                    <Card.Body>
                        <ListGroup variant="flush">
                            {this.props.children}
                        </ListGroup>
                    </Card.Body>
                </Accordion.Collapse>
            </Card>
        );
    }
}

// //////////////
// Section
// /////////////

export interface ValidPropsSection { 
    sectionName: String; 
    eventKey: string;
    children: any;
}

export class FormSection extends React.Component<ValidPropsSection, {}> {
    static contextType = FormContext

    render() {
        //console.log(this.props.children);

        const { checkForm } = this.context;

        // check!
        var currentName = this.props.sectionName
        var handle = currentName.substring(0, currentName.length - 2);
        var numberRef = parseInt(this.props.eventKey) - 1;
        var checkA = checkForm(`${handle}_${numberRef}_a`) == "YES"
        var checkB = checkForm(`${handle}_${numberRef}_b`) != null
        var isValid = checkA || checkB
        
        return (
            <div key={""+this.props.eventKey}>
                { this.props.eventKey == "0" && 
                    <div>
                        {/* <div>
                            section <u>{this.props.sectionName}</u>
                        </div> */}
                        {/* <div>{this.props.eventKey}</div> */}
                        {this.props.children}
                    </div>
                }
                { this.props.eventKey != "0" && isValid && 
                    <div>
                        <div>
                            section <u>{this.props.sectionName}</u>
                        </div>
                        <div>{this.props.eventKey}</div>
                        {this.props.children}
                    </div>
                }
            </div>
        );
    }
}

// //////////////
// Question
// /////////////

export interface ValidPropsQuestion { 
    question: String; 
    sectionName: String; 
    eventKey: string;
    children: any;
}

export class FormQuestion extends React.Component<ValidPropsQuestion, {}> {
    static contextType = FormContext

    render() {

        const { checkForm } = this.context;

        // check!
        var handle = this.props.sectionName
        var tempCheck = `${handle}_a`

        return (
            <ListGroup.Item key={""+this.props.eventKey}>
                    { this.props.eventKey == "0" && 
                        <div>
                            {/* <div>{this.props.sectionName}</div> */}
                            <div>{this.props.question}</div>
                            {this.props.children}
                        </div>
                    }
                    { this.props.eventKey != "0" && checkForm(tempCheck) == "NO" &&
                        <div>
                            <div>{this.props.sectionName}</div>
                            <div>{this.props.question}</div>
                            {this.props.children}
                        </div>
                    }
            </ListGroup.Item>
        );
    }
}

// //////////////
// Propt
// /////////////

export interface ValidPropsFormPrompt { 
    prompt: String;
    formRef : String; 
    eventKey: string;
    children: any;
}

export class FormPrompt extends React.Component<ValidPropsFormPrompt, {}> {
    static contextType = FormContext

    constructor(props: any) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleChange(event) {
        const { Form, updateForm } = this.context;
        //console.log(event.target.value);
        updateForm(
            this.props.formRef,
            event.target.value    
        )

    }

    handleClick() {
    }

    render() {
        return (
            <ListGroup.Item key={""+this.props.eventKey}>
                    <div>{this.props.prompt}</div>
                    <InputGroup className="mb-3">
                        <InputGroup.Prepend>
                        <InputGroup.Text id="basic-addon3">
                            https://
                        </InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl onChange={this.handleChange} id="basic-url" aria-describedby="basic-addon3" />
                    </InputGroup>
                    {this.props.children}
            </ListGroup.Item>
        );
    }
}

// //////////////
// Answer
// /////////////

export interface ValidPropsAnswer { 
    formRef : String; 
    answer: String;
    targetKey: String;
    eventKey: string;
}

export class FormAnser extends React.Component<ValidPropsAnswer, {}> {
    static contextType = FormContext

    constructor(props: any) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        const { updateFormMultiple } = this.context;

        updateFormMultiple(
            this.props.formRef,
            this.props.answer,
            `${this.props.targetKey}_open`,
            "1"
        )
    }

    render() {

        const { checkForm } = this.context;

        function CustomToggle({ className, answer, eventKey, handleClick }) {
            
            // const decoratedOnClick = useAccordionToggle(eventKey, (_handleClick:any) => {
            //     console.log("nav switch");
            //     _handleClick.handleClick();
            // });
            //onClick={() => decoratedOnClick(handleClick)} 

            return (
                <button className={className} type="button" onClick={handleClick.handleClick} >
                    {answer}
                </button>
            );
        }

        // check for state
        var classToUse = `${styles.answerButton} ${styles.notSelected}`;
        if( checkForm(this.props.formRef) == this.props.answer ) {
            classToUse = `${styles.answerButton} ${styles.selected}`;
        }

        return (
            <div>
                <CustomToggle className={classToUse} answer={this.props.answer} eventKey={this.props.targetKey} handleClick={this}  />
            </div>
        );
    }
}