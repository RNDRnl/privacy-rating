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
                new Question( "Does the service provider collect  data consisting of racial or ethnic origin, political opinions, religious or philosophical beliefs, or trade union membership, genetic data, biometric data, data concerning health or data concerning a natural person's sex life or sexual orientation from its users? (GDPR Art. 9)",
                    [
                        new Answer( "Sharing_0_a", "sharing", "YES"),
                        new Answer( "Sharing_0_a", "sharing", "NO")
                    ]
                ),
                new Question( "Does the service collect information relating to an identified or identifiable natural person from its users? (GDPR Art. 4)",
                    [
                        new Answer( "Sharing_0_b", "sharing", "YES"),
                        new Answer( "Sharing_0_b", "sharing", "NO")
                    ]
                )
            ]
        ),
        new Section( "Sharing_1",
            [
                new Question( "Does the service provider automatically process user data to evaluate personal aspects relating to a natural person, in particular to analyse or predict aspects concerning the data subject's performance at work, economic situation, health, personal preferences or interests, reliability or behaviour, location or movements, where it produces legal effects concerning him or her or similarly significantly affects him or her (GDPR Recital 71).",
                    [
                        new Answer( "Sharing_1_a", "sharing", "YES"),
                        new Answer( "Sharing_1_a", "sharing", "NO")
                    ]
                ),
                new Question( "Is personal data used to display personalized content?",
                    [
                        new Answer( "Sharing_1_b", "sharing", "YES"),
                        new Answer( "Sharing_1_b", "sharing", "NO")
                    ]
                )
            ]
        ),
        new Section( "Sharing_2",
            [
                new Question( "Is user data deleted after a pre-determined amount of time?",
                    [
                        new Answer( "Sharing_2_a", "xxx", "YES"),
                        new Answer( "Sharing_2_a", "sharing", "NO")
                    ]
                ),
                new Question( "Is user data deleted after completing of each session?",
                    [
                        new Answer( "Sharing_2_b", "xxx", "YES"),
                        new Answer( "Sharing_2_b", "xxx", "NO")
                    ]
                )
            ]
        ),
    ]
)
    
]);

export default FormConfig;