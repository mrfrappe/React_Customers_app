import React from 'react';
import styles from './list-view.module.scss';
import AppContext from '../../context';
import List from '../../components/List/List';
import Form from '../../components/Form/Form';



const ListView = () => {
    return (
        <AppContext.Consumer>
            {(context) => (
                <div className={styles.wrapper}>
                    <div className={styles.wrapper__list}>
                        <List items={context.items}/>
                    </div>
                    <div className={styles.wrapper__forms}>
                        <Form mode="add" type="customers" />
                        {/* <Form mode="add" type="invoices" /> */}
                    </div>
                </div>
    )}
        </AppContext.Consumer>
    )
}

export default ListView;