import React, { Component } from "react";
import styles from './About.scss';
import {Button, Container, Row, Jumbotron, Image, Col, Card, CardDeck, Popover, OverlayTrigger} from "react-bootstrap";
import Header from "../Header";
import Footer from "../Footer";
import { AboutDisc } from "./AboutDisc";
import { Link } from "react-router-dom";
import * as Scroll from 'react-scroll';
import Label from '../componentsLabel/Label';
import { LabelProvider } from '../../state/LabelContext'
import App from '../componentsLabel/App';
import { HashToLabelState } from '../../state/Logic.tsx';

const initialFormState = {
}

// const Overlay = () => {   
//     const popover = (
//         <Popover id="popover-basic">
//             <div className="hi">hi</div>
//         </Popover>
//    );
//    return popover;
// };

const About = () => {


    var scroll = Scroll.animateScroll;
    scroll.scrollTo(0, {duration:250});

    var tempLabel = HashToLabelState({hash:"PPPPPRPRRLRR", plain: true});
    const ScoreDrawer = tempLabel.labelScoreDrawer;
    
    function OverLayTriggerView(content) {

        var helpTitle = content.content[0];
        var disc = content.content[1];
        var placement = content.content[2];

        return(
            <OverlayTrigger             
                trigger={"click"} 
                placement={placement}
                rootClose
                overlay={
                    <Popover className={styles.popOver}  id={`popover-positioned-bottom`}>
                        <Popover.Title as="h3">{disc.title}</Popover.Title>
                        <Popover.Content>
                                { disc.bullets.map((item, index) => {
                                        return (
                                        <div className={styles.bullet}key={index}>
                                            { item.scored  
                                                ? <span className={styles.score} data-score={item.score} >
                                                    {item.score} 
                                                    { item.score == "0"
                                                     ? <span> points</span>
                                                     : <span> point</span>
                                                    }
                                                  </span> 
                                                : <span className={styles.score} data-score={item.score} >{item.score}</span> 
                                            }
                                            <span><b> {item.title}</b></span> 
                                            <span> {item.desc}</span>
                                        </div>)
                                  }) 
                                }
                        </Popover.Content>
                    </Popover>
                }
            >                
                <button className={styles.helpButton} type="button">
                    {helpTitle}
                </button>
            </OverlayTrigger>
        )
    }
    
    return (
        <div  className={styles.holder} >
            <Container>
                <Header/>
                <Row className={styles.backgroundSlider}>
                    <Row>
                    <div className={styles.text}>
                        <div>
                            <h4>What is the privacy rating?</h4>
                            <p>
                                The privacy rating is a simple way to assess the
                                privacy of an online service. It looks at how
                                the service collects and shares user data, as well
                                as on the amount of control users have over
                                their data and the level of security provided to
                                protect user's data.
                            </p>
                            <p>
                                The Privacy Rating is based on extensive
                                research into privacy regulation, standards and
                                guidelines.
                            </p>
                        </div>
                        <div>
                            <h4>How do I use the privacy rating?</h4>
                            <p>
                                Our website walks you through an <a target="_blank" href="/form">interactive
                                questionnaire</a> about different aspects of data
                                handling. Based on your answers, it determines
                                a privacy rating.
                            </p>

                            <p>
                                We also produce a privacy label which
                                summarizes these answers. Owners of websites
                                and apps are encouraged to display the label on
                                their cookie notification, home-screen, or as
                                part of their privacy policy.
                            </p>
                        </div>

                    </div>
                    </Row>
                    
                    <Row>
                        <div className={styles.text}>
                                <div>
                                    <h4 className={styles.h4spaced}>Example of privacy rating label</h4>
                                </div>
                        </div>
                    </Row>
                        
                    <Row className={styles.labelFrame}>
                        <Col>
                        <div className={styles.label}>
                            <App labelId="PPPPPRPRRLRR" domain={"privacyrating**info"} />
                        </div>
                        </Col>

                        <Col className={styles.smallLabels}>
                        <Image className={styles.privacyRatingSmall} src={`${process.env.BASE_PATH}/resources/privacyRatingSmall/SVG/PrivacyRatingA.svg`}/>
                        <Image className={styles.privacyRatingSmall} src={`${process.env.BASE_PATH}/resources/privacyRatingSmall/SVG/PrivacyRatingB.svg`}/>
                        <Image className={styles.privacyRatingSmall} src={`${process.env.BASE_PATH}/resources/privacyRatingSmall/SVG/PrivacyRatingC.svg`}/>
                        <Image className={styles.privacyRatingSmall} src={`${process.env.BASE_PATH}/resources/privacyRatingSmall/SVG/PrivacyRatingD.svg`}/>
                        <Image className={styles.privacyRatingSmall} src={`${process.env.BASE_PATH}/resources/privacyRatingSmall/SVG/PrivacyRatingE.svg`}/>
                        <Image className={styles.privacyRatingSmall} src={`${process.env.BASE_PATH}/resources/privacyRatingSmall/SVG/PrivacyRatingF.svg`}/>
                        <Image className={styles.privacyRatingSmall} src={`${process.env.BASE_PATH}/resources/privacyRatingSmall/SVG/PrivacyRatingG.svg`}/>
                        </Col>
                    </Row>

                    <hr className={styles.hr} />

                    <Row>
                        <div className={styles.text}>
                            <div>
                                <h4>How does it work?</h4>
                                
                                <p>The privacy rating is based on an assessment of 12 different aspects of data handling, spanning four areas: Collection, Sharing, Control and Security. These attributes are scored on a three-point scale: Good (+1 point), Neutral (0 points), or Poor (-1 point).</p>
{/*                                 
                                <p>
                                The system rates 12 different aspects of data
                                handling from good to bad. These are grouped into
                                four main categories: <br/>
                                Together, the attributes determine the privacy class (A-to-G) of the online service.
                                </p> */}
                            </div>
                        </div>
                    </Row>

                    <div className={styles.categoriesContainer}>
                        <div className={styles.categories}>
                            <Image className={styles.icon} src={`${process.env.BASE_PATH}/resources/icons/collection.gif`}/>
                            <h5>COLLECTION</h5>
                            {/* <div className={styles.colouredDots}/>                                 */}
                            <p className={styles.description}>
                                <OverLayTriggerView  content={["What kind of user data is collected?", AboutDisc['collection_0'], "right"]} />
                            </p>
                            {/* <div className={styles.colouredDots}/> */}
                            <p className={styles.description}>
                                <OverLayTriggerView  content={["For which purpose is user data collected?", AboutDisc['collection_1'], "right"]} />
                            </p>
                            {/* <div className={styles.colouredDots}/> */}
                            <p className={styles.description}>
                                <OverLayTriggerView  content={["How long is user data stored?", AboutDisc['collection_2'], "right"]} />                               
                            </p>
                        </div>
                        <div className={styles.categories}>
                            <Image className={styles.icon} src={`${process.env.BASE_PATH}/resources/icons/sharing.gif`}/>
                            <h5>SHARING</h5>
                            {/* <div className={styles.colouredDots}/> */}
                            <p className={styles.description}>                               
                                <OverLayTriggerView  content={["What kind of user data is shared?", AboutDisc['sharing_0'], "left"]} />
                            </p>
                            {/* <div className={styles.colouredDots}/> */}
                            <p className={styles.description}>                                
                                <OverLayTriggerView  content={["Is any user data sold?", AboutDisc['sharing_1'], "left"]} />
                            </p>
                            {/* <div className={styles.colouredDots}/> */}
                            <p className={styles.description}>
                                <OverLayTriggerView  content={[" Is data disclosed to authorities?", AboutDisc['sharing_2'], "left"]} />                               
                            </p>
                        </div>
                    </div>

                   <div className={styles.categoriesContainer}>
                    <div className={styles.categories}>
                            <Image className={styles.icon} src={`${process.env.BASE_PATH}/resources/icons/control.gif`}/>
                            <h5>CONTROL</h5>
                            {/* <div className={styles.colouredDots}/> */}
                            <p className={styles.description}>
                                <OverLayTriggerView  content={["Can the user decide whether to share the data?", AboutDisc['control_0'], "right"]} />                                      
                            </p>
                            {/* <div className={styles.colouredDots}/> */}
                            <p className={styles.description}>
                                <OverLayTriggerView  content={["Can the user request that their data is removed?", AboutDisc['control_1'], "right"]} />                                      
                            </p>
                            {/* <div className={styles.colouredDots}/> */}
                            <p className={styles.description}>
                                <OverLayTriggerView  content={["Can the user amend his/her data?", AboutDisc['control_2'], "right"]} />                                      
                            </p>
                        </div>

                        <div className={styles.categories}>
                            <Image className={styles.icon} src={`${process.env.BASE_PATH}/resources/icons/security.gif`}/>
                            <h5>SECURITY</h5>
                            {/* <div className={styles.colouredDots}/> */}
                            <p className={styles.description}>
                                <OverLayTriggerView  content={["How secure is the service?", AboutDisc['security_0'], "left"]} /> 
                            </p>
                            {/* <div className={styles.colouredDots}/> */}
                            <p className={styles.description}>
                                <OverLayTriggerView  content={["Does the service provider anonymize data?", AboutDisc['security_1'], "left"]} /> 
                            </p>
                            {/* <div className={styles.colouredDots}/> */}
                            <p className={styles.description}>
                                <OverLayTriggerView  content={["Is the service provider liable for breaches?", AboutDisc['security_2'], "left"]} /> 
                            </p>
                        </div>
                    </div>


                    <Row>
                        <div className={styles.text}>
                            <div>
                                <br />

                                <p>The total score determines the privacy class (A-to-G) of the online service:</p>
                            </div>
                        </div>
                    </Row>


                    <div className={styles.scoreDrawContainer}>                   
                       <ScoreDrawer />
                    </div>

                   
                    <hr className={styles.hr} />
                    
                    <Row>
                    
                    <div className={styles.text}>                    
                            <div>
                            <br/>
                                <h4 className={styles}>Downloads</h4>
                            </div>
                    </div>
                    </Row>
                    <Row>
                        <Col>
                            <div className={styles.downloadHandle}>
                                <div>
                                    <div className={styles.pdfButton} variant="dark" href="form">Terms<br/>of use</div>
                                </div>
                                <div>
                                    <p><b>Terms of use</b></p>
                                    <p>
                                        By using this website you agree to our terms of use.
                                    </p>
                                    <p><a href={`${process.env.BASE_PATH}/resources/pdf/Terms_Of_Use.pdf`}>Download</a></p>
                                </div>
                            </div>
                        </Col>
                        <Col>
                            <div className={styles.downloadHandle}>
                                <div>
                                    <div className={styles.pdfButton} variant="dark" href="form">Research <br/>  paper</div>
                                </div>
                                <div>
                                    <p><b>Research paper</b></p>
                                    <p>
                                        Privacy rating is based on extensive research into privacy visualisations.
                                    </p>
                                    <p><a target={'_blank'} href={`https://doi.org/10.1109/TPC.2021.3110617`}>Download article on IEEE</a></p>
                                </div>
                            </div>
                    </Col>
            
                </Row>
                <hr className={styles.hr} />
               
                    
                <Row className={styles.actionsRow}>
                    <div className={styles.actions}>
                        <Link className={styles.button} to="/form">
                            Generate your own label
                        </Link>
                    </div>
                </Row>
                </Row>

            <br />
            <Footer/>
            </Container>
            </div>
    );
    }

export default About;