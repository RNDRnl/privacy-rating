
import * as React from "react";
import {LabelObject, Section } from "../../state/Logic";
const styles = require("./ScoreDrawer.scss");
const classnames = require("classnames");

// /////////
// Score Renderer
// /////////

const ranks = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];

export default class ScoreDrawer { 
    rank : any;
    labelObject: LabelObject
    plain : Boolean = false

    getColorClass = () => {
        var colorStyle = null
        switch (this.rank) {
            case "A": return colorStyle = styles.colorA; break
            case "B": return colorStyle = styles.colorB; break
            case "C": return colorStyle = styles.colorC; break
            case "D": return colorStyle = styles.colorD; break
            case "E": return colorStyle = styles.colorE; break
            case "F": return colorStyle = styles.colorF; break
            case "G": return colorStyle = styles.colorG; break
            default: return colorStyle = null; break
        }
    }
    getTag = () => {
       return (
           <div className={styles.resultBox}>
                
                { !this.plain &&
                    <div className={styles.resultBoxHeader}>
                        <div className={styles.title}>Privacy rating score {this.rank}</div>
                        <div className={styles.result}>{this.labelObject.score} { (this.labelObject.score == 1 || this.labelObject.score == -1) ? `Point` : `Points` }</div>
                    </div>
                }

                <div className={styles.rankContainer}>
                {ranks.map((x, i) =>
                    <div className={classnames(styles.rank, (x == this.rank && !this.plain) ? this.getColorClass() : null)} key={i}>{x}</div>
                )}    
                </div>
                <div className={styles.chipContainer}>
                {[...Array(23)].map((x, i) =>
                    <div className={classnames(styles.chip, ((11-i) == this.labelObject.score && !this.plain) ? styles.selected : null)} key={i}>{11-i}</div>
                )}
                </div>
           </div>
       )
    }
    getChildren = () => {
        var result: any = new Array()
        return result
    }
    constructor(_labelObject:LabelObject, _plain: Boolean=false) { 
        this.labelObject = _labelObject
        this.rank = this.labelObject.rank
        this.plain = _plain
    }
}