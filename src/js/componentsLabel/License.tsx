import * as React from "react";
import {Image, OverlayTrigger, Tooltip} from "react-bootstrap";
const styles = require("./License.scss");

const TooltipRef : any = Tooltip;
const ImageRef : any = Image;
const OverlayTriggerRef : any = OverlayTrigger;

function renderTooltip(props) {
    return <TooltipRef className={styles.license} {...props}>
        <div className={styles.license}>
            <ImageRef className={styles.tooltip} src={`${process.env.BASE_PATH}/resources/icons/by.svg`}/>
            <ImageRef className={styles.tooltip} src={`${process.env.BASE_PATH}/resources/icons/nd.svg`}/>
            <div className={styles.licenseText}>3.0</div>
        </div>
    </TooltipRef>;
}

const CreativeCommons = () => (
    <OverlayTriggerRef
        placement="left"
        delay={{ show: 250, hide: 400 }}
        overlay={renderTooltip}
    >
        <div className={styles.explain}>
            <a href={"https://creativecommons.org/licenses/by-nd/3.0/"} target="_blank" title="Creative Commons"/>
        </div>
    </OverlayTriggerRef>
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