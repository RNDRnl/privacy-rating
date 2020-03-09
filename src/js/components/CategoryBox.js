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

        console.log(this.props);

        return (
            <div className={styles.holder} >
                <div className={styles.label}>{this.props.label}</div>
                <DescriptionBox/>
                <DescriptionBox/>
                <DescriptionBox/>
            </div>
        );
    }
}

export default CategoryBox;