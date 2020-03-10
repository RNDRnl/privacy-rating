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

    this.wrapperRef = React.createRef();
  }

  componentDidMount() {
    const { setLabel } = this.context

    const newState = this.props
    setLabel(newState)

    const wrapper = this.wrapperRef.current;
    wrapper.classList.add(styles.selected_category_0)
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
      <div ref={this.wrapperRef} className={styles.holder} >
        <LabelCircle/>
        <PrivacyRatingFont/>
        <LabelBar/>
        <div className={styles.categoryBoxes}>
            <CategoryBox categoryId={0} label={"COLLECTION"}/>
            <CategoryBox categoryId={1} label={"SHARING"}/>
            <CategoryBox categoryId={2} label={"CONTROL"}/>
            <CategoryBox categoryId={3} label={"SECURITY"}/>
        </div>
      </div>
    );
  }
}

export default Frame;