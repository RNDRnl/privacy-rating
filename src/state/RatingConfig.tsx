import {RatingLabel} from "./Rating"

const RatingConfig = {
    // collection
    collection_0_L: new RatingLabel(2.0,"Collects sensitive data"), 
    collection_0_R: new RatingLabel(1.0,"Collects personal data"), 
    collection_0_P: new RatingLabel(0.0,"Only collects anonymous data"),
    
    collection_1_L: new RatingLabel(2.0,"Data used for profiling"),  
    collection_1_R: new RatingLabel(1.0,"Data used for customization"),
    collection_1_P: new RatingLabel(0.0,"Data used for functionality"),
    
    collection_2_L: new RatingLabel(2.0,"Data stored indefinitely"),
    collection_2_R: new RatingLabel(1.0,"Data stored for a limited time"),
    collection_2_P: new RatingLabel(0.0,"Data not stored"), 
    
    // sharing
    sharing_0_L: new RatingLabel(2.0,"Sharing of user data"), 
    sharing_0_R: new RatingLabel(1.0,"Sharing of anonymous user data"),
    sharing_0_P: new RatingLabel(0.0,"No sharing of user data"),
    
    sharing_1_L: new RatingLabel(2.0,"Sale of user data"), 
    sharing_1_R: new RatingLabel(1.0,"Sale of anonymous user data"),
    sharing_1_P: new RatingLabel(0.0,"No sale of user data"),
    
    sharing_2_L: new RatingLabel(2.0,"Disclosure to foreign law enforcement"), 
    sharing_2_R: new RatingLabel(1.0,"Disclosure to local law enforcement"),
    sharing_2_P: new RatingLabel(0.0,"Legally required disclosure to local law enforcement"), 
   
    // control
    control_0_L: new RatingLabel(2.0,"Cannot opt-out of personal data collection"),
    control_0_R: new RatingLabel(1.0,"Can opt-out of personal data collection"),
    control_0_P: new RatingLabel(0.0,"Must opt-in for collection of personal data"),
    
    control_1_L: new RatingLabel(2.0,"Personal data cannot be removed"),  
    control_1_R: new RatingLabel(1.0,"Personal data hidden upon request"),
    control_1_P: new RatingLabel(0.0,"Personal data removed upon request"),
    
    control_2_L: new RatingLabel(2.0,"personal data cannot be corrected"),
    control_2_R: new RatingLabel(1.0,"Some personal data can be corrected"),
    control_2_P: new RatingLabel(0.0,"All personal data can be corrected"),  
    
    // security
    security_0_L: new RatingLabel(2.0,"No security certification or beste practire"),
    security_0_R: new RatingLabel(1.0,"Follows security best practices"),
    security_0_P: new RatingLabel(0.0,"Certified security"),  
    
    security_1_L: new RatingLabel(2.0,"No anonymization"), 
    security_1_R: new RatingLabel(1.0,"Partial anonymization"),
    security_1_P: new RatingLabel(0.0,"Anonymization"),
    
    security_2_L: new RatingLabel(2.0,"Not legally accountable"),
    security_2_R: new RatingLabel(1.0,"Legally binding privacy policy"),
    security_2_P: new RatingLabel(0.0,"Legally accountable"),  
}

export { RatingConfig }