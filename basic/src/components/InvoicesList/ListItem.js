import React from 'react';
import HTMLReactParser from 'html-react-parser';
import styles from './invoices-item.module.scss';

const ListItem = ({id, customer__id, net, tax, gross, payed, total,create_at, currencySign}) => {
    net = formatMoney(net);
    return (
        <li className={styles.listItem}>
                <div className={styles.invoiceInfo__id}>{id}</div> 
    <div className={styles.invoiceInfo__net}>{net} <span> {currencySign} </span></div> 
                    <div className={styles.invoiceInfo__tax}>{tax + '%'}</div> 
                    <div className={styles.invoiceInfo__gross}>{calculateGross(net,tax)}  <span> {currencySign} </span></div> 
                    <div className={styles.invoiceInfo__total}>{calculateTotal(net,tax)}  <span> {currencySign} </span></div> 
                    <div className={styles.invoiceInfo__payed}>{(payed === true) ? 'payed' : '' }</div> 
                    <div className={styles.invoiceInfo__create_at}>{create_at}</div> 

        </li>
    )
}
const formatMoney = (value) => {
    return Number.parseFloat(value)
}

const calculateGross = (net,tax) => {
    return (net*tax / 100).toFixed(2);
};

const calculateTotal = (net,tax) => {
return (net + net * tax /100).toFixed(2);
};

ListItem.propTypes = {


}
ListItem.defaultProps = {


}


export default ListItem;