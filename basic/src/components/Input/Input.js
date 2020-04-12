import React from 'react';
import styles from './input.module.scss';
import PropTypes from 'prop-types'

const Input = ({tag: Tag, name, text, value, disabled}) => {
    return (
        <Tag className={styles.input}
            type="text"
            placeholder={text}
            name={name}
            id={name}
            defaultValue={value}
            disabled={disabled}/>
    )
}

Input.propTypes = {
    tag: PropTypes.string,
    name: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    value: PropTypes.string,
    disabled: PropTypes.bool

}
Input.defaultProps = {
    tag: 'input',
    value: '',
    disabled: false

}


export default Input;