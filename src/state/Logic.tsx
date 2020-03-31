import LabelTag from "../js/componentsLabel/LabelClasses";

import { RatingConfig } from "./RatingConfig"

export class LabelObject {
    score: any;
    rank: 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G';
    categories: Category[] = new Array();
    domain: String;
    year: 2020;
    calculateRank() {
        this.rank = scoreToRank(this.score);
        console.log(this.score, this.rank);
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
        // console.log(this.score, this.rank);
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
    if(value == 0.0) {
        return 'A'
    } else if (value < 1.0) {
        return 'B'
    } else if (value < 2.0) {
        return 'C'
    } else if (value < 3.0) {
        return 'D'
    } else if (value < 4.0) {
        return 'E'
    } else if (value < 5.0) {        
        return 'F'
    } else if (value == 6.0) {
        return 'G'
    }
}

const scoreToRank = (score:any) => {
    var remap = mapRange(score, 0.0, 2.0, 0.0, 6.0);
    return mapToRank(remap);
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
                
    if(answerA == "Yes") {
        return RatingConfig[`${questionA}_yes`]
    } else if(answerA == "No" && answerB == "Yes") {
        return RatingConfig[`${questionB}_yes`]
    } else if(answerA == "No" && answerB == "No") {
        return RatingConfig[`${questionB}_no`]
    }
    
    return null;
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
        return Math.round( ((runningScore / devide) * 1000)/1000 );
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
                if(section.score == 2.0) {
                    hash += "C"
                } else if(section.score == 1.0) {
                    hash += "B"
                } else if(section.score == 0.0) {
                    hash += "A"
                }
            }
        });
    });
    if(isInvalid) {
        // console.log("invalid hash!");
        return null;
    } else {
        return hash;
    }
}

const calculateProcess = (catagories:any, FormState:any) => {

    var variant = "secondary";
    var value = 0;
    var text = "";

    if(FormState.domainSubmit!=null) {
        var variant = "secondary";
        var value = 20;
        var text = "20%";
    }


    if(FormState.declare!=null) {
        var variant = "secondary";
        var value = 30;
        var text = "30%";
    }
    
    if(catagories[0].sections[2]!=null) {
        var variant = "secondary";
        var value = 40;
        var text = "40%";
    }

    if(catagories[0].sections[2]!=null) {
        var variant = "secondary";
        var value = 40;
        var text = "40%";
    }


    if(catagories[1].sections[2]!=null) {
        var variant = "secondary";
        var value = 60;
        var text = "60%";
    }
    if(catagories[2].sections[2]!=null) {
        var variant = "secondary";
        var value = 80;
        var text = "80%";
    }
    if(catagories[3].sections[2]!=null) {
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

    // console.log(catagories);
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

const charToFinalAnswer = (char:String) => {
    switch(char) {
        case 'C':
            return "a_yes"
        case 'B':
            return "b_yes"
        case "A":
            return "b_no"
    }
}

const covertDomain = (domain:any) => {
    return domain.replace("**", ".")
}

const HashToLabelState = (labelHash:any) => {

    // conversion
    console.log("the hash i got", labelHash.hash)

    var characters = labelHash.hash.split("")
    var sections = [];
    characters.forEach(function(char, index) {

        var targetPath = `${indexToCategory(index)}_${indexToSection(index)}_${charToFinalAnswer(char)}`
        var resultRating = RatingConfig[targetPath];
        var section = new Section(resultRating.score, resultRating.text);
        sections.push(section);
    })

    var category1 = sections.slice(0, 3);
    var category2 = sections.slice(3, 6);
    var category3 = sections.slice(6, 9);
    var category4 = sections.slice(9, 12);

    var categories = [
        new Category(calculateScore(category1, 3.0), "COLLECTION", category1),
        new Category(calculateScore(category2, 3.0), "SHARING", category2),
        new Category(calculateScore(category3, 3.0), "CONTROL", category3),
        new Category(calculateScore(category4, 3.0), "SECURITY", category4)
    ]
    
    var cScore = calculateScore(categories, 4.0);
    var labelObject = new LabelObject(cScore, covertDomain(labelHash.domain), categories);
    //console.log(labelObject);
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
// export FormStateToHash
// module.exports = { FormStateToHash, HashToLabelState }