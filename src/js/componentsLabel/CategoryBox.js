import React, { Component } from "react";
import styles from './CategoryBox.scss';
import DescriptionBox from "./DescriptionBox";
import LabelContext from "../../state/LabelContext";

class CategoryBox extends Component {
    static contextType = LabelContext

    constructor() {
        super();

        this.state = {
            value: ""
        };

        this.handleChange = this.handleChange.bind(this);

    }

    handleClick( ) {

        const { label, setLabel } = this.context

        if (label.init.openCategory == this.props.categoryId) {
            setLabel({
                'init': {
                    ...label.init, "openCategory": null
                }
            })

        } else {
            setLabel({
                'init': {
                    ...label.init, "openCategory": this.props.categoryId
                }
            })
        }

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
            <div className={styles.container} onClick={() => this.handleClick()}>
                <div className={styles.label}>{this.props.label}</div>
                <DescriptionBox/>
                <DescriptionBox/>
                <DescriptionBox/>
            </div>
        );
    }
}

export default CategoryBox;