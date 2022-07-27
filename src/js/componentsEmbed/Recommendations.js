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
        // var labelData = HashToLabelState({hash: "LLLLRLRPPRPR", domain: undefined});
        // console.log("labelDATA!", labelData);

    }

    render() {
        const { LabelObject, LabelRecommendations, Label } = this.context;               
        console.log('LabelRecommendations', LabelRecommendations);

        return (
            <div className={styles.holder} >
                <div>Ola i'm here</div>
                {Label != null &&
                    <LabelRecommendations />
                }
            </div>
        )
    }
};

export default Recommendations;