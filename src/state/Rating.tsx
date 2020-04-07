
export class RatingLabel {
    score: Number
    text: String
    constructor(_score: Number, _text: String) {
        this.score = _score;
        this.text = _text;
    }
}

export default class Rating {
    rate: String
    label: String
    constructor(_label: String, _rate: String) {
        this.rate = _rate;
        this.label = _label;
    }
}