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
                        <span><Image width="15px" style={{marginRight:'10px', marginTop:'-4px'}} src={`${process.env.BASE_PATH}/resources/icons/law.svg`}/><a target="_blank" href="https://github.com/RNDRnl/privacy-rating/blob/master/LICENSE">MIT License</a></span>
                        <span><Image width="15px" style={{marginRight:'10px', marginTop:'-4px'}} src={`${process.env.BASE_PATH}/resources/icons/github.svg`}/><a target="_blank" href="https://github.com/RNDRnl/privacy-rating">Github</a></span>
                    </p>
                    <p>
                        <Image width="150px" src={`${process.env.BASE_PATH}/resources/privacyRatingSmall/PNG/PrivacyRatingA.png`}/>
                    </p>
                </div>
                <div className={styles.footerText}>
                    <Row>
                        <Col>
                            <Link to="/contact"><Button  variant="white" className={styles.button}>Contact</Button></Link> 
                            <Link to="/privacy-policy"><Button variant="white"  className={styles.button}>Privacy Policy</Button></Link>
                            <Link to="/about"><Button variant="white" className={styles.button}>About</Button></Link>
                            <Link to="/"><Button variant="white" className={styles.button}>Home</Button></Link>
                        </Col>
                    </Row>
                </div>
            </div>
        </div>
    );
};

export default Footer;