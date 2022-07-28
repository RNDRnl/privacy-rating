import {RatingRecommendation} from "./Rating"

const RecommendationsConfig = {
    // collection
    collection_0_L: new RatingRecommendation("Although collecting sensitive data doesn't directly impact your Privacy Rating, it does introduce additional requirements needed to obtain a good rating."), 
    collection_0_R: new RatingRecommendation("Although collecting personal data doesn't directly impact your Privacy Rating, it does introduce additional requirements needed to obtain a good rating."), 
    collection_0_P: new RatingRecommendation(""),
    
    collection_1_L: new RatingRecommendation("Automated profiling has negative implications on user privacy because it allows service providers and to derive additional, potentially sensitive information about users without their knowledge.  Therefore, to get a better rating, do not use any targeting, profiling, tracking cookies, or cookies from advertisers."),  
    collection_1_R: new RatingRecommendation("Personalized content generated based on the preferences, data, or behavior of the user requires obtaining large amounts of personal information and can lead to filter bubbles. Refrain from personalization that is not essential for the operation of the website. To get a good rating, avoid using analytics, persistent or sessions cookies."),
    collection_1_P: new RatingRecommendation(""),
    
    collection_2_L: new RatingRecommendation("When handling personal or sensitive user data it is highly recommended (and sometimes mandatory) to remove data that is no longer necessary. Therefore, to get a better rating, have a data retention policy that specifies a pre-determined amount of time after which personal/sensitive user data is removed."),
    collection_2_R: new RatingRecommendation("Having a data retention policy is important. However, to get a good rating, delete all personal/sensitive user data after the completion of each session."),
    collection_2_P: new RatingRecommendation(""), 
    
    // sharing
    sharing_0_L: new RatingRecommendation("Letting personal data leave the ownership of the service provider opens the door to privacy breaches. To get a better rating, only share anonymous data or no data at all."), 
    sharing_0_R: new RatingRecommendation("To get a good rating, do not share any user data (even anonymized user data) with third parties."),
    sharing_0_P: new RatingRecommendation(""),
    
    sharing_1_L: new RatingRecommendation("Exchanging data for money, compensation, or assets is considered a significant privacy breach as it means that sale of user data is part of the service provider's business model. To get a better rating, only sell anonymized user data."), 
    sharing_1_R: new RatingRecommendation("Anonymous user data may still unintentionally reveal personal information. To get a good rating, do not sell any user data (not even anonymized user data)."),
    sharing_1_P: new RatingRecommendation(""),
    
    sharing_2_L: new RatingRecommendation("If ever leaves the jurisdiction of the user, it may be subject to disclosure requests from foreign governments. To get a better rating, ensure only store and process user data within the jurisdiction of the user it pertains to."), 
    sharing_2_R: new RatingRecommendation("In order to ensure strong privacy, a service provider should not disclose user data without requiring compliance with the relevant legal process. To get a good rating, only disclose user data to government agencies when disclosure is legally mandatory."),
    sharing_2_P: new RatingRecommendation(""), 
   
    // control
    control_0_L: new RatingRecommendation("Users should not be forced to share personal data. To get a better rating, allow users to opt-out of personal data collection. "),
    control_0_R: new RatingRecommendation("Personal data should not be collected from users before they have given their consent. To get a good rating, ask users to explicitly opt-in before collecting personal data."),
    control_0_P: new RatingRecommendation(""),
    
    control_1_L: new RatingRecommendation("Users should be able to decide to make all personal information private. To get better rating, allow users to hide personal data."),  
    control_1_R: new RatingRecommendation("Users should be to revoke their consent for processing personal data. To get a good rating, allow user to request the complete removal of personal data pertaining to them ( as opposed to hiding it)."),
    control_1_P: new RatingRecommendation(""),
    
    control_2_L: new RatingRecommendation("In case personal data collected from a user is incorrect or becomes obsolete, the user should be able to correct it. To get a better rating, allow users to correct personal data gathered or generated based on their preferences or activity."),
    control_2_R: new RatingRecommendation("In case personal data collected from a user is incorrect or becomes obsolete, the user should be able to correct it. To get a good rating, allow users to correct all personal data gathered or generated based on their preferences or activity."),
    control_2_P: new RatingRecommendation(""),  
    
    // security
    security_0_L: new RatingRecommendation("To guarantee the protection of user data against cyber-attacks, the service provider must be able to demonstrate they have taken all of the steps indicated in a relevant industry standard or best practice. To get a better rating, ensure that the service has been develop and tested in in compliance with recognized and relevant standards, such as the OWASP Top 10 standard and the OWASP Security Testing Guide."),
    security_0_R: new RatingRecommendation("To guarantee that proper data protection policies are in place, the service provider must be able to provide a valid information security certification by a recognized auditor. To get a good rating, the organization should be able to demonstrate compliance with a relevant information security standard, such as ISO 27001 or NIST 800-53."),
    security_0_P: new RatingRecommendation(""),  
    
    security_1_L: new RatingRecommendation("In order to ensure the privacy of users, it is important not to store personal data unless strictly necessary. To get a better rating, replace all information related relating to an identified or identifiable natural person with identifiers - or pseudonyms."), 
    security_1_R: new RatingRecommendation("Pseudonymized personal data can sometimes be traced back to the individual it pertains to. To get a good rating, ensure that data all personal user data is fully anonymized in that it can never be traced back to a single person."),
    security_1_P: new RatingRecommendation(""),
    
    security_2_L: new RatingRecommendation("If the privacy policy is not legally binding, then it does little to protect the user against privacy violations. To get a better rating, ensure that the privacy has contractual value, in that misrepresentation of the rights and procedures outlined in the privacy policy is punishable by law."),
    security_2_R: new RatingRecommendation("In order to guarantee that the user's rights are protected, the service provider must be legally accountable for privacy violations. To get a good rating, the service provider should be subject to fines or payment of compensations in case of ANY unauthorized disclosure, loss, or corruption of personal or sensitive user data, regardless of what is stated in the privacy policy."),
    security_2_P: new RatingRecommendation(""),  
}

export { RecommendationsConfig }