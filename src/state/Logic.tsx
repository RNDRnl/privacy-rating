import LabelTag from "../js/componentsLabel/LabelClasses";

import { RatingConfig } from "./RatingConfig"
import { RecommendationsConfig } from "./RecommendationsConfig"
import { AboutDisc } from "../js/componentsAbout/AboutDisc";

import FormConfig from "../js/componentsForm/FormConfig"
import { Answer } from "../js/componentsForm/FormClasses";
import Rating from "./Rating";
import RecommendationPanel from "../js/componentsRecommendations/RecommendationsClasses";
import ScoreDrawer from "../js/componentsScoreDrawer/ScoreDrawer";
import ReportPDF from "../js/componentsReportPDF/ReportPDF";
import { validateConfigLabel } from "./ValidationConfigLabel";

export class LabelObject {
    score: any;
    rank: 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G';
    categories: Category[] = new Array();
    domain: String;
    year: Number = new Date().getFullYear();
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
        this.rank = scoreToCatagoryRank(this.score);
    }
    constructor(_score: any, _categoryName: String, _sections:Section[]) {
        this.categoryName = _categoryName;
        this.score = _score;
        this.sections = _sections;
        this.calculateRank();
    }
}

const mapToRank = (value:any) => {
    if(value >= 8.0 && value <= 11.0) {
        return 'A'
    } else if (value >= 5.0 && value <= 7.0) {
        return 'B'
    } else if (value >= 2.0 && value <= 4.0) {
        return 'C'
    } else if (value >= -1.0 && value <= 1.0) {
        return 'D'
    } else if (value >= -4.0 && value <= -2.0) {
        return 'E'
    } else if (value >= -7.0 && value <= -5.0) {        
        return 'F'
    } else if (value >= -11.0 && value <= -8.0) {
        return 'G'
    }
}

const mapToCatagoryRank = (value:any) => {
    if(value == 3) {
        return 'A'
    } else if (value == 2) {
        return 'B'
    } else if (value == 1) {
        return 'C'
    } else if (value == 0) {
        return 'D'
    } else if (value == -1) {
        return 'E'
    } else if (value == -2) {        
        return 'F'
    } else if (value == -3) {
        return 'G'
    }
}

const scoreToRank = (score:any) => {
    return mapToRank(score);
}

const scoreToCatagoryRank = (score:any) => {
    return mapToCatagoryRank(score);
}

export class Section {
    score: any;
    text: String;
    ranked: Boolean;
    recommendation: String;
    resultDesc: String;
    hiddenDesc: String;
    hidden: Boolean;
    constructor(_score: Number, _text: String, _ranked: Boolean, _recommendation: String, _resultDesc: String, _hiddenDesc: String, _hidden: Boolean) {
        this.score = _score;
        this.text = _text;
        this.ranked = _ranked;
        this.recommendation = _recommendation;
        this.resultDesc = _resultDesc;
        this.hiddenDesc = _hiddenDesc;
        this.hidden = _hidden;
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
            if(element.ranked) { 
                runningScore += element.score
            } else {
                runningScore += 1 // non ranked is 1
            }
        }
    });

    if(isInvalid) {
        return null
    } else {
        return runningScore;
    }
}

const calculateScore = (elements:any) => {

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
        return (runningScore); // no devide needed
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

        var score = calculateScore(sections)
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

const replaceDataType = (text:any, dataType:any) => {
    return capatalize(text.replace("##dataTypeNaming##", `${dataType}`))
}

const getDataType = (firstHashChar:any) => {
    switch(firstHashChar) {
        case "L":
            return "sensitive" // C
        case "R":
            return "personal" // B
        case "P":
            return "anonymous" // A
    }
}

const charToIndex = (firstHashChar:any) => {
    switch(firstHashChar) {
        case "L":
            return 0 // C
        case "R":
            return 1 // B
        case "P":
            return 2 // A
    }
}

const capatalize = (text:any) => {
    return text.charAt(0).toUpperCase() + text.slice(1);
}

const HashToLabelState = (labelHash:any) => {
    var characters = labelHash.hash.split("")
    var sections = [];
    var dataType = getDataType(characters[0]);

    // list items to be hidden
    var hiddenItems = [];
    characters.forEach((char, index) => {
        validateConfigLabel.LabelConsitions.forEach((condition) => {
            if(condition.section_handle == `${indexToCategory(index)}_${indexToSection(index)}` && condition.section_value == `${char}`) {
                condition.consequences.forEach((consequence) => {   
                    hiddenItems.push(consequence.section_handle)
                })
            }
        });
    });
    
    characters.forEach(function(char, index) {
        var targetPath = `${indexToCategory(index)}_${indexToSection(index)}_${(char)}`
        var resultRating = RatingConfig[targetPath];
        
        // lookup if needs to be hidden based on validation form
        var resultRecommendation = RecommendationsConfig[targetPath];
        
        var discHandle = `${indexToCategory(index)}_${indexToSection(index)}`
        var resultDescBullets = AboutDisc[discHandle].bullets
        var bullet = resultDescBullets[charToIndex(char)]
        var resultDesc = bullet.desc
        var hiddenDesc = bullet.hiddenDesc
        var hidden = hiddenItems.includes(targetPath);
        
        var section = new Section(resultRating.score, replaceDataType(resultRating.text, dataType), resultRating.ranked, resultRecommendation.text, resultDesc, hiddenDesc, hidden);
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

    var cScore = calculateScore(categories);
    
    var domainValue = null;
    if(typeof labelHash.domain !== 'undefined') {
        domainValue = covertDomain(labelHash.domain)
    }

    var labelObject = new LabelObject(cScore, domainValue, categories);
    var labelRender = new LabelTag(labelObject).getTag;
    var labelRecommenendations = new RecommendationPanel(labelObject).getTag;
    var labelScoreDrawer = new ScoreDrawer(labelObject, labelHash.plain).getTag;
    var reportPdf = new ReportPDF(labelObject, labelHash).getTag;
    
    return {
        labelRender: labelRender, 
        labelObject: labelObject,
        labelRecommenendations: labelRecommenendations,
        labelScoreDrawer: labelScoreDrawer,
        reportPdf: reportPdf
    };
}

export  {
    HashToLabelState, 
    FormStateToHash
}