import React from 'react';
import 'animate.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHandPointRight} from "@fortawesome/free-regular-svg-icons/faHandPointRight";
import {faHandPointLeft} from "@fortawesome/free-regular-svg-icons/faHandPointLeft";
class Button extends React.Component {
    render() {

        return(
            <>
                <div className="button">
                    <div className="heand animate__fadeInLeftBig">
                        <FontAwesomeIcon icon={faHandPointLeft} style={{color: "#ffffff",}} size="2xl"/>
                    </div>
                    <div className="heand animate__fadeInRightBig">
                        <FontAwesomeIcon icon={faHandPointRight} style={{color: "#ffffff",}} size="2xl" />
                    </div>
                </div>
            </>
        )
    }
}

export default Button;