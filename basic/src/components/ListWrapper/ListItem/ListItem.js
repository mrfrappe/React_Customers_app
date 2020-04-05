import React from 'react';
import './ListItem.scss'

const ListItem = () => {
    return (
        <li className="list-item">
           <div className="list-item__image"><img /></div>
           <div className="list-item__content">
                <div className="employee-info">
   
                    <div className="employee-info__name">
                    <div className="employee-info__name--firstname">
                        John
                    </div> 
                    <div className="employee-info__name--lastname">
                        Smith
                    </div> 
                    </div> 
    
                    <div className="employee-info__email">john.smith@protonmail.com</div> 
                    <div className="employee-info__gender">Not set</div> 
                    <div className="employee-info__action">
                        <div className="button"><i className="fas fa-edit"></i>Details</div>
                    </div> 
                </div>
           </div>
        </li>
    )
}

export default ListItem;