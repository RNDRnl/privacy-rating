import React, { Component } from "react";
import styles from './CategoryBox.scss';
import DescriptionBox from "./DescriptionBox";
import LabelContext from "../../state/LabelContext";
import {Image} from "react-bootstrap";

class CategoryBox extends Component {
    static contextType = LabelContext

    constructor() {
        super();

        this.state = {
            value: ""
        };

        this.wrapperRef = React.createRef();
    }

    handleClick( ) {
        const { label, setLabel } = this.context
          
        if (label.openCategory == this.props.categoryId) {
            setLabel({ ...label,  "openCategory": null })
        } else {
            setLabel({ ...label, "openCategory": this.props.categoryId  })
        }
    }

    render() {
        const { label, setLabel} = this.context

        const wrapper = this.wrapperRef.current

        if(this.props.isSelected) {            
            wrapper.classList.add(styles.selected)
        } else {
            if(wrapper != null) {
                const wrapper = this.wrapperRef.current
                wrapper.classList.remove(styles.selected)
            }
        }

        if(label.openCategory != null) {
            if (label.openCategory != this.props.categoryId) {
                wrapper.classList.add(styles.notSelected)
            } else {
                if (wrapper != null) {
                    const wrapper = this.wrapperRef.current
                    wrapper.classList.remove(styles.notSelected)
                }
            }
        }

        return (
            <div className={styles.container} ref={this.wrapperRef} onClick={() => this.handleClick()}>
                <div className={styles.label}>
                    {this.props.label}
                    <Image className={styles.icon} src={this.props.icon} fluid />
                    <Image className={styles.arrow} src="resources/icons/arrow.png" fluid />
                    <DescriptionBox/>
                    <DescriptionBox/>
                    <DescriptionBox/>
                </div>
            </div>
        );
    }
}

export default CategoryBox;