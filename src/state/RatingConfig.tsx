
import Rating from "./Rating"

const RatingConfig = {
    // collection
    collection_0_a_yes: new Rating(2.0, "this is a test"),
    collection_0_a_no: null, // not valid
    collection_0_b_yes: new Rating(1.0, "this is a test"),
    collection_0_b_no: new Rating(0.0, "this is a test"),
    
    collection_1_a_yes: new Rating(2.0, "this is a test"),
    collection_1_a_no: null, // not valid
    collection_1_b_yes: new Rating(1.0, "this is a test"),
    collection_1_b_no: new Rating(0.0, "this is a test"),

    collection_2_a_yes: new Rating(2.0, "this is a test"),
    collection_2_a_no: null, // not valid
    collection_2_b_yes: new Rating(1.0, "this is a test"),
    collection_2_b_no: new Rating(0.0, "this is a test"),

    // sharing
    sharing_0_a_yes: new Rating(2.0, "this is a test"),
    sharing_0_a_no: null, // not valid
    sharing_0_b_yes: new Rating(1.0, "this is a test"),
    sharing_0_b_no: new Rating(0.0, "this is a test"),
    
    sharing_1_a_yes: new Rating(2.0, "this is a test"),
    sharing_1_a_no: null, // not valid
    sharing_1_b_yes: new Rating(1.0, "this is a test"),
    sharing_1_b_no: new Rating(0.0, "this is a test"),

    sharing_2_a_yes: new Rating(2.0, "this is a test"),
    sharing_2_a_no: null, // not valid
    sharing_2_b_yes: new Rating(1.0, "this is a test"),
    sharing_2_b_no: new Rating(0.0, "this is a test"),

    // control
    control_0_a_yes: new Rating(2.0, "this is a test"),
    control_0_a_no: null, // not valid
    control_0_b_yes: new Rating(1.0, "this is a test"),
    control_0_b_no: new Rating(0.0, "this is a test"),
    
    control_1_a_yes: new Rating(2.0, "this is a test"),
    control_1_a_no: null, // not valid
    control_1_b_yes: new Rating(1.0, "this is a test"),
    control_1_b_no: new Rating(0.0, "this is a test"),

    control_2_a_yes: new Rating(2.0, "this is a test"),
    control_2_a_no: null, // not valid
    control_2_b_yes: new Rating(1.0, "this is a test"),
    control_2_b_no: new Rating(0.0, "this is a test"),

    // security
    security_0_a_yes: new Rating(2.0, "this is a test"),
    security_0_a_no: null, // not valid
    security_0_b_yes: new Rating(1.0, "this is a test"),
    security_0_b_no: new Rating(0.0, "this is a test"),
    
    security_1_a_yes: new Rating(2.0, "this is a test"),
    security_1_a_no: null, // not valid
    security_1_b_yes: new Rating(1.0, "this is a test"),
    security_1_b_no: new Rating(0.0, "this is a test"),

    security_2_a_yes: new Rating(2.0, "this is a test"),
    security_2_a_no: null, // not valid
    security_2_b_yes: new Rating(1.0, "this is a test"),
    security_2_b_no: new Rating(0.0, "this is a test"),
}

export { RatingConfig }