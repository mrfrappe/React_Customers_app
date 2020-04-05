import React from 'react';
import './ListHeader.scss';

const ListHeader = () => {
    return (
        <li className="list-item__header">
            <div className="list-header">
                <div className="list-header__image"></div>
                <div className="list-header__name">Name</div>
                <div className="list-header__email">Email</div>
                <div className="list-header__gender">Gender</div>
                <div className="list-header__action">Action</div>
            </div>
        </li>
    )
}

export default ListHeader;