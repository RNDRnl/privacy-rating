import * as React from "react";
import LabelCircle from "./LabelCircle";
import PrivacyRatingFont from './PrivacyRatingFont';
import LabelBar from "./LabelBar";
import Footer from "./Footer";
import CategoryBox from "./CategoryBox";
import DescriptionBox from "./DescriptionBox";
const styles = require("./LabelElements.scss");


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
    // static contextType = LabelContext

    render() {
        return (
            <div className={styles.holder}>
                <div className={styles.footer}>
                    <Footer domain={this.props.domain} year={this.props.year} />
                </div>
                <div>
                    <LabelCircle rating={this.props.rating} />
                    <PrivacyRatingFont />
                    <LabelBar rating={this.props.rating} />
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
    sectionDesc: String;
    score: any;
}
export class LabelSectionElement extends React.Component<ValidPropsSection, {}> {
    render() {
        return (
            <DescriptionBox sectionText={this.props.sectionText} sectionDesc={this.props.sectionDesc} score={this.props.score} />
        );
    }
}