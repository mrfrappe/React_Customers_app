import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button/Button'
import styles from './list-item.module.scss'

const ListItem = ({id, first_name, last_name, email, gender}) => {

    return (
        <li className={styles.listItem}>
           <div className={styles.listItem__image}><img /></div>
           <div className={styles.listItem__content}>
                <div className={styles.customerInfo}>
   
                    <div className={styles.customerInfo__name}>
                    <div className={styles.customerInfo__name_firstname}>
                        {first_name || 'John'}
                    </div> 
                    <div className={styles.customerInfo__name_lastname}>
                        {last_name || 'Smith'}
                    </div> 
                    </div> 
    
                    <div className={styles.customerInfo__email}>{email || 'john.smith@protonmail.com'}</div> 
                    <div className={styles.customerInfo__gender}>{gender || 'not set'}</div> 
                    <div className={styles.customerInfo__action}>
                        <Button href={"/edit/:" + id}>Edit</Button>
                    </div> 
                </div>
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