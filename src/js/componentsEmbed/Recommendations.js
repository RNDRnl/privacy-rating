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
        console.log('LabelRecommendations', LabelRecommendations);

        return (
            <div className={styles.holder} >
                {Label != null &&
                    <LabelRecommendations />
                }
            </div>
        )
    }
};

export default Recommendations;