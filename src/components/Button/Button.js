import React from 'react';
import styles from './button.module.scss';
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";

const Button = ({tag, children, secondary, href, ...props}) => {

    var buttonClass = (secondary) ? styles.button__xl : styles.button;
    return (
        tag === 'button' ? (
            <button type="submit" className={buttonClass} {...props}>
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