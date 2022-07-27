
import * as React from "react";
import {LabelObject, Section } from "../../state/Logic";
import { LabelElement, LabelCategoryElement, LabelSectionElement } from "./RecommendationsElements";

// /////////
// RECOMMENDATION PANEL
// /////////

export default class RecommendationPanel { 
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
            result.push(new RecommendationCategoryTag(element.categoryName, element.rank, element.sections ).getTag(index))
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

export class RecommendationCategoryTag {
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
        this.sections.forEach(function(element, index) {
            result.push( new RecommendationSectionTag(element.text, element.score).getTag(index) ) ;
        })
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

export class RecommendationSectionTag {
    sectionText: String;
    score: any;
    getTag = (_index:any) => {
        return(
            <LabelSectionElement key={_index} sectionText={this.sectionText} score={this.score} />
        )
    }
    constructor(_sectionText: any, _score: any) { 
        this.sectionText = _sectionText; 
        this.score = _score;
    }
}