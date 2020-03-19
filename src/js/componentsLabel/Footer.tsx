import * as React from "react";
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
                <div className={styles.reportFlag}>
                    <a href="/" title="Report" />
                </div>
            </div>
        );
    }
}

export default Footer;