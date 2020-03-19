import * as React from "react";
const styles = require("./LabelBar.scss");

class LabelBar extends React.Component<{rating:any}, {}> {
    render() {
        return (
            <div className={styles.holder} >
                <div className={ (this.props.rating == "A") ? styles.selected : null }>A</div>
                <div className={ (this.props.rating == "B") ? styles.selected : null }>B</div>
                <div className={ (this.props.rating == "C") ? styles.selected : null }>C</div>
                <div className={ (this.props.rating == "D") ? styles.selected : null }>D</div>
                <div className={ (this.props.rating == "E") ? styles.selected : null }>E</div>
                <div className={ (this.props.rating == "F") ? styles.selected : null }>F</div>
                <div className={ (this.props.rating == "G") ? styles.selected : null }>G</div>
            </div>
        );
    }
}

export default LabelBar;