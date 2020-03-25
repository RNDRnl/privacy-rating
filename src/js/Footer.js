import React from 'react';
import styles from './Footer.scss';

const initialFormState = {
}

const Footer= () => {
    return (
        <div  className={styles.holder} >
            <div className={styles.footerText}>
                The Privacy Rating is a project by the University of Twente,
                <br/>
                supported by Nederlandse Organisatie voor Wetenschappelijk Onderzoek
                <br/>
                (grant number: 628.001.011)
            </div>

            <div className={styles.footerText}>
                executed in collaboration
                with TNO, WODC, Centric B.V.
                <br/>
                designed by RNDR
                <br/>
                CC-BY-NC-ND (https://creativecommons.org/licenses/by-nc-nd/4.0/).
            </div>

        </div>
    );
};

export default Footer;