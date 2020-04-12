import React from 'react';
import styles from './navigator.module.scss';
import {Link} from 'react-router-dom';

const Navigator = () => {
    return (
        <ul className={styles.wrapper}>
            <li><Link to="/">Back to list</Link></li>
        </ul>
    )

}

export default Navigator;