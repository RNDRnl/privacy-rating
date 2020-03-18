import React, { Component } from "react";
import styles from './Footer.scss';
import {Image, Switch} from "react-bootstrap";
import Home from "../componentsHome/Home";
import {Route, Router} from "react-router-dom";

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
            <div className={styles.footer}>
                <a href="/" title="Report" className={styles.reportFlag}/>
                <a className={styles.domainName}>bol.com</a>
                <a className={styles.year}>2020</a>
            </div>
        );
    }
}

export default Footer;