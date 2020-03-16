import React from 'react';
import styles from './NotFound.scss';
import {Button, ButtonGroup} from "react-bootstrap";
import Footer from "./componentsLabel/Footer";

const initialFormState = {
}

const NotFound = () => {
    return (
        <div  className={styles.holder} >
            <div className={styles.circle}>404</div>
            <div className={styles.privacyRatingFont}>PRIVACY RATING</div>
            <br/>
            <br/>
            <h2>The Privacy rating you are looking for was not found.</h2>
            <div>Please make sure you have typed in the right URL.</div>
            <br/>
            <ButtonGroup className="mr-2">
                <Button variant="success" href="/form">Create label</Button>
            </ButtonGroup>
            <ButtonGroup>
                <Button variant="secondary" href="/">About</Button>
            </ButtonGroup>
            <div className={styles.footer}><Footer/></div>
        </div>
    );
};

export default NotFound;