import Rating from "./Rating"

const RatingConfig = {
    // collection
    collection_0_a_yes: new Rating(2.0, "Collects sensitive data"),
    collection_0_b_yes: new Rating(1.0, "Collects personal data"),
    collection_0_b_no: new Rating(0.0, "Collects anonymous data"),
    
    collection_1_a_yes: new Rating(2.0, "Data used for functionality"),
    collection_1_b_yes: new Rating(1.0, "Data Used for contomation"),
    collection_1_b_no: new Rating(0.0, "Data used for profiling"),
    
    collection_2_a_yes: new Rating(2.0, "Data stored indefinitely"),
    collection_2_b_yes: new Rating(1.0, "Data stored for a limited time"),
    collection_2_b_no: new Rating(0.0, "Data not stored"),
    // sharing
    sharing_0_a_yes: new Rating(2.0, "Sharing of user data"),
    sharing_0_b_yes: new Rating(1.0, "Sharing of anonymous user data"),
    sharing_0_b_no: new Rating(0.0, "No sharing of user data"),
    
    sharing_1_a_yes: new Rating(2.0, "Sale of user data"),
    sharing_1_b_yes: new Rating(1.0, "Sale of anonymous user data"),
    sharing_1_b_no: new Rating(0.0, "No sale of user data"),
    
    sharing_2_a_yes: new Rating(2.0, "Disclosure to foreign law enforcement"),
    sharing_2_b_yes: new Rating(1.0, "Disclosure to local law enforcement"),
    sharing_2_b_no: new Rating(0.0, "Legally required disclosure to local law enforcement"),
   
   // control
    control_0_a_yes: new Rating(2.0, "No opt-out"),
    control_0_b_yes: new Rating(1.0, "Opt-out"),
    control_0_b_no: new Rating(0.0, "Opt-in"),
    
    control_1_a_yes: new Rating(2.0, "Personal data cannot be removed"),
    control_1_b_yes: new Rating(1.0, "Personal data hidden upon request"),
    control_1_b_no: new Rating(0.0, "Personal data deleted upon request"),
    
    control_2_a_yes: new Rating(2.0, "All data can me ammended"),
    control_2_b_yes: new Rating(1.0, "Some data can be amended"),
    control_2_b_no: new Rating(0.0, "Data cannot be amended"),
    
    // security
    security_0_a_yes: new Rating(2.0, "Industry standard security"),
    security_0_b_yes: new Rating(1.0, "Basic security"),
    security_0_b_no: new Rating(0.0, "Industry standard security"),
    
    security_1_a_yes: new Rating(2.0, "No anomymisation"),
    security_1_b_yes: new Rating(1.0, "Pseudonymisation"),
    security_1_b_no: new Rating(0.0, "Anonymisation"),
    
    security_2_a_yes: new Rating(2.0, "Not legally accountable"),
    security_2_b_yes: new Rating(1.0, "Legally binding privacy policy"),
    security_2_b_no: new Rating(0.0, "Legally accountable"),
}


export { RatingConfig }