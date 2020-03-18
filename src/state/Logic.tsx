// import { Label, Category, Section } from "../js/componentsLabel/LabelClasses";
import { RatingConfig } from "./RatingConfig"

class Label {
    score: 0.0;
    rank: 'a' | 'b' | 'c' | 'd' | 'e' | 'f' | 'g';
    sections: Category[] = new Array();
    domain: String;
    year: 2020;
    constructor() {
    }
}

class Category {
    score: Number;
    categoryName: String;
    sections: Section[] = new Array();
    constructor(_score: Number, _categoryName: String, _sections:Section[]) {
        this.categoryName = _categoryName;
        this.score = _score;
        this.sections = _sections;
    }
}

class Section {
    score: Number;
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
                
    if(answerA == "YES") {
        return RatingConfig[`${questionA}_yes`]
    } else if(answerA == "NO" && answerB == "YES") {
        return RatingConfig[`${questionB}_yes`]
    } else if(answerA == "NO" && answerB == "NO") {
        return RatingConfig[`${questionB}_no`]
    }
    
    return null;
}

const calculateScoreFromSections = (sections:any) => {

    var runningScore = 0.0
    var isInvalid = false

    sections.forEach((section) => {
        if(section == null) {
            isInvalid = true
        } else {
            runningScore += section.score
        }
    });

    if(isInvalid) {
        return null
    } else {
        return (runningScore / 3.0);
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
        console.log("invalid hash!");
        return null;
    } else {
        return hash;
    }
}

const calculateProcess = (catagories:any) => {

    var variant = "primary"
    var value = 20;
    var text = "collection";
    
    if(catagories[0].sections[2]!=null) {
        var variant = "primary"
        var value = 40;
        var text = "sharing";
    }
    if(catagories[1].sections[2]!=null) {
        var variant = "primary"
        var value = 60;
        var text = "control";
    }
    if(catagories[2].sections[2]!=null) {
        var variant = "primary"
        var value = 80;
        var text = "security";
    }
    if(catagories[3].sections[2]!=null) {
        var variant = "success"
        var value = 100;
        var text = "label completed";
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

        var score = calculateScoreFromSections(sections)
        catagories.push( new Category(score, cat, sections) );
    });

    console.log(catagories);
    var hashValue = categoriesToHash(catagories);
    var calculatedProgress = calculateProcess(catagories);

    if(hashValue != null) {
        return { 'value': `${hashValue}?domain=${FormState.domain}`, 'progress': calculatedProgress };
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

const HashToLabelState = (labelHash:String) => {

    // conversion
    console.log("the hash i got", labelHash)

    var characters = labelHash.split("")
    characters.forEach(function(char, index) {

        var targetPath = `${indexToCategory(index)}_${indexToSection(index)}_${charToFinalAnswer(char)}`
        var result = RatingConfig[targetPath];
        console.log(`${index} ${char} ${targetPath}`, result);
    })

    return {
        name: "this is my label"
    }
}

module.exports = { FormStateToHash, HashToLabelState  }

