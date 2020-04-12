import React from 'react';
import PropTypes from 'prop-types';
import Button from '../../Button/Button'
import './list-item.scss'

const ListItem = ({first_name, last_name, email, gender}) => {

    return (
        <li className="list-item">
           <div className="list-item__image"><img /></div>
           <div className="list-item__content">
                <div className="employee-info row">
   
                    <div className="employee-info__name col-md-4">
                    <div className="employee-info__name--firstname">
                        {first_name || 'John'}
                    </div> 
                    <div className="employee-info__name--lastname">
                        {last_name || 'Smith'}
                    </div> 
                    </div> 
    
                    <div className="employee-info__email col-md-4">{email || 'john.smith@protonmail.com'}</div> 
                    <div className="employee-info__gender col-md-2">{gender || 'not set'}</div> 
                    <div className="employee-info__action col-md-2">
                        <Button>Edit</Button>
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