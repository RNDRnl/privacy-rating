import * as React from "react";
import {Image, OverlayTrigger, Tooltip} from "react-bootstrap";
const styles = require("./License.scss");

function renderTooltip(props) {
    return <Tooltip className={styles.license} {...props}>
        <div className={styles.license}>
            <Image className={styles.tooltip} src={`${process.env.BASE_PATH}/resources/icons/by.svg`}/>
            <Image className={styles.tooltip} src={`${process.env.BASE_PATH}/resources/icons/nc-eu.svg`}/>
            <Image className={styles.tooltip} src={`${process.env.BASE_PATH}/resources/icons/nd.svg`}/>
            <div className={styles.licenseText}>3.0</div>
        </div>
    </Tooltip>;
}

const CreativeCommons = () => (
    <OverlayTrigger
        placement="left"
        delay={{ show: 250, hide: 400 }}
        overlay={renderTooltip}
    >
        <div className={styles.explain}>
            <a href={"https://creativecommons.org/licenses/by-nc-nd/3.0/ "} target="_blank" title="Creative Commons"/>
        </div>
    </OverlayTrigger>
);

class License extends React.Component{
    render() {
        return (
            <div className={styles.license}>
                <CreativeCommons/>
            </div>
        );
    }
}

export default License;