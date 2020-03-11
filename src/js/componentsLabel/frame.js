import React, { Component } from "react";
import styles from './frame.scss';
import PrivacyRatingFont from "./PrivacyRatingFont";
import LabelCircle from "./LabelCircle";
import LabelBar from "./LabelBar";
import CategoryBox from "./CategoryBox";
import LabelContext from '../../state/LabelContext'
import Footer from "./Footer";

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
            <CategoryBox categoryId={0} isSelected={label.openCategory == 0} label={"COLLECTION"}/>
            <CategoryBox categoryId={1} isSelected={label.openCategory == 1} label={"SHARING"}/>
            <CategoryBox categoryId={2} isSelected={label.openCategory == 2} label={"CONTROL"}/>
            <CategoryBox categoryId={3} isSelected={label.openCategory == 3} label={"SECURITY"}/>
        </div>
        <Footer/>
      </div>
    );
  }
}

export default Frame;