import React, { Component } from "react";
import styles from './Recommendations.scss';
import LabelContext from '../../state/LabelContext';

class Recommendations extends Component {
    static contextType = LabelContext;

    constructor() {
        super();
        
    }

    componentDidMount() {
    }

    render() {
        const { LabelObject, LabelRecommendations, LabelScoreDrawer, Label } = this.context;     
        console.log('Label', LabelObject)          
        console.log(this.context);

        return (
            <div className={styles.holder} >
                {Label != null &&
                <>
                    <LabelRecommendations />
                    <hr className={styles.hr} />
                    <LabelScoreDrawer />
                </>
                }
            </div>
        )
    }
};

export default Recommendations;