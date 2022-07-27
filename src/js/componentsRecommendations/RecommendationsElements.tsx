import * as React from "react";
import CategoryBox from "./CategoryBox";
import DescriptionBox from "./DescriptionBox";
// const styles = require("./RecommendationsClasses.scss");


// import LabelContext from '../../state/LabelContext';

// //////////////
// Category
// /////////////

export interface ValidPropsLabel { 
    rating: any;
    children: any;
    domain: any;
    year: any;
}
export class LabelElement extends React.Component<ValidPropsLabel, {}> {
    // static contextType = LabelContext styles.holder

    render() {
        return (
            <div className={""}>
                <div>
                    {this.props.children}
                </div>
            </div>


        );
    }
}
//className={styles.categoryBoxes}

export interface ValidPropsCategory { 
    categoryName: any;
    rating: any;
    children: any;
}
export class LabelCategoryElement extends React.Component<ValidPropsCategory, {}> {
        render() {
            return (
                <CategoryBox rating={this.props.rating} categoryName={this.props.categoryName} children={this.props.children} />
            );
        }
}

export interface ValidPropsSection { 
    sectionText: String;
    score: any;
}
export class LabelSectionElement extends React.Component<ValidPropsSection, {}> {
    render() {
        return (
            <DescriptionBox sectionText={this.props.sectionText} score={this.props.score} />
        );
    }
}