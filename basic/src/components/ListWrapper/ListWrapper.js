import React from 'react';
import App from '../../App';
import Header from '../Header/Header';
import ListItem from './ListItem/ListItem';
import styles from './list-wrapper.module.scss';
import { employeesData } from '../../assets/data/employeesData';

const ListWrapper = ({items}) => {
    return (
        <div className={styles.wrapper}>
            <Header title="Employees list"/>
            <ul className={styles.list}>
                {items.sort((a,b) => a.id < b.id).map(item => 
                    <ListItem key={item.id} {...item} />
                )};
            </ul>
        </div>
    )
}


export default ListWrapper;