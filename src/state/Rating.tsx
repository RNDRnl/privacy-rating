
export class RatingLabel {
    score: Number
    text: String
    ranked: Boolean
    constructor(_score: Number, _text: String, _ranked: Boolean) {
        this.score = _score;
        this.text = _text;
        this.ranked = _ranked;
    }
}

export class RatingRecommendation {
    text: String
    constructor(_text: String) {
        this.text = _text;
    }
}

export class Exception {
    label: String
    rating: Rating
    constructor(_label: String, _rating: Rating) {
        this.label = _label
        this.rating = _rating
    }
}

export default class Rating {
    rate: String
    label: String
    exceptions?: Exception[] = new Array()
    prefilled?: Boolean

    makePrefilled = () => {
        this.prefilled = true
        return this
    }
    constructor(_label: String, _rate: String, _exceptions?: Exception[]) {
        this.rate = _rate;
        this.label = _label;
        this.exceptions = _exceptions;
    }
}

export class NameRule {
    handle: String
    value: String
    
    constructor(_handle: String, _value: String) {
        this.handle = _handle;
        this.value = _value;
    }
    
}
