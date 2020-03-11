import React, { Component } from "react";
import styles from './LabelCircle.scss';
import LabelContext from '../../state/LabelContext'

class LabelCircle extends Component {
    static contextType = LabelContext
    constructor() {
        super();

        this.state = {
            value: ""
        };

        this.wrapperRef = React.createRef();
    }

    render() {
        const { label, setLabel } = this.context

        const wrapper = this.wrapperRef.current

        if(label.openCategory != null) {
            wrapper.classList.add(styles.holderminimal)
        } else {
            if(wrapper != null) {
                const wrapper = this.wrapperRef.current
                wrapper.classList.remove(styles.holderminimal)
            }
        }
        return (
            <div className={styles.holder} ref={this.wrapperRef}>
                <div>B</div>
            </div>
        );
    }
}

export default LabelCircle;