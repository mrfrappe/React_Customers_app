import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button/Button'
import styles from './list-item.module.scss'

const ListItem = ({id, first_name, last_name, email, gender}) => {

    return (
        <li className={styles.listItem}>
                     <div className={styles.listItem__image}><img /></div>
   
                    <div className={styles.listItem__name}>
                        <div className={styles.listItem__name_firstname}>
                            {first_name}
                        </div> 
                        <div className={styles.listItem__name_lastname}>
                            {last_name}
                        </div> 
                    </div> 
    
                    <div className={styles.listItem__email}>{email}</div> 
                    <div className={styles.listItem__gender}>{gender || 'not set'}</div> 
                    <div className={styles.listItem__action}>
                        <Button href={"/edit/:" + id}>Edit</Button>
                    </div> 
        </li>
    )
}

ListItem.propTypes = {
    first_name: PropTypes.string.isRequired,
    last_name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    gender: PropTypes.string.isRequired
}

ListItem.defaultProps = {

}

export default ListItem;