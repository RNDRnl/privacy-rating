import React, { Component } from "react";
import styles from './Footer.scss';

class Footer extends Component {
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
            <div className={styles.footer} >
                <div>Bol.com | 2020</div>
            </div>
        );
    }
}

export default Footer;