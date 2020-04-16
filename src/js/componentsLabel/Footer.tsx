import * as React from "react";
import License from "./License";
const styles = require("./Footer.scss");

class Footer extends React.Component<{domain:any, year:any}, {}> {
    render() {
        return (
            <div className={styles.footer}>
                <div className={styles.domainName}>
                    <a >{this.props.domain}</a>
                </div>
                <div className={styles.year}>
                    <a >2020</a>
                </div>
                <div className={styles.license}>
                    <License/>
                </div>
                <div className={styles.questionMark}>
                    <a href="/" title="What is the privacy rating?" target="_blank" />
                </div>
            </div>
        );
    }
}

export default Footer;