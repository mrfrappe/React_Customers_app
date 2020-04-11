import React from 'react';
import styles from './button.module.scss';
import PropTypes from 'prop-types'

const Button = ({tag, children}) => {
    return (
        tag === 'button' ? (
            <button type="submit" className={styles.button}>
                {children}
            </button>
        ) :  (
            <a className={styles.button}>
                {children}
            </a>
        )
    )
}


export default Button;