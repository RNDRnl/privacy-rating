import React, { Component } from "react";
import styles from './CategoryBox.scss';
import DescriptionBox from "./DescriptionBox";

class CategoryBox extends Component {
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
                <div>COLLECTION</div>
                <div>SHARING</div>
                <div>CONTROL</div>
                <div>SECURITY</div>
                <DescriptionBox/>
            </div>
        );
    }
}

export default CategoryBox;