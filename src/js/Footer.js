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
                    The Privacy Rating is a project by the <a target="_blank" href="https://www.utwente.nl/">University of
                        Twente</a>,
                        <br/>
                        supported by <a target="_blank" href="https://www.nwo.nl/">NWO</a> (grant number: 628.001.011),
                        in collaboration with <a target="_blank" href="https://www.tno.nl/nl/">TNO</a>,
                        <a target="_blank" href="https://wodc.nl/">WODC</a>,
                        <a target="_blank" href="https://www.centric.eu/">Centric B.V.</a>
                    </p>
                    <p>
                        Design by <a target="_blank" href="https://rndr.studio/">RNDR</a>.
                    </p>
                </div>

                <div className={styles.footerText}>
                    <Image className={styles.labelSmall} src="/resources/privacyRatingSmall/SVG/PrivacyRatingA.svg"/>
                    <br/>
                    <br/>
                    <Link to="/termsofuse"><Button variant="dark" className={styles.button}>Terms of Use</Button></Link>
                    <Link to="/privacypolicy"><Button variant="dark"  className={styles.button}>Privacy policy</Button></Link>
                    <Link to="/contact"><Button  variant="dark" className={styles.button}>Contact</Button></Link>
                    <br/>
                    <br/>
                    <p className={styles.textLicense}>
                        <a target="_blank" href="https://creativecommons.org/licenses/by-nc-nd/4.0/">CC-BY-NC-ND</a>
                        -2020
                    </p>
                </div>
            </div>


        </div>
    );
};

export default Footer;