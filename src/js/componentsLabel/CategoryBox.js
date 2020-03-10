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

        this.wrapperRef = React.createRef();
    }

    handleClick( ) {
        const wrapper = this.wrapperRef.current;
        wrapper.classList.toggle(styles.selected)
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
            <div ref={this.wrapperRef} className={styles.holder} onClick={() => this.handleClick()}>
                <div className={styles.label}>{this.props.label}
                    <DescriptionBox/>
                    <DescriptionBox/>
                    <DescriptionBox/>
                </div>


            </div>
        );
    }
}

export default CategoryBox;