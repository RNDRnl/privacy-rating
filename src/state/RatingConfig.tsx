import {RatingLabel} from "./Rating"

const RatingConfig = {
    // collection
    collection_0_C: new RatingLabel(2.0,"Collects sensitive data"), 
    collection_0_B: new RatingLabel(1.0,"Collects personal data"), 
    collection_0_A: new RatingLabel(0.0,"Collects anonymous data"),
    
    collection_1_C: new RatingLabel(2.0,"Data used for profiling"),  
    collection_1_B: new RatingLabel(1.0,"Data used for contomation"),
    collection_1_A: new RatingLabel(0.0,"Data used for functionality"),
    
    collection_2_C: new RatingLabel(2.0,"Data stored indefinitely"),
    collection_2_B: new RatingLabel(1.0,"Data stored for a limited time"),
    collection_2_A: new RatingLabel(0.0,"Data not stored"), 
    
    // sharing
    sharing_0_C: new RatingLabel(2.0,"Sharing of user data"), 
    sharing_0_B: new RatingLabel(1.0,"Sharing of anonymous user data"),
    sharing_0_A: new RatingLabel(0.0,"No sharing of user data"),
    
    sharing_1_C: new RatingLabel(2.0,"Sale of user data"), 
    sharing_1_B: new RatingLabel(1.0,"Sale of anonymous user data"),
    sharing_1_A: new RatingLabel(0.0,"No sale of user data"),
    
    sharing_2_C: new RatingLabel(2.0,"Disclosure to foreign law enforcement"), 
    sharing_2_B: new RatingLabel(1.0,"Disclosure to local law enforcement"),
    sharing_2_A: new RatingLabel(0.0,"Legally required disclosure to local law enforcement"), 
   
    // control
    control_0_C: new RatingLabel(2.0,"No opt-out"),
    control_0_B: new RatingLabel(1.0,"Opt-out"),
    control_0_A: new RatingLabel(0.0,"Opt-in"),
    
    control_1_C: new RatingLabel(2.0,"Data cannot be removed"),  
    control_1_B: new RatingLabel(1.0,"Data hidden upon request"),
    control_1_A: new RatingLabel(0.0,"Data removed upon request"),
    
    control_2_C: new RatingLabel(2.0,"Data cannot be amended"),
    control_2_B: new RatingLabel(1.0,"Some data can be amended"),
    control_2_A: new RatingLabel(0.0,"All data can be ammended"),  
    
    // security
    security_0_C: new RatingLabel(2.0,"Poor security"),
    security_0_B: new RatingLabel(1.0,"Basic security"),
    security_0_A: new RatingLabel(0.0,"Industry standard security"),  
    
    security_1_C: new RatingLabel(2.0,"No anomymisation"), 
    security_1_B: new RatingLabel(1.0,"Partly anomymisation"),
    security_1_A: new RatingLabel(0.0,"Anonymisation"),
    
    security_2_C: new RatingLabel(2.0,"Not legally accountable"),
    security_2_B: new RatingLabel(1.0,"Legally binding privacy policy"),
    security_2_A: new RatingLabel(0.0,"Legally accountable"),  
}

export { RatingConfig }