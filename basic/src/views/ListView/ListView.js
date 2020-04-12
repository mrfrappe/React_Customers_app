import React from 'react';
import styles from './list-view.module.scss';
import AppContext from '../../context';
import List from '../../components/List/List';
import Form from '../../components/Form/Form';



const ListView = () => {
    return (
        <AppContext.Consumer>
            {(context) => (
                <div className="row">
                    <List items={context.items}/>
                    <Form/>
                </div>
    )}
        </AppContext.Consumer>
    )
}

export default ListView;