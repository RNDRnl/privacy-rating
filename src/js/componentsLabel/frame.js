import React, { Component } from "react";
import styles from './frame.scss';
import PrivacyRatingFont from "./PrivacyRatingFont";
import LabelCircle from "./LabelCircle";
import LabelBar from "./LabelBar";
import CategoryBox from "./CategoryBox";
import LabelContext from '../../state/LabelContext'
import Footer from "./Footer";
import {Image} from "react-bootstrap";

class Frame extends Component {  
  static contextType = LabelContext
  
  constructor() {
    super();

    this.state = {
     
    };    
    
  }

  componentDidMount() {
    const { setLabel } = this.context
    const newState = this.props.init
    setLabel(newState)
  }

  render() {
    const { label } = this.context

    return (
      <div  className={styles.holder} >
        <LabelCircle/>
        <PrivacyRatingFont/>
        <LabelBar/>
        <div className={styles.categoryBoxes}>
            <CategoryBox categoryId={0} isSelected={label.openCategory == 0} icon={"resources/icons/collection-transparant.gif"} label={"COLLECTION"}/>
            <CategoryBox categoryId={1} isSelected={label.openCategory == 1} icon={"resources/icons/sharing-transparant.gif"} label={"SHARING"}/>
            <CategoryBox categoryId={2} isSelected={label.openCategory == 2} icon={"resources/icons/control-transparant.gif"} label={"CONTROL"}/>
            <CategoryBox categoryId={3} isSelected={label.openCategory == 3} icon={"resources/icons/security-transparant.gif"} label={"SECURITY"}/>
        </div>
        <Footer/>
      </div>
    );
  }
}

export default Frame;