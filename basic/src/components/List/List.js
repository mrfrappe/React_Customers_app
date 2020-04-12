import React from 'react';
import Title from '../Title/Title';
import ListItem from './ListItem/ListItem';
import styles from './list.module.scss';
import { employeesData } from '../../assets/data/employeesData';

const List = ({items}) => {
    return (
        <div className={styles.wrapper}>
            <Title title="Employees list"/>
            <ul className={styles.list}>
                {items.sort((a,b) => a.id < b.id).map(item => 
                    <ListItem key={item.id} {...item} />
                )};
            </ul>
        </div>
    )
}


export default List;