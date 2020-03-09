import React, { Component } from "react";
import styles from './LabelCircle.scss';

class LabelCircle extends Component {
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
                <div>B</div>
            </div>
        );
    }
}

export default LabelCircle;