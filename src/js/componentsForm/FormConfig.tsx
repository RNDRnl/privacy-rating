import * as React from "react";
import Form, { Category, Section, Question, Prompt, Answer} from "./FormClasses"

var FormConfig = new Form([
    new Category( "Domain", "loaded", ["domainSubmit"],
        [ new Section( "domain_0",
                [ 
                    new Prompt( "domain", "Please fill in a valid domain name",
                        [ 
                            new Answer( "domainSubmit", "declaration", "Submit")
                        ]
                    ),
                ]
            ),
        ]
    ),
    new Category( "Declaration", "domainSubmit", ["declare"],
        [ new Section( "start_0",
                [
                    new Question( "I declare that the answers accurately represent the full extent of  storage, processing, and handling of user data.",
                        [ 
                            new Answer( "declare", "collection", "OK")
                        ]
                    )
                ]
            ),
        ]
    ), 
    new Category( "Collection", "declare", ["collection_2_a", "collection_2_b"],
        [ new Section( "collection_0", 
                [ 
                    new Question( "Does the service provider collect  data consisting of racial or ethnic origin, political opinions, religious or philosophical beliefs, or trade union membership, genetic data, biometric data, data concerning health or data concerning a natural person's sex life or sexual orientation from its users? (GDPR Art. 9)",
                        [
                            new Answer( "collection_0_a", "collection", "YES"),
                            new Answer( "collection_0_a", "collection", "NO")
                        ]
                    ),
                    new Question( "Does the service collect information relating to an identified or identifiable natural person from its users? (GDPR Art. 4)",
                        [
                            new Answer( "collection_0_b", "collection", "YES"),
                            new Answer( "collection_0_b", "collection", "NO")
                        ]
                    )
                ]
            ),
            new Section( "collection_1",
                [
                    new Question( "Does the service provider automatically process user data to evaluate personal aspects relating to a natural person, in particular to analyse or predict aspects concerning the data subject's performance at work, economic situation, health, personal preferences or interests, reliability or behaviour, location or movements, where it produces legal effects concerning him or her or similarly significantly affects him or her (GDPR Recital 71).",
                        [
                            new Answer( "collection_1_a", "collection", "YES"),
                            new Answer( "collection_1_a", "collection", "NO")
                        ]
                    ),
                    new Question( "Is personal data used to display personalized content?",
                        [
                            new Answer( "collection_1_b", "collection", "YES"),
                            new Answer( "collection_1_b", "collection", "NO")
                        ]
                    )
                ]
            ),
            new Section( "collection_2",
                [
                    new Question( "Is user data deleted after a pre-determined amount of time?",
                        [
                            new Answer( "collection_2_a", "sharing", "YES"),
                            new Answer( "collection_2_a", "collection", "NO")
                        ]
                    ),
                    new Question( "Is user data deleted after completing of each session?",
                        [
                            new Answer( "collection_2_b", "sharing", "YES"),
                            new Answer( "collection_2_b", "sharing", "NO")
                        ]
                    )
                ]
            ),
        ]
    ),

    new Category( "Sharing", "declare", ["sharing_2_a", "sharing_2_b"],
        [ new Section( "sharing_0",
            [
                new Question( "Does any personal user data ever leave the ownership of the service provider?",
                    [
                        new Answer( "sharing_0_a", "sharing", "YES"),
                        new Answer( "sharing_0_a", "sharing", "NO")
                    ]
                ),
                new Question( "Does any anonymous user data leave the ownership of the service provicder?",
                    [
                        new Answer( "sharing_0_b", "sharing", "YES"),
                        new Answer( "sharing_0_b", "sharing", "NO")
                    ]
                )
            ]
        ),
            new Section( "sharing_1",
                [
                    new Question( "Is any personal user data ever sold by the service provider?",
                        [
                            new Answer( "sharing_1_a", "sharing", "YES"),
                            new Answer( "sharing_1_a", "sharing", "NO")
                        ]
                    ),
                    new Question( "Is any anonymized user data ever sold by the service provider?",
                        [
                            new Answer( "sharing_1_b", "sharing", "YES"),
                            new Answer( "sharing_1_b", "sharing", "NO")
                        ]
                    )
                ]
            ),
            new Section( "sharing_2",
                [
                    new Question( "Will the service provider comply with law enforcement requests to disclose user data when not legally required or from outside the user's juristiction?",
                        [
                            new Answer( "sharing_2_a", "control", "YES"),
                            new Answer( "sharing_2_a", "sharing", "NO")
                        ]
                    ),
                    new Question( "Will the service provider ever disclose user data when requested by law enforcement outside the user's jurisdiction?",
                        [
                            new Answer( "sharing_2_b", "control", "YES"),
                            new Answer( "sharing_2_b", "control", "NO")
                        ]
                    )
                ]
            ),
        ]
    ),

    new Category( "Control", "declare", ["control_2_a", "control_2_b"],
        [ new Section( "control_0",
            [
                new Question( "Can users opt-out of data collection?",
                    [
                        new Answer( "control_0_a", "control", "YES"),
                        new Answer( "control_0_a", "control", "NO")
                    ]
                ),
                new Question( "Must users opt-in before data is collected?",
                    [
                        new Answer( "control_0_b", "control", "YES"),
                        new Answer( "control_0_b", "control", "NO")
                    ]
                )
            ]
        ),
            new Section( "control_1",
                [
                    new Question( "Can all data related to a user  be completely removed upon request?",
                        [
                            new Answer( "control_1_a", "control", "YES"),
                            new Answer( "control_1_a", "control", "NO")
                        ]
                    ),
                    new Question( "Can all data related to a user be hidden upon request",
                        [
                            new Answer( "control_1_b", "control", "YES"),
                            new Answer( "control_1_b", "control", "NO")
                        ]
                    )
                ]
            ),
            new Section( "control_2",
                [
                    new Question( "Can users amend all data collected from them?",
                        [
                            new Answer( "control_2_a", "security", "YES"),
                            new Answer( "control_2_a", "control", "NO")
                        ]
                    ),
                    new Question( "Can users amend any of the data collected from them?",
                        [
                            new Answer( "control_2_b", "security", "YES"),
                            new Answer( "control_2_b", "security", "NO")
                        ]
                    )
                ]
            ),
        ]
    ),
    new Category( "Security", "declare", ["security_2_a", "security_2_b"],
    [ new Section( "security_0",
            [ 
                new Question( "Is the service provider certified to be compliant with the latest version of either ISO 27001 or NIST 800-53?",
                    [
                        new Answer( "security_0_a", "security", "YES"),
                        new Answer( "security_0_a", "security", "NO")
                    ]
                ),
                new Question( "Was the service developed in compliance with the OWASP (Mobile) Top 10 standard and tested according to the OWASP Mobile/Web security Testing Guide or equivalent.",
                    [
                        new Answer( "security_0_b", "security", "YES"),
                        new Answer( "security_0_b", "security", "NO")
                    ]
                )
            ]
        ),
        new Section( "security_1",
            [
                new Question( "Are all identifiable markers in user data completely removed so that it can never be traced back to a single person?",
                    [
                        new Answer( "security_1_a", "security", "YES"),
                        new Answer( "security_1_a", "security", "NO")
                    ]
                ),
                new Question( "Are all identifiable markers in user data replaced by one or more artificial identifiers - or pseudonyms - such that it could be traced back to individual users with the help of additional information?",
                    [
                        new Answer( "security_1_b", "security", "YES"),
                        new Answer( "security_1_b", "security", "NO")
                    ]
                )
            ]
        ),
        new Section( "security_2",
            [
                new Question( "Is the service provider legally accountable for privacy violations?",
                    [
                        new Answer( "security_2_a", "security", "YES"),
                        new Answer( "security_2_a", "security", "NO")
                    ]
                ),
                new Question( "Is the privacy policy legally binding?",
                    [
                        new Answer( "security_2_b", "security", "YES"),
                        new Answer( "security_2_b", "security", "NO")
                    ]
                )
            ]
        ),
    ]
)
    
]);

export default FormConfig;