import * as React from "react";
import { FormCategory, FormSection, FormQuestion, FormAnser, FormPrompt } from "./FormElements"
import Rating from "../../state/Rating"

export default class Form { 
    categories: Category[] = new Array();
    constructor(_categories: Array<Category>) { 
        this.categories = _categories; 
    }
}

export class Category {
    categoryName: String;
    availableIf: String;
   
    sections: Section[] = new Array();
    getTag = (_index:String) => {
            return (
                <FormCategory 
                    key={""+this.categoryName} 
                    categoryName={this.categoryName} 
                    eventKey={""+_index}  
                    availableIf={this.availableIf}
                    children={this.getChildren()}
                />
            )
    }
    getChildren = () => {
        var result: any = new Array()
        this.sections.forEach(function(element, index) {
            result.push(element.getTag(""+index))
        })
        return result
    }
    constructor(_categoryName: String, _availableIf: String, _sections: Array<Section>) { 
        this.categoryName = _categoryName; 
        this.availableIf= _availableIf;
        this.sections = _sections; 
    }
}

export class Section {
    sectionName: String;
    questions: Question[] | Prompt[] = new Array();
    
    getTag = (_index:String) => {
        return(
            <FormSection 
                key={""+this.sectionName} 
                sectionName={this.sectionName} 
                eventKey={""+_index} 
                children={this.getChildren()}
            />
        )
    }
    getChildren = () => {
        var result: any = new Array()
        var sectionName = this.sectionName;
        this.questions.forEach(function(element:any, index:any) {
            result.push(element.getTag(""+index, sectionName))
        })
        return result
    }
    constructor(_sectionName: String, _questions: Array<Question> | Array<Prompt>) { 
        this.sectionName = _sectionName; 
        this.questions = _questions; 
    }
}

export class Question {
    question: String;
    helpTitle?: String;
    help?: String;
    ansers: Answer[] = new Array();
    getTag = (_index:String, _sectionName:String) => {
        return( 
        <FormQuestion 
                key={""+_index} 
                question={this.question} 
                eventKey={""+_index} 
                helpTitle={this.helpTitle}
                help={this.help}                
                sectionName={_sectionName}
                children={this.getChildren()}
        />  
        )
    }
    getChildren = () => {
        var result: any = new Array()
        this.ansers.forEach(function(element, index) {
            result.push(element.getTag(""+index))
        })
        return result
    }
    checkVisible = (_in: String) => {
    }
    constructor(_question: String, _ansers: Array<Answer>, _helpTitle?:String,  _help?:String) { 
        this.question = _question; 
        this.helpTitle = _helpTitle;
        this.help = _help;
        this.ansers = _ansers; 
    }
}

export class Prompt {
    
    formRef: String;
    prompt: String;
    ansers: Answer[] = new Array();
    getTag = (_index:String) => {
        return( 
        <FormPrompt 
                key={""+_index} 
                prompt={this.prompt} 
                formRef={this.formRef}
                eventKey={""+_index} 
                children={this.getChildren()}
            />
        )
    }
    getChildren = () => {
        var result: any = new Array()
        this.ansers.forEach(function(element, index) {
            result.push(element.getTag(""+index))
        })
        return result
    }
        constructor(_formRef: string, _prompt: String, _ansers: Array<Answer>) { 
        this.formRef = _formRef;
        this.prompt = _prompt; 
        this.ansers = _ansers; 
    }
}

export class Answer {
    formRef: String;
    targetKey: String;
    answer?: Rating;

    getTag = (_index:String) => {
        return (
            <FormAnser key={""+_index} targetKey={this.targetKey} formRef={this.formRef} eventKey={""+_index} answer={this.answer} />
        )
    }
    constructor(_formRef: string, _answer?: Rating) { 
        this.formRef = _formRef;
        //this.targetKey = _targetKey;_targetKey: string, 
        this.answer = _answer;
    }
}
