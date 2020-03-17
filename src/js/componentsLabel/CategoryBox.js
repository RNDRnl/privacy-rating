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

    componentDidUpdate() {

    }

    render() {
        const { label } = this.context

        var classNames = `${styles.container} `

        if(label.openCategory != null) {
            if (label.openCategory != this.props.categoryId) {
                classNames += `${styles.notSelected} `
            }
        }

        if(this.props.isSelected) {  
            classNames += `${styles.selected} `
        }

        return (
            <div className={classNames} onClick={() => this.handleClick()}>
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