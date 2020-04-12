import React from 'react';
import styles from './title.module.scss';

const Title = ({title}) =>  {
    return (
        <div className={styles.header}>
            <h2 className={styles.header__h2}>{title}</h2>
        </div>
    )
}

export default Title;