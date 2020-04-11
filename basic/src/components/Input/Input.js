import React from 'react';
import styles from './input.module.scss';
import PropTypes from 'prop-types'

const Input = ({tag: Tag, name, text}) => {
    return (
        <Tag className={styles.input}
            type="text"
            placeholder={text}
            name={name}
            id={name}/>
    )
}

Input.propTypes = {
    tag: PropTypes.string,
    name: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,

}
Input.defaultProps = {
    tag: 'input'
}


export default Input;