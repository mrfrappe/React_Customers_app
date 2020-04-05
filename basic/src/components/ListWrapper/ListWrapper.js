import React from 'react';
import App from '../../App';
import ListItem from './ListItem/ListItem';
import ListHeader from './ListHeader/ListHeader';


const ListWrapper = () => {
    return (
        <ul>
            <ListHeader />
            <ListItem />
        </ul>
    )
}

export default ListWrapper;