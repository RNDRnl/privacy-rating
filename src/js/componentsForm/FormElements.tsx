import * as React from "react";
import {
    InputGroup,
    Navbar,
    FormControl,
    Accordion,
    Card,
    ListGroup,
    Popover,
    Image,
    OverlayTrigger
} from "react-bootstrap";
const styles = require('./FormElements.scss');
import FormContext from '../../state/FormContext';
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
                            <Navbar.Text className={styles.headerstyle}>
                                    { ((this.props.categoryName == 'Collection') || (this.props.categoryName == 'Sharing') || (this.props.categoryName == 'Control') || (this.props.categoryName == 'Security')) &&
                                    <Image className={styles.headerIconBig} src={`${process.env.BASE_PATH}/resources/icons/${this.props.categoryName.toLowerCase()}.gif`}/>
                                    }
                                    {this.props.categoryName}
                            </Navbar.Text>
                          
                            <Navbar.Text className={styles.justifyContentEnd}>
                                { openState == "1" &&
                                    <div className={classnames(styles.catStatus, styles.check)}>
                                        <div className={styles.smallCircle}></div>
                                    </div>
                                }
                                { openState == "0" &&
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

        var checkPrefilled = checkForm(`${handle}_${numberRef}_a`);
        if(checkPrefilled != null) {
            if(checkPrefilled.prefilled) {
                numberRef = numberRef -1;
            }
        }
        
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
    }
    
    render() {
        const { checkForm } = this.context;

        // check!
        var handle = this.props.sectionName
        
        var tempCheck = `${handle}_a`
        var showSecondQuestion = false
        var isPrefilled = false;
        if(checkForm(tempCheck) instanceof Rating) {
            if(checkForm(tempCheck).rate == null) {
                showSecondQuestion = true;
            }
            if(checkForm(tempCheck).prefilled == true) {
                isPrefilled = true;
            }
        }
        
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
                    { isPrefilled == false &&
                    <div>
                        { this.props.eventKey == "0" && 
                            <ListGroup.Item className={styles.ListGroupItem} key={""+this.props.eventKey}>
                                <div className={styles.question}>
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
                        { this.props.eventKey != "0" && showSecondQuestion &&
                            <ListGroup.Item className={styles.ListGroupItem} key={""+this.props.eventKey}>
                                <div className={styles.question}>
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
                    }
                    {/* { this.props.eventKey == "0" && isPrefilled == true &&
                        <ListGroup.Item className={styles.ListGroupItem} key={""+this.props.eventKey}>
                             <div className={classnames(styles.question, styles.prefilled)}>
                                 <div className={styles.questionText}>{this.props.question}</div>
                                 <div className={styles.answerContainer}>
                                     {this.props.children}
                                 </div>
                             </div>
                         </ListGroup.Item>
                    } */}
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
        var pattern = new RegExp('^(https?:\\/\\/)?'+ 
          '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ 
          '((\\d{1,3}\\.){3}\\d{1,3}))'+ 
          '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ 
          '(\\?[;&a-z\\d%_.~+=-]*)?'+ 
          '(\\#[-a-z\\d_]*)?$','i'); 
        return !!pattern.test(str);
      }

    handleChange(event) {
        const { Form, updateFormMultiple } = this.context;
        
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
        
        if(checkForm(this.props.formRef) != null) {           
            if( checkForm(this.props.formRef).rate == this.props.answer.rate ) {
                classToUse = `${styles.answerButton} ${styles.selected}`;
            }
        }

        return (
            <CustomToggle className={classToUse} answer={this.props.answer} eventKey={this.props.targetKey} handleClick={this} />           
        );
    }
}