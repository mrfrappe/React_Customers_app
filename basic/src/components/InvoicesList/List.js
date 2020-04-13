import React from 'react';
import ListItem from './ListItem'
import styles from './invoices-list.module.scss';

const List = ({items, currencySign}) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.wrapper__header}>
                <div className={styles.invoiceInfo__id}>Id</div> 
                <div className={styles.invoiceInfo__net}>Net</div> 
                <div className={styles.invoiceInfo__tax}>Tax</div> 
                <div className={styles.invoiceInfo__gross}>Gross</div> 
                <div className={styles.invoiceInfo__total}>Total</div> 
                <div className={styles.invoiceInfo__payed}>Payed</div> 
                <div className={styles.invoiceInfo__create_at}>Create at</div> 
            </div>
            <ul className={styles.list}>
                {items.map(item => 
                    <ListItem key={item.id} {...item} currencySign={currencySign}/>
                )}
            </ul>
        </div>
    )
}

List.propTypes = {


}
List.defaultProps = {


}


export default List;