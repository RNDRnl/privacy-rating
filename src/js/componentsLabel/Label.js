import React, { Component } from "react";
import styles from './Label.scss';
import LabelContext from '../../state/LabelContext'
import { LabelTag } from "./LabelClasses";

class Frame extends Component {  
  static contextType = LabelContext
  
  constructor() {
    super();

    this.state = {
    };
  }

  handleExit( ) {
      const { openCategory, setLabelState } = this.context
      setLabelState(null);
  }

  componentDidMount() {
    const { pupulateLabel } = this.context
    pupulateLabel({hash:this.props.labelId, domain:this.props.domain});
  }

  render() {
    const { Label } = this.context
    
    return (
      <div  className={styles.holder} onMouseLeave={() => this.handleExit()} >
          {Label != null &&
            <Label />
          }
      </div>
    );
  }
}

export default Frame;