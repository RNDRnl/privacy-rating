import {RatingLabel} from "./Rating"

const RatingConfig = {
    // collection
    collection_0_L: new RatingLabel(-1.0,"Collects sensitive data", false), 
    collection_0_R: new RatingLabel(0.0,"Collects personal data", false), 
    collection_0_P: new RatingLabel(1.0,"Only collects anonymous data", false),
    
    collection_1_L: new RatingLabel(-1.0,"Data used for profiling", true),  
    collection_1_R: new RatingLabel(0.0,"Data used for customization", true),
    collection_1_P: new RatingLabel(1.0,"Data used for functionality", true),
    
    collection_2_L: new RatingLabel(-1.0,"Data stored indefinitely", true),
    collection_2_R: new RatingLabel(0.0,"Data stored for a limited time", true),
    collection_2_P: new RatingLabel(1.0,"Data not stored", true), 
    
    // sharing
    sharing_0_L: new RatingLabel(-1.0,"Sharing of user data", true), 
    sharing_0_R: new RatingLabel(0.0,"Sharing of anonymous user data", true),
    sharing_0_P: new RatingLabel(1.0,"No sharing of user data", true),
    
    sharing_1_L: new RatingLabel(-1.0,"Sale of user data", true), 
    sharing_1_R: new RatingLabel(0.0,"Sale of anonymous user data", true),
    sharing_1_P: new RatingLabel(1.0,"No sale of user data", true),
    
    sharing_2_L: new RatingLabel(-1.0,"Disclosure to foreign law enforcement", true), 
    sharing_2_R: new RatingLabel(0.0,"Disclosure to local law enforcement", true),
    sharing_2_P: new RatingLabel(1.0,"Statutory disclosure to local law enforcement", true), 
   
    // control
    control_0_L: new RatingLabel(-1.0,"Cannot opt-out of ##dataTypeNaming## data collection", true),
    control_0_R: new RatingLabel(0.0,"Can opt-out of ##dataTypeNaming## data collection", true),
    control_0_P: new RatingLabel(1.0,"Must opt-in for collection of ##dataTypeNaming## data", true),
    
    control_1_L: new RatingLabel(-1.0,"##dataTypeNaming## data cannot be removed", true),  
    control_1_R: new RatingLabel(0.0,"##dataTypeNaming## data hidden upon request", true),
    control_1_P: new RatingLabel(1.0,"##dataTypeNaming## data removed upon request", true),
    
    control_2_L: new RatingLabel(-1.0,"##dataTypeNaming## data cannot be corrected", true),
    control_2_R: new RatingLabel(0.0,"Some ##dataTypeNaming## data can be corrected", true),
    control_2_P: new RatingLabel(1.0,"All ##dataTypeNaming## data can be corrected", true),  
    
    // security
    security_0_L: new RatingLabel(-1.0,"No security certification or best practice", true),
    security_0_R: new RatingLabel(0.0,"Follows security best practices", true),
    security_0_P: new RatingLabel(1.0,"Certified security", true),  
    
    security_1_L: new RatingLabel(-1.0,"No anonymization", true), 
    security_1_R: new RatingLabel(0.0,"Partial anonymization", true),
    security_1_P: new RatingLabel(1.0,"Anonymization", true),
    
    security_2_L: new RatingLabel(-1.0,"Not legally accountable", true),
    security_2_R: new RatingLabel(0.0,"Legally binding privacy policy", true),
    security_2_P: new RatingLabel(1.0,"Legally accountable", true),  
}

export { RatingConfig }