
// configure the validation rules

import Rating from "./Rating";

// expression
export class Expression {
    handle: String;
    constants: Constant[] = new Array();
    constructor(_handle: String, _constants: Array<Constant>) {
        this.handle = _handle;
        this.constants = _constants;
    }
}

// constant
export class Constant {
    constant: Rating;
    consequence: Consequence[] = new Array();
    constructor(_constant: Rating, _consequence: Array<Consequence>) {
        this.constant = _constant;
        this.consequence = _consequence;
    }
}

// consequence
export class Consequence {
    handle: String;
    rating: Rating;
    constructor(_handle: String, _rating: Rating) {
        this.handle = _handle;
        this.rating = _rating;
    }
}

export class ValidateConfig {
    expressions: Expression[] = new Array();
    
    constructor(_expressions: Array<Expression>) {
        this.expressions = _expressions;
    }
}

var validateConfig = new ValidateConfig(
    [
        new Expression('collection_0_b', [
            new Constant(new Rating( "No", "A"), [
                new Consequence('collection_1_a', new Rating("No", null)),
                new Consequence('collection_1_b', new Rating("No", "A")),

                new Consequence('sharing_0_a', new Rating("No", null)),
                new Consequence('sharing_1_a', new Rating("No", null)),
                
                new Consequence('control_0_a', new Rating( "Yes", "A")),
                new Consequence('control_1_a', new Rating( "Yes", "A")),
                new Consequence('control_2_a', new Rating( "Yes", "A")),
                
                new Consequence('security_1_a', new Rating( "Yes", "A")),                
            ]),
        ]),
        new Expression('collection_2_a', [
            new Constant(new Rating( "Yes", "A"), [
                new Consequence('control_1_a', new Rating( "Yes", "A")),
                new Consequence('control_2_a', new Rating( "Yes", "A"))                   
            ]),
        ]),
    ]
);