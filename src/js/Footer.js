import React from 'react';
import styles from './Footer.scss';
import {
    Button,
    Container,
    Jumbotron,
    Accordion,
    Col,
    Row,
    Card,
    Table,
    ListGroup,
    ProgressBar,
    Image
} from "react-bootstrap";
import { Link } from "react-router-dom";

const initialFormState = {
}

const Footer= () => {
    return (
        <div  className={styles.holder} >
            <div  className={styles.container} >
                <div className={styles.footerText}>
                    <p>
                        Privacy Rating is a project by the <a target="_blank" href="https://www.utwente.nl/">University of
                        Twente</a>,
                        <br/>
                        supported by <a target="_blank" href="https://www.nwo.nl/">NWO </a> 
                        in collaboration with <a target="_blank" href="https://www.tno.nl/nl/">TNO</a>,
                        <a target="_blank" href="https://wodc.nl/"> WODC</a>,
                        <a target="_blank" href="https://www.centric.eu/"> Centric B.V.</a>
                    </p>
                    <p>
                        Design and implementation by <a target="_blank" href="https://rndr.studio/">RNDR</a>
                    </p>
                    <br/>
                        
                    <p>
                        <Image width="15px" style={{marginRight:'10px', marginTop:'-4px'}} src="/resources/icons/cc.svg"/><a target="_blank" href="https://creativecommons.org/licenses/by-nc-nd/4.0/">BY-NC-ND</a>
                    </p>
                    <p>
                        <Image width="150px" src="/resources/privacyRatingSmall/PNG/PrivacyRatingA.png"/>
                    </p>
                </div>
                <div className={styles.footerText}>
                    <Row>
                        <Col>
                            <Link to="/contact"><Button  variant="white" className={styles.button}>Contact</Button></Link> 
                            <Link to="/terms-of-use"><Button variant="white" className={styles.button}>Terms of Use</Button></Link>
                            <Link to="/privacy-policy"><Button variant="white"  className={styles.button}>Privacy policy</Button></Link>
                            <Link to="/about"><Button variant="white" className={styles.button}>About</Button></Link>
                            <Link to="/"><Button variant="white" className={styles.button}>Home</Button></Link>
                        </Col>
                    </Row>
                </div>
            </div>
        </div>
    );
};



export const FooterSmall = () => {
    return (
        <div  className={styles.holderSmall} >
            <div className={styles.footerText}>
                Project by the <a target="_blank" href="https://www.utwente.nl/">University of Twente</a> supported by <a target="_blank" href="https://www.nwo.nl/">NWO</a> in collaboration with <a target="_blank" href="https://www.tno.nl/nl/">TNO</a>, <a target="_blank" href="https://wodc.nl/">WODC</a>, <a target="_blank" href="https://www.centric.eu/">Centric B.V.</a>
                <Link style={{'float':'right'}} to="/">About</Link>   
            </div>
        </div>
    );
};

export default Footer;