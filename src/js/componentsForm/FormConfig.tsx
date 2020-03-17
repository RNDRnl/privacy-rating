import * as React from "react";
import Form, { Category, Section, Question, Prompt, Answer} from "./FormClasses"

var FormConfig = new Form([
    new Category( "Domain", "loaded", "domainSubmit",
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
    new Category( "Declaration", "domainSubmit", "declare",
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
    new Category( "Collection", "declare", "collection_2_a",
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

    new Category( "Sharing", "declare", "Sharing_2_a",
        [ new Section( "Sharing_0",
            [
                new Question( "Does any personal user data ever leave the ownership of the service provider?",
                    [
                        new Answer( "Sharing_0_a", "sharing", "YES"),
                        new Answer( "Sharing_0_a", "sharing", "NO")
                    ]
                ),
                new Question( "Does any anonymous user data leave the ownership of the service provicder?",
                    [
                        new Answer( "Sharing_0_b", "sharing", "YES"),
                        new Answer( "Sharing_0_b", "sharing", "NO")
                    ]
                )
            ]
        ),
            new Section( "Sharing_1",
                [
                    new Question( "Is any personal user data ever sold by the service provider?",
                        [
                            new Answer( "Sharing_1_a", "sharing", "YES"),
                            new Answer( "Sharing_1_a", "sharing", "NO")
                        ]
                    ),
                    new Question( "Is any anonymized user data ever sold by the service provider?",
                        [
                            new Answer( "Sharing_1_b", "sharing", "YES"),
                            new Answer( "Sharing_1_b", "sharing", "NO")
                        ]
                    )
                ]
            ),
            new Section( "Sharing_2",
                [
                    new Question( "Will the service provider comply with law enforcement requests to disclose user data when not legally required or from outside the user's juristiction?",
                        [
                            new Answer( "Sharing_2_a", "control", "YES"),
                            new Answer( "Sharing_2_a", "sharing", "NO")
                        ]
                    ),
                    new Question( "Will the service provider ever disclose user data when requested by law enforcement outside the user's jurisdiction?",
                        [
                            new Answer( "Sharing_2_b", "control", "YES"),
                            new Answer( "Sharing_2_b", "control", "NO")
                        ]
                    )
                ]
            ),
        ]
    ),

    new Category( "Control", "declare", "Control_2_a",
        [ new Section( "Control_0",
            [
                new Question( "Can users opt-out of data collection?",
                    [
                        new Answer( "Control_0_a", "control", "YES"),
                        new Answer( "Control_0_a", "control", "NO")
                    ]
                ),
                new Question( "Must users opt-in before data is collected?",
                    [
                        new Answer( "Control_0_b", "control", "YES"),
                        new Answer( "Control_0_b", "control", "NO")
                    ]
                )
            ]
        ),
            new Section( "Control_1",
                [
                    new Question( "Can all data related to a user  be completely removed upon request?",
                        [
                            new Answer( "Control_1_a", "control", "YES"),
                            new Answer( "Control_1_a", "control", "NO")
                        ]
                    ),
                    new Question( "Can all data related to a user be hidden upon request",
                        [
                            new Answer( "Control_1_b", "control", "YES"),
                            new Answer( "Control_1_b", "control", "NO")
                        ]
                    )
                ]
            ),
            new Section( "Control_2",
                [
                    new Question( "Can users amend all data collected from them?",
                        [
                            new Answer( "Control_2_a", "security", "YES"),
                            new Answer( "Control_2_a", "control", "NO")
                        ]
                    ),
                    new Question( "Can users amend any of the data collected from them?",
                        [
                            new Answer( "Control_2_b", "security", "YES"),
                            new Answer( "Control_2_b", "security", "NO")
                        ]
                    )
                ]
            ),
        ]
    ),

    new Category( "Security", "declare", "Security_2_a",
    [ new Section( "Security_0",
            [ 
                new Question( "Is the service provider certified to be compliant with the latest version of either ISO 27001 or NIST 800-53?",
                    [
                        new Answer( "Security_0_a", "security", "YES"),
                        new Answer( "Security", "security", "NO")
                    ]
                ),
                new Question( "Was the service developed in compliance with the OWASP (Mobile) Top 10 standard and tested according to the OWASP Mobile/Web Security Testing Guide or equivalent.",
                    [
                        new Answer( "Securityg_0_b", "security", "YES"),
                        new Answer( "Security", "sharing", "NO")
                    ]
                )
            ]
        ),
        new Section( "Security_1",
            [
                new Question( "Are all identifiable markers in user data completely removed so that it can never be traced back to a single person?",
                    [
                        new Answer( "Security_1_a", "security", "YES"),
                        new Answer( "Security_1_a", "security", "NO")
                    ]
                ),
                new Question( "Are all identifiable markers in user data replaced by one or more artificial identifiers - or pseudonyms - such that it could be traced back to individual users with the help of additional information?",
                    [
                        new Answer( "Security_1_b", "security", "YES"),
                        new Answer( "Security_1_b", "security", "NO")
                    ]
                )
            ]
        ),
        new Section( "Security_2",
            [
                new Question( "Is the service provider legally accountable for privacy violations?",
                    [
                        new Answer( "Security_2_a", "xxx", "YES"),
                        new Answer( "Security_2_a", "security", "NO")
                    ]
                ),
                new Question( "Is the privacy policy legally binding?",
                    [
                        new Answer( "Security_2_b", "xxx", "YES"),
                        new Answer( "Security_2_b", "xxx", "NO")
                    ]
                )
            ]
        ),
    ]
)
    
]);

export default FormConfig;