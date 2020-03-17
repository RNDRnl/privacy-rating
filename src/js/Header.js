import React from 'react';
import styles from './Header.scss';

const initialFormState = {
}

const Header= () => {
    return (
        <div  className={styles.holder} >

            <div className={styles.circlebox}>

                <div className={styles.cirleG}/>
                <div className={styles.cirleF}/>
                <div className={styles.cirleE}/>
                <div className={styles.cirleD}/>
                <div className={styles.cirleC}/>
                <div className={styles.cirleB}/>
                <div className={styles.cirleA}/>

            </div>

                <div className={styles.privacyRatingFont}>PRIVACY<br/>RATING</div>

        </div>
    );
};

export default Header;