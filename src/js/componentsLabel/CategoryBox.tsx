import * as React from "react";
const styles = require("./CategoryBox.scss");
import DescriptionBox from "./DescriptionBox";
import LabelContext from "../../state/LabelContext";
import {Image} from "react-bootstrap";

class CategoryBox extends React.Component<{rating:any, categoryName:any, children:any}, {}> {
    static contextType = LabelContext

    constructor(props) {
        super(props);
        
        this.state = {
            value: ""
        };
        
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick( ) {
        const {  openCategory, setLabelState } = this.context
          
        if (openCategory == this.props.categoryName) {
            setLabelState(null)
        } else {
            setLabelState(this.props.categoryName)
        }
    }

    render() {
        const { openCategory } = this.context

        var colorStyle = null
        switch (this.props.rating) {
            case "A": colorStyle = styles.colorA
                    break
            case "B": colorStyle = styles.colorB
                    break
            case "C": colorStyle = styles.colorC
                    break
            case "D": colorStyle = styles.colorD
                    break
            case "E": colorStyle = styles.colorE
                    break
            case "F": colorStyle = styles.colorF
                    break
            case "G": colorStyle = styles.colorG
                    break
            default: colorStyle = null
                    break
        }
        
        var classNames = `${styles.container} ${colorStyle} `
        if(openCategory != null) {
            if (openCategory != this.props.categoryName) {
                classNames += `${styles.notSelected} `
            } else {
                classNames += `${styles.selected} `
            }
        }
        
        var icon = `/resources/icons/${this.props.categoryName}-transparant.gif`;
       
        return (
            <div className={classNames} onClick={() => this.handleClick()}>
                <div className={styles.label}>
                    {this.props.categoryName}
                    <Image className={styles.icon} src={icon} fluid />
                    <Image className={styles.arrow} src="/resources/icons/arrow.png" fluid />
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default CategoryBox;