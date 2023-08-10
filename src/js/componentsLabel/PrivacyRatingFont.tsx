import * as React from "react";
const styles = require("./PrivacyRatingFont.scss");
import LabelContext from "../../state/LabelContext";

class PrivacyRatingFont extends React.Component {
    static contextType = LabelContext

    constructor(props) {
        super(props);
    }

    render() {
        const { openCategory } = this.context  as any

        var classNames = `${styles.holder} `
        if(openCategory != null) {
            classNames += `${styles.holderminimal}`
        }
       
        return (
            <div className={classNames} >
                <div>PRIVACY RATING</div>
            </div>
        );
    }
}

export default PrivacyRatingFont;