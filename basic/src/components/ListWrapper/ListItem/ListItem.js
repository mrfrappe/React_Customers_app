import React from 'react';
import PropTypes from 'prop-types';
import Button from '../../Button/Button'
import './list-item.scss'

const ListItem = ({first_name, last_name, email, gender}) => {

    return (
        <li className="list-item">
           <div className="list-item__image"><img /></div>
           <div className="list-item__content">
                <div className="employee-info">
   
                    <div className="employee-info__name">
                    <div className="employee-info__name--firstname">
                        {first_name || 'John'}
                    </div> 
                    <div className="employee-info__name--lastname">
                        {last_name || 'Smith'}
                    </div> 
                    </div> 
    
                    <div className="employee-info__email">{email || 'john.smith@protonmail.com'}</div> 
                    <div className="employee-info__gender">{gender || 'not set'}</div> 
                    <div className="employee-info__action">
                        <Button>Details</Button>
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