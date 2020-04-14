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

        this.handleClick = this.handleClick.bind(this);
        this.handleMouseEnter = this.handleMouseEnter.bind(this);
        this.handleMouseLeave = this.handleMouseLeave.bind(this);
        this.toggleCheck = this.toggleCheck.bind(this);
        this.cancelTimout = this.cancelTimout.bind(this);
    }

    handleClick( ) {
        this.toggleCheck()
    }

    setCategoryOpen() {
        const {openCategory, setLabelState} = this.context
        setLabelState(this.props.categoryName)
    }

    toggleCheck() {
        const {openCategory, setLabelState} = this.context
        this.cancelTimout();

        if (openCategory == this.props.categoryName) {
            setLabelState(null)
        } else {
            setLabelState(this.props.categoryName)
        }
    }

    handleMouseEnter( ) {
       const {openCategory, setLabelState} = this.context
       if (openCategory == this.props.categoryName) {
        this.cancelTimout();
       }
       
       this.setState({
            timer: setTimeout(() => { 
                // console.log("execute");
                this.setCategoryOpen() 
            }, 600)
        });
    }

    handleMouseLeave( ) {
        this.cancelTimout();
    }

    cancelTimout() {
        clearTimeout(this.state.timer);
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

        var iconPNG = `/resources/icons/${this.props.categoryName}.png`;
        var iconGIF = `/resources/icons/${this.props.categoryName}.gif`;

        return (
            <div className={classNames} 
                onClick={() => this.handleClick()}  
                onMouseEnter={() => this.handleMouseEnter()}
                onMouseLeave={() => this.handleMouseLeave()}
                >
                <div className={styles.label}>
                    {this.props.categoryName}

                    <a>
                        <Image className={styles.icon} src={iconPNG} />
                        <Image className={styles.icon} src={iconGIF} />
                    </a>

                    <Image className={styles.arrow} src="/resources/icons/arrow.svg" fluid />
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default CategoryBox;