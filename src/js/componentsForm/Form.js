import React from 'react';
import {Button, Container, Jumbotron} from "react-bootstrap";
import { Wizard, Step, Controls } from "react-decision-tree-flow";

const tree = {
    start: ["question1A"],
    question1A: ["question2A", "question1B", { previous: "start" }],
    question1B: ["question2B", "question2B", { previous: "question1A" }],
    question2A: ["question2B", "question3A" ],
    question2B: ["question3A", "question3A", { previous: "question2B" }],
    question3A: ["question1A"],
    
};



// const labelRating = {
//     rank: 0.8275,
//     label: 'b',
//     domain: 'bol.com',
//     year: 2020,
//     categories: [
//         {
//             rank: 0.66,
//             text: 'Collection',
//             descriptoins: [
//                 { rank: 2, text: 'Collects sensetive data' },
//                 { rank: 0, text: 'Data used for functionality' },
//                 { rank: 0, text: 'Data not stored' }
//             ]
//         },
//         {
//             rank: 1.33,
//             text: 'Sharing',
//             descriptoins: [
//                 { rank: 0, text: 'no sharing of user data' },
//                 { rank: 2, text: 'Sale of user data' },
//                 { rank: 2, text: 'Cooperates with law enforment outside users juristinction' }
//             ]
//         },
//         {
//             rank: 0.66,
//             text: 'Control',
//             descriptoins: [
//                 { rank: 2, text: 'No-opt-out' },
//                 { rank: 0, text: 'Data removed upon request' },
//                 { rank: 0, text: 'Some data can be amended' }
//             ]
//         },
//         {
//             rank: 0.66,
//             text: 'Security',
//             descriptoins: [
//                 { rank: 2, text: 'No-opt-out' },
//                 { rank: 0, text: 'Data removed upon request' },
//                 { rank: 0, text: 'Some data can be amended' }
//             ]
//         }
//     ]
// }

// const ratingModel = {
//     questions: [
//         // START
//         {
//             handle = 'start',
//             question: 'I declare that the answers accurately represent the full extent of storage, processing, and handling of user data',
//             options: [
//                 {
//                     answer: 'OK',
//                     nextHandle: 'collection_1_a',
//                     rank: null
//                 }
//             ]
//         },
//         // COLLECTION 1
//         {
//             handle = 'collection_1_a',
//             question: 'Does the service provider collect  data consisting of racial or ethnic origin, political opinions, religious or philosophical beliefs, or trade union membership, genetic data, biometric data, data concerning health or data concerning a natural person\'s sex life or sexual orientation from its users? (GDPR Art. 9)',
//             options: [
//                 { answer: 'yes', rank: 2, nextHandle: 'collection_2_a', text: 'Collects sensitive data' },
//                 { answer: 'no', rank: null, nextHandle: 'collection_1_b', text: null }
//             ]
//         },
//         {
//             handle = 'collection_1_b',
//             question: 'Does the service collect information relating to an identified or identifiable natural person from its users? (GDPR Art. 4)',
//             options: [
//                 { answer: 'yes', rank: 1, nextHandle: 'collection_2_a', text: 'Collects personal data' },
//                 { answer: 'no', rank: 0, nextHandle: 'collection_2_a', text: 'Collects anonymous data' }
//             ]
//         },
//         // COLLECTION 2
//         {
//             handle = 'collection_2_a',
//             question: 'Does the service provider automatically process user data to evaluate personal aspects relating to a natural person, in particular to analyse or predict aspects concerning the data subject\'s performance at work, economic situation, health, personal preferences or interests, reliability or behaviour, location or movements, where it produces legal effects concerning him or her or similarly significantly affects him or her (GDPR Recital 71).',
//             options: [
//                 { answer: 'yes', rank: 2, nextHandle: 'collection_2_a' },
//                 { answer: 'no', rank: null, nextHandle: 'collection_1_b' }
//             ]
//         }

//     ]
// }

const FormView = () => (
    <Wizard tree={tree} first="start">
        <Container>
                <Container>
                    <Jumbotron>
                    <h1>I declare that the answers accurately represent the full extent of storage, processing, and handling of user data</h1>
                        <Step name="start">
                            <div>
                                <Controls>
                                         
                                    {({ question1A }) => (
                                        <div>
                                            <Button variant="dark" onClick={question1A}>OK</Button>
                                        </div>
                                    )}
                                </Controls>
                                
                            </div>
                        </Step>
                    </Jumbotron>
                    <Step name="question1A">                        
                        <Jumbotron> 
                            
                                <div>
                                    <h1>Does the service provider collect  data consisting of racial or ethnic origin, political opinions, religious or philosophical beliefs, or trade union membership, genetic data, biometric data, data concerning health or data concerning a natural person's sex life or sexual orientation from its users? (GDPR Art. 9)</h1>
                                    <Controls>
                                        {({ question2A, question1B }) => (
                                            <div>
                                                <Button variant="dark" onClick={question2A}>YES</Button>
                                                <Button variant="dark" onClick={question1B}>NO</Button>
                                            </div>
                                        )}
                                    </Controls>
                                </div>
                        
                        </Jumbotron>
                    </Step>

                </Container>
        </Container>

    </Wizard>
);


export default FormView;