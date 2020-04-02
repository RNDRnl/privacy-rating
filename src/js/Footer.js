import React from 'react';
import styles from './Footer.scss';
import {Button, Container, Jumbotron, Accordion, Col, Row, Card, Table, ListGroup, ProgressBar} from "react-bootstrap";
import { Link } from "react-router-dom";

const initialFormState = {
}

const Footer= () => {
    return (
        <div  className={styles.holder} >

            <div  className={styles.container} >
                <div className={styles.footerText}>
                    <p>The Privacy Rating is a project by the University of Twente,
                    supported by Nederlandse Organisatie voor Wetenschappelijk Onderzoek</p>
                    <p>Grant number: 628.001.011</p>
                    <p>
                    executed in collaboration
                    with TNO, WODC, Centric B.V.
                    designed by RNDR
                    </p>
                    <p>
                    <a target="_blank" href="https://creativecommons.org/licenses/by-nc-nd/4.0/">CC-BY-NC-ND</a>
                    </p>
                </div>

                <div className={styles.footerText}>
                    <Link to="/contact"><Button  variant="dark" className={styles.button}>Contact</Button></Link>
                    <Link to="/form"><Button variant="dark"  className={styles.button}>Create label</Button></Link>
                    <Link to="/"><Button variant="dark" className={styles.button}>About</Button></Link>
                </div>
            </div>


        </div>
    );
};

export default Footer;