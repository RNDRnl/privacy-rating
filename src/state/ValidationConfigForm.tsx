import exp = require("constants");
import Rating from "./Rating";

export class Expression {
    handle: String;
    constants: Constant[] = new Array();
    constructor(_handle: String, _constants: Array<Constant>) {
        this.handle = _handle;
        this.constants = _constants;
    }
}

export class Constant {
    value: Rating;
    consequences: Consequence[] = new Array();
    constructor(_value: Rating, _consequences: Array<Consequence>) {
        this.value = _value;
        this.consequences = _consequences;
    }
}

export class Consequence {
    handle: String;
    rating: Rating = null;
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
                new Consequence('collection_1_a', new Rating("No", null).makePrefilled()),
                new Consequence('collection_1_b', new Rating("No", "A").makePrefilled()),
                new Consequence('collection_2_a', new Rating("Yes", "A").makePrefilled()),
                new Consequence('sharing_0_a', new Rating("No", null).makePrefilled()),
                new Consequence('sharing_1_a', new Rating("No", null).makePrefilled()),
                new Consequence('control_0_a', new Rating("Yes", "A").makePrefilled()),
                new Consequence('control_1_a', new Rating("Yes", "A").makePrefilled()),
                new Consequence('control_2_a', new Rating("Yes", "A").makePrefilled()),
                new Consequence('security_1_a', new Rating("Yes", "A").makePrefilled()),                
            ])
        ]),
        new Expression('collection_2_a', [
            new Constant(new Rating( "Yes", "A"), [
                new Consequence('control_1_a', new Rating( "Yes", "A").makePrefilled())                
            ])
        ]),
    ]
);


export { validateConfig }