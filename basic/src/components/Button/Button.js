import React from 'react';
import styles from './button.module.scss';
import PropTypes from 'prop-types'

const Button = ({tag, children, additionalClass}) => {

    var buttonClass = (additionalClass) ? styles.button__xl : styles.button;
    console.log(buttonClass)
    return (
        tag === 'button' ? (
            <button type="submit" className={buttonClass}>
                {children}
            </button>
        ) :  (
            <a className={buttonClass}>
                {children}
            </a>
        )
    )
}


export default Button;