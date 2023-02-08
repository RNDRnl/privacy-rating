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
const classnames = require("classnames");
import Rating, { NameRule } from "../../state/Rating"

// //////////////
// Category
// /////////////

export interface ValidPropsCategory { 
    categoryName: String; 
    eventKey: string;
    children: any;
    availableIf: String;
}

const CardRef : any = Card;
const NavbarRef : any = Navbar;
const AccordionRef : any = Accordion;
const ListGroupRef : any = ListGroup;
const ImageRef : any = Image;
const OverlayTriggerRef : any = OverlayTrigger;
const PopoverRef : any = Popover;
const InputGroupRef : any = InputGroup;
const FormControlRef : any = FormControl;

export class FormCategory extends React.Component<ValidPropsCategory, {}> {
    static contextType = FormContext
    
    render() {

        const { checkForm } = this.context as any as any;

        var openState = checkForm( `${this.props.categoryName.toLowerCase()}_open` )
        // console.log(this.props.categoryName.toLowerCase(), openState)

        return (
            <CardRef key={""+this.props.categoryName}>
                <CardRef.Header>
                        <div>
                            <NavbarRef.Text className={styles.headerstyle}>
                                    { ((this.props.categoryName == 'Collection') || (this.props.categoryName == 'Sharing') || (this.props.categoryName == 'Control') || (this.props.categoryName == 'Security')) &&
                                    <ImageRef className={styles.headerIconBig} src={`${process.env.BASE_PATH}/resources/icons/${this.props.categoryName.toLowerCase()}.gif`}/>
                                    }
                                    {this.props.categoryName}
                            </NavbarRef.Text>
                          
                            <NavbarRef.Text className={styles.justifyContentEnd}>
                                { openState == "1" &&
                                    <div className={classnames(styles.catStatus, styles.check)}>
                                        <div className={styles.smallCircle}></div>
                                    </div>
                                }
                                { openState == "0" &&
                                    <div className={classnames(styles.catStatus, styles.cross)} ></div>
                                }
                            </NavbarRef.Text>
                        </div>
                </CardRef.Header>
                <AccordionRef.Collapse eventKey={openState}>
                    <CardRef.Body>
                        <ListGroupRef className={styles.listGroup} variant="flush">
                            {this.props.children}
                        </ListGroupRef>
                    </CardRef.Body>
                </AccordionRef.Collapse>
            </CardRef>
        );
    }
}

// //////////////
// Section
// //////////////

export interface ValidPropsSection { 
    sectionName: String; 
    eventKey: string;
    children: any;
}

export class FormSection extends React.Component<ValidPropsSection, {}> {
    static contextType = FormContext

    render() {
        const { checkForm } = this.context as any;

        // check!
        var currentName = this.props.sectionName
        
        var handle = currentName.substring(0, currentName.length - 2);
        var numberRef = parseInt(this.props.eventKey) - 1;

        // var checkPrefilled = checkForm(`${handle}_${numberRef}_a`);
        // if(checkPrefilled != null) {
        //     if(checkPrefilled.prefilled) {
        //         numberRef = numberRef - 1;
        //     }
        // }
        
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
                        {/* <div>xx {handle} eventKey:{this.props.eventKey} numberRef:{numberRef}</div> */}
                        <div>
                            {this.props.children}
                        </div>
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
        const { checkForm, getDataTypeNaming } = this.context as any;

        // check!
        var handle = this.props.sectionName
        var dataTypeNaming = getDataTypeNaming()
        
        var tempCheckA = `${handle}_a`
        var tempCheckB = `${handle}_b`
        var showSecondQuestion = false
        
        var isPrefilled_a = false;
        var isPrefilled_b = false;        
        
        // check if A prefilled
        if(checkForm(tempCheckA) instanceof Rating) {
            if(checkForm(tempCheckA).prefilled == true) {
                isPrefilled_a = true;
            }
        }

        // check if B prefilled
        if(checkForm(tempCheckB) instanceof Rating) {
            if(checkForm(tempCheckB).prefilled == true) {
                isPrefilled_b = true;
            }
        }

        // check if show second question
        if(checkForm(tempCheckA) instanceof Rating) {
            if(checkForm(tempCheckA).rate == null) {
                showSecondQuestion = true;
            }
        }
        
        function OverLayTriggerView(help_info) {

            var helpTitle = help_info.help_info[0];
            var help = help_info.help_info[1];
            
            return(
                <OverlayTriggerRef             
                    trigger={"click"} 
                    key={'bottom'}
                    placement={'bottom'}
                    rootClose
                    overlay={
                    <PopoverRef className={styles.popOver}  id={`popover-positioned-bottom`}>
                        <PopoverRef.Title as="h3">{helpTitle}</PopoverRef.Title>
                        <PopoverRef.Content  >
                            {help}
                        </PopoverRef.Content>
                    </PopoverRef>
                    }
                >
                    <button className={styles.helpButton} type="button">
                        Help
                    </button>
                </OverlayTriggerRef>
            )
        }

        function RenderQuestionText(value) {
            var filledString = value.question.replace("##dataTypeNaming##", `${dataTypeNaming}`)

            return(
                <span dangerouslySetInnerHTML={{ __html: filledString}}></span>
            )
        }

        return (
                <div>
                    <div>                        
                        { this.props.eventKey == "0" && !isPrefilled_a &&
                            <ListGroupRef.Item className={classnames(styles.ListGroupItem, isPrefilled_a ? styles.prefilled : null)} key={""+this.props.question}>
                                <div className={styles.question}>
                                    <div className={styles.questionText}><RenderQuestionText question={this.props.question} /></div>
                                    <div className={styles.answerContainer}>
                                        {this.props.children}
                                        {this.props.help != null &&
                                            <OverLayTriggerView help_info={[this.props.helpTitle, this.props.help]} />
                                        }
                                    </div>
                                </div>
                            </ListGroupRef.Item>
                        }
                        { this.props.eventKey != "0" && showSecondQuestion && !isPrefilled_b &&
                            <ListGroupRef.Item className={classnames(styles.ListGroupItem, isPrefilled_b ? styles.prefilled : null)} key={""+this.props.eventKey}>
                                <div className={styles.question}>
                                    <div className={styles.questionText} ><RenderQuestionText question={this.props.question} /></div>
                                    <div className={styles.answerContainer}>
                                        {this.props.children}
                                        {this.props.help != null &&
                                            <OverLayTriggerView help_info={[this.props.helpTitle, this.props.help]} />
                                        }
                                    </div>
                                </div>
                            </ListGroupRef.Item>
                        }

                        {/* { (isPrefilled_a || isPrefilled_b) && 
                            <div>prefilled</div>
                        } */}

                    </div>
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
        const { Form, updateFormMultiple } = this.context as any;
        
        const obj = {}
        obj[`${this.props.formRef}`] = event.target.value
        obj[`validUrl`] = this.validURL(event.target.value)
        obj[``] = ``
        obj[`checkHash`] = false

        updateFormMultiple(obj)
    }

    handleClick() {
    }

    render() {

        const { Form } = this.context as any;
        const buttonIndex = (!Form.validUrl) ? (0) : 1

        return (
            <ListGroupRef.Item key={""+this.props.eventKey}>
                    <div className={styles.question}>
                        <div className={styles.questionText} >
                            {this.props.prompt}
                        </div>
                    </div>
                    <InputGroupRef className={classnames(styles.urlInput, "mb-3")} >
                        <InputGroupRef.Prepend>
                        <InputGroupRef.Text id="basic-addon3">
                            https://
                        </InputGroupRef.Text>
                        </InputGroupRef.Prepend>
                        <FormControlRef onChange={this.handleChange} id="basic-url" aria-describedby="basic-addon3" />
                    </InputGroupRef>
                        <div className={styles.answerContainer}>
                            {this.props.children[buttonIndex]}
                        </div>
            </ListGroupRef.Item>
        );
    }
}

// //////////////
// Answer
// /////////////

export interface ValidPropsAnswer { 
    formRef : String;
    senderRef: String; 
    answer: Rating;
    nameRule: NameRule;
    eventKey: string;
}

export class FormAnswer extends React.Component<ValidPropsAnswer, {}> {
    static contextType = FormContext

    constructor(props: any) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        const { updateFormMultiple } = this.context as any;

        const obj = {}
        obj[`${this.props.formRef}`] = this.props.answer
        obj[`lastSender`] = this.props.senderRef
        obj[`scrollTarget`] = e.pageY
        if(this.props.nameRule != undefined) {
            obj[`${this.props.nameRule.handle}`] = this.props.nameRule.value
        }
        if( this.props.answer.preFills != undefined ) {
            for (const [key, value] of Object.entries(this.props.answer.preFills)) {
                console.log(key, value);
                obj[`${value.label}`] = value.rating                
            }
        }
        

        console.log('answer', this.props.answer)
        
        updateFormMultiple(obj)
    }

    render() {
        const { checkForm } = this.context as any;

        function CustomToggle({ className, answer, nameRule, handleClick }) {
            return (
                <button className={className} type="button" onClick={handleClick.handleClick} >
                    {answer.label}
                    {/* {nameRule != null &&
                        <div>{nameRule.value}</div>
                    } */}
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
            <CustomToggle className={classToUse} answer={this.props.answer} nameRule={this.props.nameRule} handleClick={this} />           
        );
    }
}