import React, { Component } from "react";
import styles from './frame.scss';
import PrivacyRatingFont from "./PrivacyRatingFont";
import LabelCircle from "./LabelCircle";
import LabelBar from "./LabelBar";
import CategoryBox from "./CategoryBox";
import DescriptionBox from "./DescriptionBox";

class Frame extends Component {
  constructor() {
    super();

    this.state = {
      value: ""
    };

    this.handleChange = this.handleChange.bind(this);
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