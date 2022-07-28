import * as React from "react";
const styles = require("./CategoryBox.scss");
import LabelContext from "../../state/LabelContext";
import {Image} from "react-bootstrap";

type LabelState = {
    timer: NodeJS.Timeout
}

class CategoryBox extends React.Component<{rating:any, categoryName:any, children:any}, LabelState> {
    static contextType = LabelContext

    constructor(props) {
        super(props);
    }

    handleClick( ) {
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

        return (
            <div className={classNames} 
                >
                <div className={styles.label}>
                    <div>{this.props.categoryName}</div>
                    {/* <Image className={styles.arrow} src={`${process.env.BASE_PATH}/resources/icons/arrow.svg`} fluid /> */}
                    <div>{this.props.children}</div>
                </div>
            </div>
        );
    }
}

export default CategoryBox;