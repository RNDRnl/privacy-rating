import React, { Component } from "react";
import { Button, Container, Jumbotron, Accordion, Col, Row, Form, Card, Table, ListGroup, ProgressBar } from "react-bootstrap";
import styles from './PrivacyPolicy.scss';
import Header from "../Header";
import Footer from "../Footer";
import * as Scroll from 'react-scroll';

class PageView extends Component {

    constructor() {
        super();
    }

    componentDidMount() {
        var scroll = Scroll.animateScroll;
        scroll.scrollTo(0, { duration: 250 });
    }

    render() {

        return (
            <Container className={styles.formContainer}>
                <Header />
                <Row>
                    <div className={styles.text}>
                        <div>
                            <h3>Privacy Policy</h3>
                            <p>
                                Last updated 04/20/2020
                                </p>
                            <p>
                                We are committed to protecting your personal information and your right to privacy. If you have any questions or concerns about our policy, or our practices with regards to your personal information, please contact us at <a href="&#109;&#97;&#105;&#108;&#116;&#111;&#58;&#100;&#46;&#105;&#111;&#110;&#105;&#116;&#97;&#64;&#117;&#116;&#119;&#101;&#110;&#116;&#101;&#46;&#110;&#108;">&#68;&#97;&#110;&#32;&#73;&#111;&#110;&#105;&#116;&#97;&#32;&#40;&#85;&#110;&#105;&#118;&#101;&#114;&#115;&#105;&#116;&#121;&#32;&#111;&#102;&#32;&#84;&#119;&#101;&#110;&#116;&#101;&#41;</a>.<br />
                                When you contact us for questions or feedback, you trust us with your personal information. We take your privacy very seriously. In this privacy notice, we describe our privacy policy. We seek to explain to you in the clearest way possible what information we collect, how we use it and what rights you have in relation to it. If there are any terms in this privacy policy that you do not agree with, please discontinue use of our and our services.<br />
                                This privacy policy applies to all information collected through our and/or any related services, sales, marketing or events (we refer to them collectively in this privacy policy as the "<b>Sites</b>").<br />
                                <b>Please read this privacy policy carefully as it will help you make informed decisions about sharing your personal information with us.  </b>
                            </p>
                        </div>
                    </div>
                </Row>
                <Row>
                    <div className={styles.text}>
                        <div>
                            <h4>WHAT INFORMATION DO WE COLLECT?</h4>.
                            <h5>Personal information you disclose to us</h5>
                            <p>
                                <em>In short: <i>We only collect personal information you fill into the contact form.  </i></em>
                                We collect personal information that you voluntarily provide to us when using our contact form or otherwise contacting us. <br />
                                The personal information that we collect depends what details you include in your message. The personal information we collect can include the following:
                                <ul>
                                    <li><b>Name and Contact Data.</b> We collect your first and last name, email address, postal address, phone number, and other similar contact data.</li>
                                </ul>
                            </p>
                            <h5> Information automatically collected </h5>
                            <p>
                                <em>In short: <i> Some information – such as IP address and/or browser and device characteristics – is collected automatically when you visit our Sites.  </i></em>
                                We automatically collect certain information when you visit, use or navigate the Sites. This information does not reveal your specific identity (like your name or contact information) but may include device and usage information, such as your IP address, browser and device characteristics, operating system, language preferences, referring URLs, device name, country, location, information about how and when you use our and other technical information. This information is primarily needed to maintain the security and operation of our Site, and for our internal analytics and reporting purposes.
                            </p>
                            <h5> Information collected from other sources </h5>
                            <p>
                                <em> In short: <i> Some information – such as IP address and/or browser and device characteristics – is collected automatically when you visit our Sites.  </i></em>
                            </p>
                        </div>
                    </div>
                </Row>
                <Row>
                    <div className={styles.text}>
                        <div>
                            <h4>WILL YOUR INFORMATION BE SHARED WITH ANYONE?</h4>.
                            <p>
                                <em>In short: <i>We only share information with your consent, to comply with laws, to protect your rights, or to fulfill business obligations.    </i></em>
                                We may process or share data based on the following legal basis:
                                <ul>
                                    <li><b>Consent:</b> We may process your data if you have given us specific consent to use your personal information in a specific purpose. </li>
                                </ul>
                                <ul>
                                    <li><b>Performance of a contract:</b> Where we have entered into a contract with you, we may process your personal information to fulfill the terms of our contract. </li>
                                </ul>
                                <ul>
                                    <li><b>Legal obligations:</b> We may disclose your information where we are legally required to do so in order to comply with applicable law, governmental requests, a judicial proceeding, court order, or legal process, such as in response to a court order or a subpoena (including in response to public authorities to meet national security or law enforcement requirements). </li>
                                </ul>
                                <ul>
                                    <li><b>Vital interests:</b> We may disclose your information where we believe it is necessary to investigate, prevent, or take action regarding potential violations of our policies, suspected fraud, situations involving potential threats to the safety of any person and illegal activities, or as evidence in litigation in which we are involved.</li>
                                </ul>
                            </p>
                        </div>
                    </div>
                </Row>
                <Row>
                    <div className={styles.text}>
                        <div>
                            <h4>DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?</h4>.
                            <p>
                                <em>In short: <i>We only use essential functional cookies. </i></em>
                                We do not use tracking technologies (like web beacons and pixels) to access or store information. We only use cookies required to provide the basic functionality of our website and maintain a secure session.
                            </p>
                        </div>
                    </div>
                </Row>
                <Row>
                    <div className={styles.text}>
                        <div>
                            <h4>IS YOUR INFORMATION TRANSFERRED INTERNATIONALLY?</h4>.
                            <p>
                                <em>In short: <i>We may transfer, store, and process your information in countries other than your own.   </i></em>
                                Our servers are located in The Netherlands. If you are accessing our from outside The Netherlands, please be aware that your information may be transferred to, stored, and processed by us in our facilities and by those third parties with whom we may share your personal information (see "WILL YOUR INFORMATION BE SHARED WITH ANYONE?" above), in and other countries. <br />
                                If you are a resident in the European Economic Area, then these countries may not have data protection or other laws as comprehensive as those in your country. We will however take all necessary measures to protect your personal information in accordance with this privacy policy and applicable law.
                            </p>
                        </div>
                    </div>
                </Row>
                <Row>
                    <div className={styles.text}>
                        <div>
                            <h4>HOW LONG DO WE KEEP YOUR INFORMATION?</h4>.
                            <p>
                                <em>In short: <i>We do not store any information.   </i></em>
                                We do not store any information related to a user beyond the scope of the current session or interaction. Our Site does not have a database.
                            </p>
                        </div>
                    </div>
                </Row>
                <Row>
                    <div className={styles.text}>
                        <div>
                            <h4>DO WE COLLECT INFORMATION FROM MINORS?</h4>.
                            <p>
                                <em>In short: <i> We do not knowingly collect data from or market to children under 18 years of age.  </i></em>
                                We do not knowingly solicit data from or market to children under 18 years of age. By using the Site, you represent that you are at least 18 or that you are the parent or guardian of such a minor and consent to such minor dependent’s use of the Site . If we learn that personal information from users less than 18 years of age has been collected, we will deactivate the account and take reasonable measures to promptly delete such data from our records. If you become aware of any data we have collected from children under age 18, please contact us at <a href="&#109;&#97;&#105;&#108;&#116;&#111;&#58;&#100;&#46;&#105;&#111;&#110;&#105;&#116;&#97;&#64;&#117;&#116;&#119;&#101;&#110;&#116;&#101;&#46;&#110;&#108;">&#68;&#97;&#110;&#32;&#73;&#111;&#110;&#105;&#116;&#97;&#32;&#40;&#85;&#110;&#105;&#118;&#101;&#114;&#115;&#105;&#116;&#121;&#32;&#111;&#102;&#32;&#84;&#119;&#101;&#110;&#116;&#101;&#41;</a>.
                            </p>
                        </div>
                    </div>
                </Row>
                <Row>
                    <div className={styles.text}>
                        <div>
                            <h4>WHAT ARE YOUR PRIVACY RIGHTS?</h4>.
                            <p>
                                <em>In short: <i> In some regions, such as the European Economic Area, you have rights that allow you greater access to and control over your personal information. You may review, change, or terminate your account at any time.   </i></em>
                                In some regions (like the European Economic Area), you have certain rights under applicable data protection laws. These may include the right (i) to request access and obtain a copy of your personal information, (ii) to request rectification or erasure; (iii) to restrict the processing of your personal information; and (iv) if applicable, to data portability. In certain circumstances, you may also have the right to object to the processing of your personal information. To make such a request, please use the contact details provided below. We will consider and act upon any request in accordance with applicable data protection laws. <br />
                                If we are relying on your consent to process your personal information, you have the right to withdraw your consent at any time. Please note however that this will not affect the lawfulness of the processing before its withdrawal.<br />
                                If you are resident in the European Economic Area and you believe we are unlawfully processing your personal information, you also have the right to complain to your local data protection supervisory authority. You can find their contact details here: http://ec.europa.eu/justice/data-protection/bodies/authorities/index_en.htm
                            </p>
                        </div>
                    </div>
                </Row>
                <Row>
                    <div className={styles.text}>
                        <div>
                            <h4>CONTROLS FOR DO-NOT-TRACK FEATURES</h4>.
                            <p>
                                Most web browsers and some mobile operating systems and mobile applications include a Do-Not-Track (“DNT”) feature or setting you can activate to signal your privacy preference not to have data about your online browsing activities monitored and collected. No uniform technology standard for recognizing and implementing DNT signals has been finalized. As such, we do not currently respond to DNT browser signals or any other mechanism that automatically communicates your choice not to be tracked online. If a standard for online tracking is adopted that we must follow in the future, we will inform you about that practice in a revised version of this Privacy Policy.
                            </p>
                        </div>
                    </div>
                </Row>
                <Row>
                    <div className={styles.text}>
                        <div>
                            <h4>DO WE MAKE UPDATES TO THIS POLICY?</h4>.
                            <p>
                                <em>In short: <i> Yes, we will update this policy as necessary to stay compliant with relevant laws.</i></em>
                                We may update this privacy policy from time to time. The updated version will be indicated by an updated “Revised” date and the updated version will be effective as soon as it is accessible. If we make material changes to this privacy policy, we may notify you either by prominently posting a notice of such changes or by directly sending you a notification. We encourage you to review this privacy policy frequently to be informed of how we are protecting your information.
                            </p>
                        </div>
                    </div>
                </Row>
                <Row>
                    <div className={styles.text}>
                        <div>
                            <h4>HOW CAN YOU CONTACT US ABOUT THIS POLICY?</h4>.
                            <p>
                                If you have questions or comments about this policy, you may email us at  or by post to:<br />
                            Universiteit Twente<br />
Drienerlolaan 5<br />
Enschede, Overijssel 7555NB<br />
Netherlands<br />
Phone: +31618663687
                             </p>
                        </div>
                    </div>
                </Row>




                <Footer />
            </Container>
        )
    }
};

export default PageView;