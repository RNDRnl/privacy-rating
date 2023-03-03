import * as React from "react";
import {LabelObject, Section } from "../../state/Logic" 
import { LabelElement, LabelCategoryElement, LabelSectionElement } from "./LabelElements"

// /////////
// LABEL
// /////////

export default class LabelTag { 
    rank : any;
    labelObject: LabelObject
    getTag = () => {
       return (
           <div>
                <LabelElement 
                    rating={this.rank} 
                    children={this.getChildren()} 
                    domain={this.labelObject.domain}
                    year={this.labelObject.year}
                />
           </div>
       )
    }
    getChildren = () => {
        var result: any = new Array()
        this.labelObject.categories.forEach(function(element, index) {
            result.push(new CategoryTag(element.categoryName, element.rank, element.sections ).getTag(index))
        })
        return result
    }
    constructor(_labelObject:LabelObject) { 
        this.labelObject = _labelObject
        this.rank = this.labelObject.rank
    }
}

// /////////
//  CATEGORY
// /////////

export class CategoryTag {
    categoryName: String
    rating: any
    sections: Section[] = new Array();
    getTag = (_index:any) => {
        return (
            <LabelCategoryElement
                key={_index}  
                rating={this.rating}
                categoryName={this.categoryName} 
                children={this.getChildren()} 
            />
        )
    }
    getChildren = () => {
        var result: any = new Array()
        var allAreRanked = this.sections.every((element) => { return element.ranked == true })
        if(allAreRanked) {
            this.sections.forEach(function(element, index) {
                result.push( new SectionTag(element.text, element.resultDesc, element.score, element.ranked).getTag(index) ) ;
            })
        } else {
            this.sections.forEach(function(element, index) {
                if(!element.ranked) {
                result.push( new SectionTag(element.text, element.resultDesc, element.score, element.ranked).getTag(index) ) ;
                }
            })
        }
        return result
    }
    constructor(_categoryName: String, _rating: any, _sections: Array<Section>) { 
        this.categoryName = _categoryName; 
        this.rating = _rating;
        this.sections = _sections; 
    }
}

// /////////
//  SECTION
// /////////

export class SectionTag {
    sectionText: String;
    sectionDesc: String;
    score: any;
    ranked: Boolean;
    getTag = (_index:any) => {
        return(
            <LabelSectionElement key={_index} sectionText={this.sectionText} sectionDesc={this.sectionDesc} score={this.score} ranked={this.ranked} />
        )
    }
    constructor(_sectionText: any, _sectionDesc: any, _score: any, _ranked: Boolean) { 
        this.sectionText = _sectionText; 
        this.sectionDesc = _sectionDesc;
        this.score = _score;
        this.ranked = _ranked;
    }
}