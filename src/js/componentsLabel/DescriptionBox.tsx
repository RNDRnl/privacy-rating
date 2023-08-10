import * as React from "react";
const styles = require("./DescriptionBox.scss");

class DescriptionBox extends React.Component<{sectionText:any, sectionDesc:any, score:any, ranked: Boolean, hidden: Boolean}, {}> {
    
    render() {
        var classDots = `${styles.colouredDots} `
        
        var colorStyle = null
        switch (this.props.score) {
            case 1.0: 
                colorStyle = styles.colorA
                break
            case 0.0: 
                colorStyle = styles.colorD
                break
            case -1.0: 
                colorStyle = styles.colorG
                break
            }

        if(this.props.ranked==false) {
            colorStyle = styles.colorNone
        }

        classDots += `${colorStyle} `

        return (
            <div className={styles.holder}>
                <div className={styles.label}>
                    <div className={classDots}/>  
                    {this.props.sectionText}
                    <div className={styles.questionMark}>                       
                         <span title={`${this.props.sectionDesc}`} />
                    </div>
                </div>
            </div>
        );
    }
}

export default DescriptionBox;