
import * as React from "react";
import {LabelObject, Section } from "../../state/Logic";
import { LabelElement, LabelCategoryElement, LabelSectionElement } from "./RecommendationsElements";

// /////////
// [recommendation] RECOMMENDATION PANEL
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
// [Recommendation] CATEGORY
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
            result.push( new RecommendationSectionTag(element.text, element.score, element.ranked, element.recommendation, element.hiddenDesc, element.hidden).getTag(index) ) ;
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
// [Recommendation] SECTION
// /////////

export class RecommendationSectionTag {
    sectionText: String;
    score: any;
    ranked: Boolean;
    recommendationText: String;
    hiddenDesc: String;
    hidden: Boolean;
    getTag = (_index:any) => {
        return(
            <LabelSectionElement key={_index} sectionText={this.sectionText} score={this.score} ranked={this.ranked} recommendationText={this.recommendationText} hiddenDesc={this.hiddenDesc} hidden={this.hidden} />
        )
    }
    constructor(_sectionText: any, _score: any, _ranked: any, _recommendationText:any, _hiddenDesc: String, _hidden: Boolean) { 
        this.sectionText = _sectionText; 
        this.score = _score;
        this.ranked = _ranked;
        this.recommendationText = _recommendationText;
        this.hiddenDesc = _hiddenDesc;
        this.hidden = _hidden;
    }
}