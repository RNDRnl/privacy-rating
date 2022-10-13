import * as React from "react";
const styles = require("./LabelCircle.scss");
import LabelContext from "../../state/LabelContext";

class LabelCircle extends React.Component<{rating:any}, {}> {
        static contextType = LabelContext

        constructor(props) {
                super(props)
        }

        render() {
                const { openCategory } = this.context as any

                var classNames = `${styles.holder} `

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

                classNames += `${styles.holder} ${colorStyle} `
                if(openCategory != null) {
                        classNames += `${styles.holderminimal}`
                }

        return (
            <div className={classNames} >
                <div>{this.props.rating}</div>
            </div>
        );
    }
}

export default LabelCircle;