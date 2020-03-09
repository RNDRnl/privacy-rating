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
                <div>No sales of user data</div>
                <div>Sales of anonymous users</div>
                <div>Legally required disclosure to local law enforcement</div>
            </div>
        );
    }
}

export default DescriptionBox;