import React, { Component } from "react";
import styles from './DescriptionBox.scss';

class DescriptionBox extends Component {
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
                <div className={styles.label}>No sales of user data</div>
            </div>
        );
    }
}

export default DescriptionBox;