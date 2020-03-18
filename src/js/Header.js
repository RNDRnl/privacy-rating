import React from 'react';
import styles from './Header.scss';

const initialFormState = {
}

const Header= () => {
    return (
        <div  className={styles.holder} >

            <div className={styles.circlebox}>

                <div className={styles.cirleG}>G</div>
                <div className={styles.cirleF}>F</div>
                <div className={styles.cirleE}>E</div>
                <div className={styles.cirleD}>D</div>
                <div className={styles.cirleC}>C</div>
                <div className={styles.cirleB}>B</div>
                <div className={styles.cirleA}>A</div>

            </div>

                <div className={styles.privacyRatingFont}>PRIVACY<br/>RATING</div>

        </div>
    );
};

export default Header;