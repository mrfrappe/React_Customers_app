import React from 'react';
import styles from './thumb.module.scss';

const Thumb = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.thumb}>
                <div className={styles.thumb__image}>
                    <img />
                </div>
            </div>
        </div>
    )
}

export default Thumb
