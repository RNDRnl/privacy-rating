import LabelTag from "../js/componentsLabel/LabelClasses";

import { RatingConfig } from "./RatingConfig"
import FormConfig from "../js/componentsForm/FormConfig"
import { Answer } from "../js/componentsForm/FormClasses";
import Rating from "./Rating";

export class LabelObject {
    score: any;
    rank: 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G';
    categories: Category[] = new Array();
    domain: String;
    year: 2020;
    calculateRank() {
        this.rank = scoreToRank(this.score);
    }
    constructor(_score:any, _domain:String, _categories:Category[]) {
        this.score = _score;
        this.domain = _domain;
        this.categories = _categories;
        this.calculateRank();
    }
}

class Category {
    score: any;
    rank: 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G';
    categoryName: String;
    sections: Section[] = new Array();
    calculateRank() {
        this.rank = scoreToRank(this.score);
    }
    constructor(_score: any, _categoryName: String, _sections:Section[]) {
        this.categoryName = _categoryName;
        this.score = _score;
        this.sections = _sections;
        this.calculateRank();
    }
}

const mapRange = (value:any, low1:any, high1:any, low2:any, high2:any) => {
    return low2 + (high2 - low2) * (value - low1) / (high1 - low1);
}

const mapToRank = (value:any) => {
    if(value >= 0.0 && value <= 0.25) {
        return 'A'
    } else if (value >= 0.5 && value <= 1.25) {
        return 'B'
    } else if (value >= 1.5 && value <= 2.25) {
        return 'C'
    } else if (value >= 2.5 && value <= 3.25) {
        return 'D'
    } else if (value >= 3.5 && value <= 4.25) {
        return 'E'
    } else if (value >= 4.5 && value <= 5.25) {        
        return 'F'
    } else if (value >= 5.5 && value <= 6.0) {
        return 'G'
    }
}

const scoreToRank = (score:any) => {
    return mapToRank(score);
}

export class Section {
    score: any;
    text: String;
    constructor(_score: Number, _text: String) {
        this.score = _score;
        this.text = _text;
    }
}

const getMatchingScore = (FormState:any, cat: String, i: Number) => {

    var questionA = `${cat}_${i}_a`;
    var questionB = `${cat}_${i}_b`;
    
    var answerA = FormState[questionA];
    var answerB = FormState[questionB];

    var result = null

    if(answerA instanceof Rating) {
        if(answerA.rate != null) {
            result = answerA
        } else if(answerB instanceof Rating) {
            result = answerB
        }
    }

    return result;
}


const sumScore = (elements:any) => {
    var runningScore = 0.0
    var isInvalid = false

    elements.forEach((element) => {
        if(element == null) {
            isInvalid = true
        } else {
            runningScore += element.score
        }
    });

    if(isInvalid) {
        return null
    } else {
        return runningScore;
    }
}

const calculateScore = (elements:any, devide:any) => {

    var runningScore = 0.0
    var isInvalid = false

    elements.forEach((element) => {
        if(element == null) {
            isInvalid = true
        } else {
            runningScore += element.score
        }
    });

    if(isInvalid) {
        return null
    } else {
        return (runningScore / devide);
    }
}

const mashupRating = (ratingIn:any) => {
    switch(ratingIn) {
        case "C":
            return "L"
        case "B":
            return "R"
        case "A":
            return "P"
    }
}

const categoriesToHash = (catagories:any) => {

    var isInvalid = false
    var hash = "";

    catagories.forEach( (category:any) => {
        category.sections.forEach( (section:any) => {
            if(section == null) {
                isInvalid = true
            } else {
                hash += mashupRating(section.rate);
            }
        });
    });

    if(isInvalid) {
        return null;
    } else {
        return hash;
    }
}

const checkForInvalidCategory = (category:any, formState:any) => {
    var invalid = false
        for (let i in [0, 1, 2]) {
            if(
                (formState[`${category}_${i}_a`] != null) && (formState[`${category}_${i}_a`].rate != null) ||
                (formState[`${category}_${i}_a`] != null) && (formState[`${category}_${i}_b`] != null)                     
            ) {

            } else {
                invalid = true
            }
    }
    return invalid
}

const calculateProcess = (catagories:any, FormState:any) => {

    var variant = "secondary";
    var value = 0;
    var text = "";

    if(FormState.checklist_open!="0") {
        var variant = "secondary";
        var value = 20;
        var text = "20%";
    }
    
    if(FormState.domainSubmit!=null) {
        var variant = "secondary";
        var value = 30;
        var text = "30%";
    }

    if(FormState.instruction_open!="0") {
        var variant = "secondary";
        var value = 40;
        var text = "40%";
    }

    if(!checkForInvalidCategory("collection", FormState)) {
        var variant = "secondary";
        var value = 60;
        var text = "60%";
    }
    
    if(!checkForInvalidCategory("sharing", FormState)) {
        var variant = "secondary";
        var value = 80;
        var text = "80%";
    }
    if(!checkForInvalidCategory("control", FormState)) {
        var variant = "secondary";
        var value = 90;
        var text = "90%";
    }
    
    if(!checkForInvalidCategory("security", FormState)) {
        var variant = "success";
        var value = 100;
        var text = "100%";
    }

    return { variant:variant, value:value, text:text};
}

const FormStateToHash = (FormState:any) => {
    var categoriesToCheck = ["collection", "sharing", "control", "security"];
    var catagories = [];
    
    categoriesToCheck.forEach(function(cat) {
        var sections = [];
        for (var i of [0, 1, 2]) {
            sections.push(getMatchingScore( FormState, cat, i));
        }

        var score = calculateScore(sections, 3.0)
        catagories.push( new Category(score, cat, sections) );
    });

    var hashValue = categoriesToHash(catagories);
    var calculatedProgress = calculateProcess(catagories, FormState);

    if(hashValue != null) {
        return { 'value': `${hashValue}`, 'progress': calculatedProgress };
    } else {
        return { 'value': hashValue, 'progress': calculatedProgress};
    }
}

const indexToCategory = (index:any) => {
    switch(index) {
        case 0: case 1: case 2:
            return "collection"
        case 3: case 4: case 5:
            return "sharing"
        case 6: case 7: case 8:
            return "control"
        case 9: case 10: case 11:
            return "security"
    }
}

const indexToSection = (index:any) => {
    return index % 3
}

const covertDomain = (domain:any) => {
    return domain.replace("**", ".")
}

const HashToLabelState = (labelHash:any) => {

    var characters = labelHash.hash.split("")
    var sections = [];
    characters.forEach(function(char, index) {
        var targetPath = `${indexToCategory(index)}_${indexToSection(index)}_${(char)}`
        var resultRating = RatingConfig[targetPath];
        var section = new Section(resultRating.score, resultRating.text);
        sections.push(section);
    })

    var category1 = sections.slice(0, 3);
    var category2 = sections.slice(3, 6);
    var category3 = sections.slice(6, 9);
    var category4 = sections.slice(9, 12);

    var categories = [
        new Category(sumScore(category1), "COLLECTION", category1),
        new Category(sumScore(category2), "SHARING", category2),
        new Category(sumScore(category3), "CONTROL", category3),
        new Category(sumScore(category4), "SECURITY", category4)
    ]

    var cScore = calculateScore(categories, 4.0);
    
    var domainValue = null;
    if(typeof labelHash.domain !== 'undefined') {
        domainValue = covertDomain(labelHash.domain)
    }

    var labelObject = new LabelObject(cScore, domainValue, categories);
    var labelRender = new LabelTag(labelObject).getTag;

    return {
        labelRender: labelRender, 
        labelObject: labelObject
    };
}

export  {
    HashToLabelState, 
    FormStateToHash
}