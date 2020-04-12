import React from 'react';
import styles from './details-view.module.scss';
import AppContext from '../../context';
import Title from '../../components/Title/Title';
import Form from '../../components/Form/Form';
import Button from '../../components/Button/Button';
import Thumb from '../../components/Thumb/Thumb';
import Navigator from '../../components/Navigator/Navigator';
import List from '../../components/InvoicesList/List';
import { employeesDetailsData } from '../../assets/data/employeesData';
let employeeObject = {};
let employeeDetailsObject = {};
let invoicesCollection = {};

const DetailsView = () => {

    const employeeId = Number.parseInt(window.location.href.substr(window.location.href.lastIndexOf(":") + 1, window.location.href.length ))


    return (
        <>
        <Navigator />
        <AppContext.Consumer>
            {(context) => (
                <>
                {
                getEmployeeObject(context.items, employeeId),

                getEmployeeDetails(context.itemsDetails, 
                    employeeId),

                getEmployeesInvoices(context.invoicesData, employeeId)
                }

                <div className={styles.wrapper}>
                    <Title title={employeeObject.first_name + ' ' + employeeObject.last_name + ' ID[' + employeeObject.id + ']'}></Title>
                    <div className={styles.wrapper__content}>
                        <div className={styles.wrapper__thumb}>
                            <Thumb/>
                            <Button type='button' additionalClass="xl red">Delete</Button>
                        </div>
                        <Form edit="true" object={{employeeObject, employeeDetailsObject}}/>
                    </div>
                    <Title title="Invoices"></Title>
                    <div className={styles.wrapper__content}>
                        <List items={invoicesCollection}></List>
                    </div>
                </div>
                </>
            )}
        </AppContext.Consumer>
        </>

    )
}

const getEmployeeObject = (employeeList, employeeId) => {
    // return new Promise((resolve, reject) => {
    //     let object = employeeList.find(item => item.id === employeeId);

    //     if (object){
    //         resolve(object)
    //     }

    //     reject(new Error("Employee don't exist"));
    // });
    employeeObject = employeeList.find(item => item.id === employeeId);
    
}
const getEmployeeDetails = (employeeDetailsLit, 
employeeId) => {
            // return new Promise((resolve, reject) => {
    //     let object = employeeDetailsLit.find(item => item.id === employeeId);

    //     if (object){
    //         resolve(object)
    //     }

    //     reject(new Error("Employee details don't exist"));
    // });
    employeeDetailsObject = employeeDetailsLit.find(item => item.id === employeeId);

}
const getEmployeesInvoices = (invoicesList, employeeId) => {
    console.log(invoicesList, employeeId)

    invoicesCollection = invoicesList.filter(item => item.employee__id === employeeId);
    console.log(invoicesCollection)
}


export default DetailsView;