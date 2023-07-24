import * as React from "react";
const styles = require("./DescriptionBox.scss");
import {Image} from "react-bootstrap";
const ImageRef : any = Image;

type BoxState = {
    unfolded?: boolean 
}

class DescriptionBox extends React.Component<{sectionText:any, score:any, ranked:Boolean, recommendationText:any}, BoxState> {
    
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);

        this.state = {
            unfolded: false
        };
    }

    handleClick( ) {
        this.toggle()
    }

    toggle() {
        const newState = !this.state.unfolded
        this.setState({
            unfolded: newState
        });      
        console.log(newState);  
    }

    render() {
        var classBox = `${styles.holder} `
        var classDots = `${styles.colouredDots} `       
        
        var colorStyle = null
        var text = ""
        var foldable = false
        switch (this.props.score) {
        case 1.0: 
            colorStyle = styles.colorA
            text ="A"
            foldable = false
            break
        case 0.0: 
            colorStyle = styles.colorD
            text ="B"
            foldable = true
            classBox += `${styles.withHover} `
            break
        case -1.0: 
            colorStyle = styles.colorG
            text ="C"
            foldable = true
            classBox += `${styles.withHover} `
            break
        }

        if(!this.props.ranked) {
            colorStyle = styles.none;
        }

        classDots += `${colorStyle} `

        switch (this.state.unfolded) {
            case true:
                classBox += `${styles.unfolded}`
                break
            case false:
                break
        }

        return (
            <div className={classBox} onClick={() => this.handleClick()}>
                <div className={styles.label}>

                    <div className={styles.label__column}>                        
                        {this.props.ranked ? (
                            <div>{this.props.score} Point</div>
                        ) : (
                            <div>Not scored</div>
                        )}
                    </div>

                    <div className={styles.label__column}>
                        <div className={classDots}/>
                    </div>

                    <div className={styles.label__column}>                               
                        <div>
                            {this.props.sectionText}
                            {foldable &&
                                <ImageRef className={styles.arrow} src={`${process.env.BASE_PATH}/resources/icons/arrow.svg`} fluid />
                            }
                        </div>
                        {foldable &&                       
                            <div className={styles.recommendationText}>{this.props.recommendationText}</div>
                        }
                    </div>
                                       
                </div>
            </div>
        );
    }
}

export default DescriptionBox;