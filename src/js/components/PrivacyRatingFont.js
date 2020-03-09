import React, { Component } from "react";
import styles from './PrivacyRatingFont.scss';

class PrivacyRatingFont extends Component {
    constructor() {
        super();

        this.state = {
            value: ""
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        const { value } = event.target;
        this.setState(() => {
            return {
                value
            };
        });
    }

    render() {
        return (
            <div className={styles.holder} >
                <div>PRIVACY RATING</div>
            </div>
        );
    }
}

export default PrivacyRatingFont;