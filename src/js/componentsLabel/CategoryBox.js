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

        this.wrapperRef = React.createRef();
    }

    handleClick( ) {
        const { label, setLabel } = this.context
          
        if (label.openCategory == this.props.categoryId) {
            setLabel({ ...label, "openCategory": null })
        } else {
            setLabel({ ...label, "openCategory": this.props.categoryId  })
        }        
    }

    render() {
        const { label, setLabel } = this.context

        const wrapper = this.wrapperRef.current

        if(this.props.isSelected) {            
            wrapper.classList.add(styles.selected)
        } else {
            if(wrapper != null) {
                const wrapper = this.wrapperRef.current
                wrapper.classList.remove(styles.selected)
            }
        }
        
        return (
            <div className={styles.container} ref={this.wrapperRef}  onClick={() => this.handleClick()}>
                <div className={styles.label}>{this.props.label}</div>
                <DescriptionBox/>
                <DescriptionBox/>
                <DescriptionBox/>
            </div>
        );
    }
}

export default CategoryBox;