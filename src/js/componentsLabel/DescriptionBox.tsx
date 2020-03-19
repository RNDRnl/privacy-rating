import * as React from "react";
const styles = require("./DescriptionBox.scss");

class DescriptionBox extends React.Component<{sectionText:any, score:any}, {}> {
    
    render() {

        var classNames = `${styles.label} `
        
        var colorStyle = null
        var text = ""
        switch (this.props.score) {
        case 0.0: 
            colorStyle = styles.colorA
            text ="A"
            break
        case 1.0: 
            colorStyle = styles.colorD
            text ="B"
            break
        case 2.0: 
            colorStyle = styles.colorG
            text ="C"
            break
        }

        classNames += `${colorStyle} `

        return (
            <div className={styles.holder}>
                <div className={classNames}>
                    {this.props.sectionText}
                </div>
            </div>
        );
    }
}

export default DescriptionBox;