import React, { Component } from "react";
import styles from './frame.scss';

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
        <h1>Privacy label frame</h1>
      </div>
    );
  }
}

export default Frame;