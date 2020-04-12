import React from 'react';
import styles from './button.module.scss';
import PropTypes from 'prop-types'
import {Link} from "react-router-dom";

const Button = ({tag, children, additionalClass, href, clickFn}) => {

    var buttonClass = (additionalClass) ? styles.button__xl : styles.button;
    return (
        tag === 'button' ? (
            <button type="submit" className={buttonClass} onClick={clickFn}>
                {children}
            </button>
        ) :  (
            <Link className={buttonClass}
               to={href}>
                {children}
            </Link>
        )
    )
}


export default Button;