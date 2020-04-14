import React from 'react';
import styles from './details-view.module.scss';
import AppContext from '../../context';
import Title from '../../components/Title/Title';
import Form from '../../components/Form/Form';
import Button from '../../components/Button/Button';
import Thumb from '../../components/Thumb/Thumb';
import Modal from '../../components/Modal/Modal';
import Navigator from '../../components/Navigator/Navigator';
import List from '../../components/InvoicesList/List';
import getSymbolFromCurrency from 'currency-symbol-map'

let customerObject = {};
let customerDetailsObject = {};
let invoicesCollection = {};
let currencySign = '';

const DetailsView = () => {

    const customerId = Number.parseInt(window.location.href.substr(window.location.href.lastIndexOf(":") + 1, window.location.href.length ));

    return (

            <div className={styles.wrapper}>
            <Navigator />
            <AppContext.Consumer>
                {(context) => (
                    <div className={styles.wrapper}>
                    {
                    getcustomerObject(context.items, customerId),
    
                    getcustomerDetails(context.itemsDetails, 
                        customerId),
    
                    getCustomersInvoices(context.invoicesData, customerId)
                    }

                    {customerObject != undefined && customerDetailsObject != undefined ? 
                    (
                    <>
                            <Title title={customerObject.first_name + ' ' + customerObject.last_name + ' ID[' + customerObject.id + ']'}></Title>
                            <div className={styles.wrapper__content}>
                                <div className={styles.wrapper__thumb}>
                                    <Thumb/>
                                    <Button tag='button' secondary="true" onClick={(e) => context.onModalOpen(e, customerId)}>Delete</Button>
                                </div>
                                <Form edit="true" object={{customerObject, customerDetailsObject}}/>
                            </div>
                            <div claaaName={styles.wrapper__header}>
                                <Title title="Invoices"></Title>
                                <Button tag='button'  secondary="true" onClick={context.onModalInvoiceToggle}>Add invoice</Button>
                            </div>
                            <div className={styles.wrapper__content}>
                                <List items={invoicesCollection} currencySign={currencySign}></List>
                            </div>
                       
                        {(context.isModalOpen == true) ? 
                            (<Modal id={customerId} isAlert={true}/>):( <></>)
                        }
                        {(context.isModalInvoiceOpen == true) ? 
                            (<Modal id={customerId} isAlert={false}/>):( <></>)
                        }
                    
                    </>
                    ):(
                        <div className={styles.wrapper__info}>
                            <div className={styles.wrapper__infoText}>
                                customer was deleted.
                            </div>
                        </div>
                    )}
            </div>
                )}
            </AppContext.Consumer>
            </div>



    )
}

const getcustomerObject = (customerList, customerId) => {
    // return new Promise((resolve, reject) => {
    //     let object = customerList.find(item => item.id === customerId);

    //     if (object){
    //         resolve(object)
    //     }

    //     reject(new Error("customer don't exist"));
    // });
    customerObject = customerList.find(item => item.id === customerId);
    
}
const getcustomerDetails = (customerDetailsLit, 
customerId) => {
            // return new Promise((resolve, reject) => {
    //     let object = customerDetailsLit.find(item => item.id === customerId);

    //     if (object){
    //         resolve(object)
    //     }

    //     reject(new Error("customer details don't exist"));
    // });
    customerDetailsObject = customerDetailsLit.find(item => item.id === customerId);
    currencySign = (customerDetailsObject) ? getSymbolFromCurrency(customerDetailsObject.currency_code) : '';

}
const getCustomersInvoices = (invoicesList, customerId) => {
    console.log(invoicesList, customerId)

    invoicesCollection = invoicesList.filter(item => item.customer__id === customerId);
    console.log(invoicesCollection)
}


export default DetailsView;