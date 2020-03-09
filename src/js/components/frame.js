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
    const user = this.context
    console.log(user)
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
        <CategoryBox/>
      </div>
    );
  }
}

export default Frame;