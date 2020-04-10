import React from 'react';
import styles from './Header.scss';
import classnames from "classnames";
import { Link } from "react-router-dom";

const initialFormState = {
}

const Header= () => {
    return (
        <div>
        <div  className={styles.holder}>
            <Link to="/" className={styles.flexboxTitle}>   
                <div className={classnames(styles.element, styles.privacyRatingFont)}>PRIVACY<br/>RATING</div>
            </Link>
            
            <div className={styles.flexbox}>
               
                <div className={classnames(styles.element)}>
                    <div className={classnames(styles.label, styles.circleA)}>A</div>
                </div>
                <div className={classnames(styles.element)}>
                    <div className={classnames(styles.label, styles.circleB)}>B</div>
                </div>
                <div className={classnames(styles.element)}>
                    <div className={classnames(styles.label, styles.circleC)}>C</div>
                </div>
                <div className={classnames(styles.element)}>
                    <div className={classnames(styles.label, styles.circleD)}>D</div>
                </div>
                <div className={classnames(styles.element)}>
                    <div className={classnames(styles.label, styles.circleE)}>E</div>
                </div>
                <div className={classnames(styles.element)}>
                    <div className={classnames(styles.label, styles.circleF)}>F</div>
                </div>
                <div className={classnames(styles.element)}>
                    <div className={classnames(styles.label, styles.circleG)}>G</div>
                </div>
            </div>
        </div>
            {/* <div  className={styles.holderSmall} >
                <div className={styles.footerText}>
                    Project by the <a target="_blank" href="https://www.utwente.nl/">University of Twente</a> supported by <a target="_blank" href="https://www.nwo.nl/">NWO</a> in collaboration with <a target="_blank" href="https://www.tno.nl/nl/">TNO</a>, <a target="_blank" href="https://wodc.nl/">WODC</a>, <a target="_blank" href="https://www.centric.eu/">Centric B.V.</a>
                </div>
            </div> */}
        </div>
    );
};

export default Header;