import React, { Component } from "react";
import styles from './frame.scss';
import PrivacyRatingFont from "./PrivacyRatingFont";
import LabelCircle from "./LabelCircle";
import LabelBar from "./LabelBar";
import CategoryBox from "./CategoryBox";
import DescriptionBox from "./DescriptionBox";
import LabelContext from '../../state/LabelContext'

class Frame extends Component {  
  static contextType = LabelContext
  
  constructor() {
    super();

    this.state = {
      value: ""
    };    
    
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    const { setLabel } = this.context

    const newState = this.props
    setLabel(newState)
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
    const { label } = this.context

    console.log(label)

    return (
      <div className={styles.holder} >
        <LabelCircle/>
        <PrivacyRatingFont/>
        <LabelBar/>
        <CategoryBox label={"COLLECTION"}/>
        <CategoryBox label={"SHARING"}/>
        <CategoryBox label={"CONTROL"}/>
        <CategoryBox label={"SECURITY"}/>
      </div>
    );
  }
}

export default Frame;