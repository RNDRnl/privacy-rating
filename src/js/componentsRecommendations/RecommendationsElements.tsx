import * as React from "react";
import CategoryBox from "./CategoryBox";
import DescriptionBox from "./DescriptionBox";

// //////////////
// [Recom] Category
// /////////////

export interface ValidPropsLabel { 
    rating: any;
    children: any;
    domain: any;
    year: any;
}
export class LabelElement extends React.Component<ValidPropsLabel, {}> {

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
    ranked: Boolean;
    recommendationText: String;
    hiddenDesc: String;
    hidden: Boolean;
}
export class LabelSectionElement extends React.Component<ValidPropsSection, {}> {
    render() {
        return (
            <DescriptionBox sectionText={this.props.hidden ? this.props.hiddenDesc : this.props.sectionText} score={this.props.score} ranked={this.props.ranked} recommendationText={this.props.recommendationText} hidden={this.props.hidden} />
        );
    }
}