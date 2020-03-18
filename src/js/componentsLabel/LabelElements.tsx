import * as React from "react";
import PrivacyRatingFont from "./PrivacyRatingFont";
import LabelCircle from "./LabelCircle";
import LabelBar from "./LabelBar";
import CategoryBox from "./CategoryBox";
import Footer from "./Footer";

// //////////////
// Category
// /////////////

export interface ValidPropsLabel { 
    rating: String;
    children: any;
}
export class LabelElement extends React.Component<ValidPropsLabel, {}> {
    render() {
        return (
            <div>
                <LabelCircle />
                <PrivacyRatingFont />
                <LabelBar />
                <div>
                    {this.props.children}
                </div>
                <Footer />
            </div>
        );
    }
}
//className={styles.categoryBoxes}

export interface ValidPropsCategory { 
    category: String;
    children: any;
}
export class LabelCategoryElement extends React.Component<ValidPropsCategory, {}> {
    render() {
        return (
            <div>
                <div>category</div>
                <div>
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export interface ValidPropsSection { 
    section: String;
}
export class LabelSectionElement extends React.Component<ValidPropsSection, {}> {
    render() {
        return (
            <div>
                <div>section</div>
            </div>
        );
    }
}