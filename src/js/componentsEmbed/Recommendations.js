import React, { Component } from "react";
import {Container, Col, Row, Image, Button} from "react-bootstrap";
import styles from './Recommendations.scss';
import LabelContext from '../../state/LabelContext';
import { HashToLabelState } from "../../state/Logic";

class Recommendations extends Component {
    static contextType = LabelContext;

    constructor() {
        super();
        
    }

    componentDidMount() {
    }

    render() {
        const { LabelObject, LabelRecommendations, Label } = this.context;     
        console.log('Label', LabelObject)          

        return (
            <div className={styles.holder} >
                {Label != null &&
                    <LabelRecommendations />
                }
                <hr className={styles.hr} />

                <div>Privacy Rating Score </div>

            </div>
        )
    }
};

export default Recommendations;