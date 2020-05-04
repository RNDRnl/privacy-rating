import * as React from "react";
import Form, { Category, Section, Question, Prompt, Answer} from "./FormClasses"
import Rating from "../../state/Rating";

var FormConfig = new Form([

    new Category( "Instruction", "loaded", ["declare"],
        [ new Section( "start_0",
                [
                    new Question( "Please answer the following questions about how the online service handles data collected from users of their website.\nWhen multiple answers apply, base your answer on \n1. The default use case and settings \n2. The worse‐case scenario", 
                        [ 
                            new Answer( "declare", "domain", 
                                new Rating("OK", null)
                            )
                        ]
                    )
                ]
            ),
        ]
    ), 

    new Category( "Domain", "declare", ["domainSubmit"],
        [ new Section( "domain_0",
                [ 
                    new Prompt( "domain", "Please fill in a valid domain name",
                        [ 
                            new Answer( "domainSubmit", "collection", 
                                new Rating("Show domain", "show")
                            ),
                            new Answer( "domainSubmit", "collection", 
                                new Rating("Hide domain", "hide")
                            )
                        ]
                    ),
                ]
            ),
        ]
    ),
    
    new Category( "Collection", "declare", ["collection_2_a", "collection_2_b"],
        [ new Section( "collection_0",
                [ 
                    new Question( "Does the service collect sensitive personal data from its users?",
                        [
                            new Answer( "collection_0_a", "collection", 
                                new Rating( "Yes", "C")
                            ),
                            new Answer( "collection_0_a", "collection",
                                new Rating( "No", null)
                            )
                        ],
                        "According to Article 9 of the GDPR", 
                        "Sensitive personal data is information about racial or ethnic origin, political opinions, religious or philosophical beliefs, or trade union membership, genetic data, biometric data, data concerning health or data concerning a natural person's sex life or sexual orientation."
                    ),
                    new Question( "Does the service collect personal data from its users?",
                        [
                            new Answer( "collection_0_b", "collection", 
                                new Rating( "Yes", "B")
                            ),
                            new Answer( "collection_0_b", "collection", 
                                new Rating( "No", "A")
                            )
                        ],
                        "According to Article 4 of the GDPR", 
                        "Personal data is information related or relating to an identified or identifiable natural person. This includes: name and surname, home address, email address, identification card number, location data, and Internet Protocol (IP) address."
                    )
                ]
            ),
            new Section( "collection_1",
                [
                    new Question( "Does the service automatically perform profiling based on user data?",
                        [
                            new Answer( "collection_1_a", "collection", 
                                new Rating( "Yes", "C")
                            ),
                            new Answer( "collection_1_a", "collection", 
                                new Rating( "No", null)
                            )
                        ],
                        "According to Recital 71 of the GDRP", 
                        "profiling is the automatic processing of user data to evaluate personal aspects relating to a natural person, in particular to analyse or predict aspects concerning the data subject’s performance at work, economic situation, health, personal preferences or interests, reliability or behaviour, location or movements, where it produces legal effects concerning him or her or similarly significantly affects him or her. A common example are targeting, profiling, or tracking cookies and cookies from advertisers."
                    ),
                    new Question( "Does the service provide personalized content based on user data?",
                        [
                            new Answer( "collection_1_b", "collection", 
                                new Rating( "Yes", "B")
                            ),
                            new Answer( "collection_1_b", "collection", 
                                new Rating( "No", "A")
                            )
                        ],
                        "", 
                        "Personalized content is content which is generated based on the preferences, data, or behavior of the user. Personalization is not essential for the operation of the website. A common example are the personalized news feed, as well as analytics, persistent, and session cookies."
                    )
                ]
            ),
            new Section( "collection_2",
                [
                    new Question( "Is user data deleted after a pre‐ determined amount of time?",
                        [
                            new Answer( "collection_2_a", "collection", 
                                new Rating( "Yes", null)
                            ),
                            new Answer( "collection_2_a", "sharing", 
                                new Rating( "No", "C")
                            )
                        ]
                    ),
                    new Question( "Is user data deleted after completion of each session?",
                        [
                            new Answer( "collection_2_b", "sharing", 
                                new Rating( "Yes", "A")
                            ),
                            new Answer( "collection_2_b", "sharing",
                                new Rating( "No", "B")
                            )
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
                        new Answer( "sharing_0_a", "sharing", 
                            new Rating( "Yes", "C")
                        ),
                        new Answer( "sharing_0_a", "sharing", 
                            new Rating( "No", null)
                        )
                    ],
                    "According to Article 4 of the GDPR",
                    "Personal data is information related or relating to an identified or identifiable natural person. This includes: name and surname, home address, email address, identification card number, location data, and Internet Protocol (IP) address."
                ),
                new Question( "Does any anonymous user data leave the ownership of the service provider?",
                    [
                        new Answer( "sharing_0_b", "sharing", 
                            new Rating( "Yes", "B")
                        ),
                        new Answer( "sharing_0_b", "sharing", 
                            new Rating( "No", "A")
                        ),
                    ],
                    "", 
                    "Anonymous data is information which is NOT related and/or relating to an identified or identifiable natural person from its users. Sale includes exchanging data for money, compensation, or assets."
                )
            ]
        ),

        
            new Section( "sharing_1",
                [
                    new Question( "Is any personal user data ever sold by the service provider?",
                        [
                            new Answer( "sharing_1_a", "sharing", 
                                new Rating( "Yes", "C")
                            ),
                            new Answer( "sharing_1_a", "sharing", 
                                new Rating( "No", null)
                            )
                        ],
                        "According to Article 4 of the GDPR",
                        "Personal data is information related or relating to an identified or identifiable natural person. This includes: name and surname, home address, email address, identification card number, location data, and Internet Protocol (IP) address."
                    ),
                    new Question( "Is any anonymized user data ever sold by the service provider?",
                        [
                            new Answer( "sharing_1_b", "sharing", 
                                new Rating( "Yes", "B")
                            ),
                            new Answer( "sharing_1_b", "sharing", 
                                new Rating( "No", "A")
                            )
                        ],
                        "",
                        "Anonymous data is information which is NOT related and/or relating to an identified or identifiable natural person from its users. Sale includes exchanging data for money, compensation, or assets."
                    )
                ]
            ),
            new Section( "sharing_2",
                [
                    new Question( "Is the service provider subject to disclosure requests from government agencies outside the jurisdiction of the end‐user?",
                        [
                            new Answer( "sharing_2_a", "control", 
                                new Rating( "Yes", "C")
                            ),
                            new Answer( "sharing_2_a", "sharing", 
                                new Rating( "No", null)
                            )
                        ],
                        "",
                        "If user data ever leaves the jurisdiction of the user, is this data ever subject to disclosure requests by law enforcement agencies or governments other than those in the same jurisdiction as the user?"
                    ),
                    new Question( "Does the service provider ONLY disclose user data to government agencies when legally required?",
                        [
                            new Answer( "sharing_2_b", "control", 
                                new Rating( "Yes", "A")
                            ),
                            new Answer( "sharing_2_b", "control", 
                                new Rating( "No", "B")
                            )
                        ],
                        "",
                        "Does the service provider require law enforcement agencies to comply, at a minimum, with the legal process provided by the law handing over user data?"
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
                        new Answer( "control_0_a", "control", 
                            new Rating( "Yes", null)
                        ),
                        new Answer( "control_0_a", "control", 
                            new Rating( "No", "C")
                        )
                    ],
                    "",
                    "Can the user choose to opt‐out of data collection as stated in the previous answers?"
                ),
                new Question( "Must users opt-in before data is collected?",
                    [
                        new Answer( "control_0_b", "control", 
                            new Rating( "Yes", "A")
                        ),
                        new Answer( "control_0_b", "control",
                            new Rating( "No", "B")
                        )
                    ],
                    "",
                    "Does the user need to explicitly opt‐in before data is collected as stated in the previous answers?"
                )
            ]
        ),
            new Section( "control_1",
                [
                    new Question( "Can user data related to a user be completely removed upon request?",
                        [
                            new Answer( "control_1_a", "control", 
                                new Rating( "Yes", "A")
                            ),
                            new Answer( "control_1_a", "control", 
                                new Rating( "No", null)
                            )
                        ],
                        "",
                        "Complete removal implies deletion of all data elements relating to the user from all data stores, as opposed to making the data unavailable by flagging it or hiding it."
                    ),
                    new Question( "Can user data related to a user be hidden upon request",
                        [
                            new Answer( "control_1_b", "control", 
                                new Rating( "Yes", "B")
                            ),
                            new Answer( "control_1_b", "control", 
                                new Rating( "No", "C")
                            )
                        ],
                        "",
                        "Hiding data means flagging data fields or otherwise making them unavailable to regular users."
                    )
                ]
            ),
            new Section( "control_2",
                [
                    new Question( "Can users amend all data collected from them?",
                        [
                            new Answer( "control_2_a", "security", 
                                new Rating( "Yes", "A")
                            ),
                            new Answer( "control_2_a", "control", 
                            new Rating( "No", null)
                            )
                        ],
                        "",
                        "Is the user able to change, update, or amend ALL personal or sensitive data the provider may have gathered or generated based on their preferences or activity?"
                    ),
                    new Question( "Can users amend any of the data collected from them?",
                        [
                            new Answer( "control_2_b", "security", 
                                new Rating( "Yes", "B")
                            ),
                            new Answer( "control_2_b", "security", 
                                new Rating( "No", "C")
                            )
                        ],
                        "",
                        "Is the user able to PARTIALLY change, update, or amend personal or sensitive data the provider may have gathered or generated based on their preferences or activity?"
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
                        new Answer( "security_0_a", "security", 
                            new Rating( "Yes", "A")
                        ),
                        new Answer( "security_0_a", "security", 
                            new Rating( "No", null)
                        )
                    ],
                    "",
                    "The service provider must be able to provide a valid certification by a recognized auditor."
                ),
                new Question( "Was the service developed in compliance with the OWASP (Mobile) Top 10 standard and tested according to the OWASP Mobile/Web security Testing Guide or equivalent.",
                    [
                        new Answer( "security_0_b", "security", 
                            new Rating( "Yes", "B")
                        ),
                        new Answer( "security_0_b", "security", 
                            new Rating( "No", "C")
                        )
                    ],
                    "",
                    "The service provider must be able to demonstrate they have taken all of the steps indicated in a relevant industry standard or best practice."
                )
            ]
        ),
        new Section( "security_1",
            [
                new Question( "Is user data anoymizied?",
                    [
                        new Answer( "security_1_a", "security", 
                            new Rating( "Yes", "A")
                        ),
                        new Answer( "security_1_a", "security", 
                            new Rating( "No", null)
                        )
                    ],
                    "",
                    "Anonymized data is data from which all information related and/or relating to an identified or identifiable natural person has been completely removed so that it can never be traced back to a single person."
                ),
                new Question( "Is user data pseudonymized?",
                    [
                        new Answer( "security_1_b", "security", 
                            new Rating( "Yes", "B")
                        ),
                        new Answer( "security_1_b", "security", 
                            new Rating( "No", "C")
                        )
                    ],
                    "",
                    "Pseudonymized data is data from which all information related relating to an identified or identifiable natural person has been replaced by one or more artificial identifiers ‐ or pseudonyms ‐ such that it could eventually be traced back to individual users with the help of additional information."
                )
            ]
        ),
        new Section( "security_2",
            [
                new Question( "Is the service provider legally accountable for privacy violations?",
                    [
                        new Answer( "security_2_a", "security", 
                            new Rating( "Yes", "A")
                        ),
                        new Answer( "security_2_a", "security", 
                            new Rating( "No", null)
                        )
                    ],
                    "",
                    "Is the service provider subject to fines or payment of compensations in case of ANY unauthorized disclosure, loss, or corruption of personal or sensitive user data, regardless of what is stated in the privacy policy?"
                ),
                new Question( "Is the privacy policy legally binding?",
                    [
                        new Answer( "security_2_b", "security", 
                            new Rating( "Yes", "B")
                        ),
                        new Answer( "security_2_b", "security", 
                            new Rating( "No", "C")
                        )
                    ],
                    "",
                    "Does the privacy policy have contractual value, in that misrepresentation of the rights and procedures outlined in the privacy policy is punishable by law?"
                )
            ]
        ),
    ]
)
    
]);

export default FormConfig;