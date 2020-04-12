import React from 'react';
import styles from './button.module.scss';
import PropTypes from 'prop-types'

const Button = ({tag, children, additionalClass, href}) => {

    var buttonClass = (additionalClass) ? styles.button__xl : styles.button;
    return (
        tag === 'button' ? (
            <button type="submit" className={buttonClass}>
                {children}
            </button>
        ) :  (
            <a className={buttonClass}
               href={href}>
                {children}
            </a>
        )
    )
}


export default Button;