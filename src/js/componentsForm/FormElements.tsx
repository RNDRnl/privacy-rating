import * as React from "react";
import {
    Button,
    Container,
    InputGroup,
    Navbar,
    Jumbotron,
    FormControl,
    Accordion,
    Col,
    Row,
    Card,
    Table,
    ListGroup,
    ProgressBar,
    FormCheck,
    Popover,
    Image,
    Tooltip,
    OverlayTrigger
} from "react-bootstrap";
// import * as stylesvalues from './FormElements.scss';
const styles = require('./FormElements.scss');
import FormContext from '../../state/FormContext';
import { useAccordionToggle } from 'react-bootstrap/AccordionToggle';
import classnames from "classnames";
import Rating from "../../state/Rating"

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
            <Card key={""+this.props.categoryName}>
                <Card.Header>
                        <div>
                            {/* { checkForm(this.props.availableIf) == null && */}
                                <Navbar.Text className={styles.headerstyle}>
                                     { ((this.props.categoryName == 'Collection') || (this.props.categoryName == 'Sharing') || (this.props.categoryName == 'Control') || (this.props.categoryName == 'Security')) &&
                                        <Image className={styles.headerIconBig} src={`/resources/icons/${this.props.categoryName}-V3.gif`}/>
                                     }
                                     {this.props.categoryName}
                                </Navbar.Text>
                            {/* } */}

                            <Navbar.Text className={styles.justifyContentEnd}>
                                { checkForm(this.props.completedIf) != null &&
                                    <div className={classnames(styles.catStatus, styles.check)}>
                                        <div className={styles.smallCircle}></div>
                                    </div>
                                }
                                { checkForm(this.props.completedIf) == null &&
                                    <div className={classnames(styles.catStatus, styles.cross)} ></div>
                                }
                            </Navbar.Text>
                        </div>
                </Card.Header>
                <Accordion.Collapse eventKey={openState}>
                    <Card.Body>
                        <ListGroup className={styles.listGroup} variant="flush">
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
        const { checkForm } = this.context;

        // check!
        var currentName = this.props.sectionName
        
        var handle = currentName.substring(0, currentName.length - 2);
        var numberRef = parseInt(this.props.eventKey) - 1;
        
        var validA = false
        var validB = false
        
        var checkA = checkForm(`${handle}_${numberRef}_a`) 
        if(checkA instanceof Rating) {
            if(checkA.rate != null) {
                validA = true
            }
        }

        var checkB = checkForm(`${handle}_${numberRef}_b`)
        if(checkB instanceof Rating) {
            validB = true
        }
                
        var isValid = validA || validB
        
        return (
            <div key={""+this.props.eventKey}>
                { this.props.eventKey == "0" && 
                    <div>
                        {this.props.children}
                    </div>
                }
                { this.props.eventKey != "0" && isValid && 

                    <div>
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
    helpTitle: String;
    help:String;
    children: any;
}

export class FormQuestion extends React.Component<ValidPropsQuestion, {}> {
    static contextType = FormContext
    
    constructor(props) {
        super(props)
        // this.pmyRef = React.createRef();
        // this.refs.overlay.hide();

    }

    
    
    render() {
        const { checkForm } = this.context;

        // check!
        var handle = this.props.sectionName
        
        var tempCheck = `${handle}_a`
        var showSecondQuestion = false
        if(checkForm(tempCheck) instanceof Rating) {
            if(checkForm(tempCheck).rate == null) {
                showSecondQuestion = true;
            }
        }
        //&& checkForm(tempCheck) == "No"
        
        function OverLayTriggerView(help_info) {

            var helpTitle = help_info.help_info[0];
            var help = help_info.help_info[1];
            
            return(
                <OverlayTrigger             
                    trigger={"click"} 
                    key={'bottom'}
                    placement={'bottom'}
                    overlay={
                    <Popover className={styles.popOver}  id={`popover-positioned-bottom`}>
                        <Popover.Title as="h3">{helpTitle}</Popover.Title>
                        <Popover.Content  >
                            {help}
                        </Popover.Content>
                    </Popover>
                    }
                >
                    <button className={styles.helpButton} type="button">
                        Help
                    </button>
                </OverlayTrigger>
            )
        }

        return (
                <div>
                    { this.props.eventKey == "0" && 
                        <ListGroup.Item className={styles.ListGroupItem} key={""+this.props.eventKey}>
                            <div className={styles.question}>
                                {/* <div>{this.props.sectionName}</div> */}
                                <div className={styles.questionText}>{this.props.question}</div>
                                <div className={styles.answerContainer}>
                                    {this.props.children}
                                    {this.props.help != null &&
                                        <OverLayTriggerView help_info={[this.props.helpTitle, this.props.help]} />
                                    }
                                </div>
                            </div>
                        </ListGroup.Item>
                    }
                    { this.props.eventKey != "0"  && showSecondQuestion &&
                        <ListGroup.Item className={styles.ListGroupItem} key={""+this.props.eventKey}>
                            <div className={styles.question}>
                                {/* <div>{this.props.sectionName}</div> */}
                                <div className={styles.questionText} >{this.props.question}</div>
                                <div className={styles.answerContainer}>
                                    {this.props.children}
                                    {this.props.help != null &&
                                        <OverLayTriggerView help_info={[this.props.helpTitle, this.props.help]} />
                                    }
                                </div>
                            </div>
                        </ListGroup.Item>
                    }
            </div>
        );
    }
}

// //////////////
// Prompt
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

    validURL(str) {
        var pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
          '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
          '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
          '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
          '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
          '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
        return !!pattern.test(str);
      }

    handleChange(event) {
        const { Form, updateFormMultiple } = this.context;
        //console.log(event.target.value);
        
        updateFormMultiple(
            this.props.formRef,
            event.target.value,
            'validUrl',
            this.validURL(event.target.value)    
        )

    }

    handleClick() {
    }

    render() {

        const { Form } = this.context;

        return (
            <ListGroup.Item key={""+this.props.eventKey}>
                    <div className={styles.question}>
                        <div className={styles.questionText} >
                            {this.props.prompt}
                        </div>
                    </div>
                    <InputGroup className={classnames(styles.urlInput, "mb-3")} >
                        <InputGroup.Prepend>
                        <InputGroup.Text id="basic-addon3">
                            https://
                        </InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl onChange={this.handleChange} id="basic-url" aria-describedby="basic-addon3" />
                    </InputGroup>
                    { Form.validUrl &&
                        <div className={styles.answerContainer}>
                            {this.props.children}
                        </div>
                    }
            </ListGroup.Item>
        );
    }
}

// //////////////
// Answer
// /////////////

export interface ValidPropsAnswer { 
    formRef : String; 
    answer: Rating;
    targetKey: String;
    eventKey: string;
}

export class FormAnser extends React.Component<ValidPropsAnswer, {}> {
    static contextType = FormContext

    constructor(props: any) {
        super(props);
        
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        const { updateFormMultiple } = this.context;
        updateFormMultiple(
            this.props.formRef, this.props.answer,
            `${this.props.targetKey}_open`, "1",
            "scrollTarget", e.pageY
        );
    }

    render() {
        const { checkForm } = this.context;

        function CustomToggle({ className, answer, eventKey, handleClick }) {
            return (
                <button className={className} type="button" onClick={handleClick.handleClick} >
                    {answer.label}
                </button>
            );
        }

        var classToUse = `${styles.answerButton} ${styles.notSelected}`;
        if( checkForm(this.props.formRef) == this.props.answer ) {
            classToUse = `${styles.answerButton} ${styles.selected}`;
        }

        return (
           <CustomToggle className={classToUse} answer={this.props.answer} eventKey={this.props.targetKey} handleClick={this}  />
        );
    }
}