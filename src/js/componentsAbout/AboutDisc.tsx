class Bullet {
    score: String
    scored: Boolean
    title: String
    desc: String
    constructor( score: String,scored: Boolean,  title: String, desc: String) {
        this.score = score       
        this.scored = scored
        this.title = title
        this.desc = desc
    }
}

class ToolTipDescription {
    title: String
    bullets: Bullet[]
    constructor(title: String, bullets: Bullet[]) {
        this.title = title;
        this.bullets = bullets;
    }
}

const AboutDisc = {

    // Collection
    collection_01: new ToolTipDescription(
        "Type of user data collected",
        [
            new Bullet("not scored", false, "Collects sensitive data", "Sensitive personal data is information about racial or ethnic origin, political opinions, religious or philosophical beliefs, or trade union membership, genetic data, biometric data, data concerning health or data concerning a natural person's sex life or sexual orientation."),
            new Bullet("not scored", false, "Collects personal data", "Personal data is information related or relating to an identified or identifiable natural person. This includes name and surname, home address, email address, identification card number, location data. An IP address is considered personal data if you have the means to trace it back to an individual."),
            new Bullet("not scored", false, "Only collects anonymous data", "Anonymous data is information which is NOT related and/or relating to an identified or identifiable natural person.")
        ]
        ),
    collection_02: new ToolTipDescription(
         "Purpose of user data collection (skipped and +1 point if only anonymous data is collected)",
         [
            new Bullet("-1", true, "Data used for profiling", "Profiling is the automatic processing of user data to evaluate personal aspects relating to a natural person, in particular to analyse or predict aspects concerning the data subject's performance at work, economic situation, health, personal preferences or interests, reliability or behaviour, location or movements, where it produces legal effects concerning him or her or similarly significantly affects him or her. Common examples are targeting, profiling, or tracking cookies and cookies from advertisers."),
            new Bullet("0", true, "Data used for personalization", "Personalized content is content which is generated based on the preferences, data, or behavior of the user. Personalization is not essential for the operation of the website. Common examples are the personalized news feed, as well as analytics, persistent, and session cookies."),
            new Bullet("+1", true, "Data used for functionality", "User data is used to provide basic functionality.")
        ]
    ),
    collection_03: new ToolTipDescription(
        "Retention of user data (skipped and +1 point if only anonymous data is collected)",
        [
            new Bullet("-1", true, "Data stored indefinitely", ""),
            new Bullet("0", true, "Data stored for a limited time", "User data is deleted after a pre-determined amount of time. This does not include technical data required for the service to function"),
            new Bullet("+1", true, "Data not stored", "User data is deleted after completion of each session. This does not include technical data required for the service to function")
       ]
   ),

    // Sharing

    sharing_01: new ToolTipDescription(
        "Type of user data shared",
        [
            new Bullet("-1", true, "Sharing of user data", "Personal user data leaves the ownership of the service provider."),
            new Bullet("0", true, "Sharing of anonymous user data", "Only anonymous suer data leaves the ownership of the service provider."),
            new Bullet("+1", true, "No sharing of user data", "No user data leaves the ownership of the service provider.")
        ]
    ),
    sharing_02: new ToolTipDescription(
        "Sale of user data",
        [
            new Bullet("-1", true, "Sale of user data", "The service exchange personal user data for money, compensation, or assets."),
            new Bullet("0", true, "Sale of anonymous user data", "The service exchange anonymous user data for money, compensation, or assets."),
            new Bullet("+1", true, "No sale of user data", "No user data is exchanged for money, compensation, or assets.")
        ]
    ),
    sharing_03: new ToolTipDescription(
        "Disclosure of user data to authorities",
        [
            new Bullet("-1", true, "Disclosure to foreign law enforcement", "User data leaves the jurisdiction of the user and is subject to disclosure requests by law enforcement agencies or governments other than those in the same jurisdiction as the user. Note: The EU is considered a single jurisdiction because it falls under the auspices of the GDPR."),
            new Bullet("0", true, "Disclosure to local law enforcement", "User data may disclose user data to law enforcement agencies within the user's jurisdiction."),
            new Bullet("+1", true, "Legally required disclosure to local law enforcement", "User data does not leave the jurisdiction of the user and the service provider requires law enforcement agencies to comply, at a minimum, with the legal process provided by the law handing over user data.")
        ]
    ),

    // Control
    control_01: new ToolTipDescription(
        "Level of control over data collection (skipped and +1 point if only anonymous data is collected)",
        [
            new Bullet("-1", true, "Must opt-in for collection of personal data", ""),
            new Bullet("0", true, "Can opt-out of personal data collection", ""),
            new Bullet("+1", true, "Cannot opt-out of personal data collection", "")
        ]
    ),
    control_02: new ToolTipDescription(
        "Right to be forgotten (skipped and +1 point if only anonymous data is collected or if data is not stored)",
        [
            new Bullet("-1", true, "Personal data cannot be removed", ""),
            new Bullet("0", true, "Personal data hidden upon request", ""),
            new Bullet("+1", true, "Personal data removed upon request", "")
        ]
    ),
    control_03: new ToolTipDescription(
        "Correctness of user data (skipped and +1 point if only anonymous data is collected or if data is not stored)",
        [
            new Bullet("-1", true, "Personal data cannot be corrected", ""),
            new Bullet("0", true, "Some personal data can be corrected", ""),
            new Bullet("+1", true, "All personal can be corrected", "")
        ]
    ),

    // Security
    security_01: new ToolTipDescription(
        "Level of security",
        [
            new Bullet("-1", true, "No security certification or best practice", "The service provider is not able to demonstrate that they have taken all of the steps indicated in a relevant industry standard or best practice."),
            new Bullet("0", true, "Follows security best practices", "The service was developed and tested in compliance with recognized and relevant standards, such as the OWASP Top 10 standard and the OWASP Security Testing Guide."),
            new Bullet("+1", true, "Certified security", "The service provider is certified to be compliant with a relevant information security standard, such as ISO 27001 or NIST 800-53.")
        ]
    ),
    security_02: new ToolTipDescription(
        "Anonymization of user data (skipped and +1 point if only anonymous data is collected)",
        [
            new Bullet("-1", true, "No anonymization", "User data is not anonymized."),
            new Bullet("0", true, "Partial anonymization", "User data is pseudonymized. Pseudonymized data is data from which all information related relating to an identified or identifiable natural person has been replaced by one or more artificial identifiers - or pseudonyms - such that it could eventually be traced back to individual users with the help of additional information."),
            new Bullet("+1", true, "Anonymization", "User data is anonymized. Anonymized data is data from which all information related and/or relating to an identified or identifiable natural person has been completely removed so that it can never be traced back to a single person.")
        ]
    ),
    security_03: new ToolTipDescription(
        "Accountability of the service provider",
        [
            new Bullet("-1", true, "Not legally accountable", " The service provider is not legally accountable for privacy violations."),
            new Bullet("0", true, "Legally binding privacy policy", "The privacy policy has contractual value, in that misrepresentation of the rights and procedures outlined in the privacy policy is punishable by law."),
            new Bullet("+1", true, "Legally accountable", "The service provider is subject to fines or payment of compensations in case of ANY unauthorized disclosure, loss, or corruption of personal or sensitive user data, regardless of what is stated in the privacy policy.")
        ]
    )


}

export { AboutDisc }