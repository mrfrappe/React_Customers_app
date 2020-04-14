import React from 'react';
import AppContext from '../../context';
import styles from './form.module.scss';
import Title from '../Title/Title';
import Input from '../Input/Input';
import Button from '../Button/Button';


const Form = ({edit, object, objectType}) => {
    let editMode = (edit) ? true : false;


    return (
        <AppContext.Consumer>
            {(context) => (
                    editMode === true ? (
                        <div className={styles.wrapper__edit}>
                            <Title title="Edit customer"/>
                            <form className={styles.form} 
                                  onSubmit={(e) => context.onEditItem(e, object)} 
                                  data-customer-id={object.customerObject.id}>
                                <Input 
                                    name="first_name"
                                    text="First name"
                                    value={object.customerObject.first_name}
                                />
                                <Input 
                                    name="last_name"
                                    text="Last name"
                                    value={object.customerObject.last_name}
                                />
                                <Input 
                                    name="email"
                                    text="Email"
                                    value={object.customerObject.email}
                                />
                                <Input 
                                    name="gender"
                                    text="Gender"
                                    value={object.customerObject.gender}
                                />
                                <Input 
                                    name="company"
                                    text="Company"
                                    value={object.customerDetailsObject.company}
                                />
                                <Input 
                                    name="address"
                                    text="Address"
                                    value={object.customerDetailsObject.address}
                                />
                                <Input 
                                    name="city"
                                    text="City"
                                    value={object.customerDetailsObject.city}
                                />
                                <Input 
                                    name="country"
                                    text="Country"
                                    value={object.customerDetailsObject.country}
                                />
                                <Input 
                                    name="iban"
                                    text="Iban"
                                    value={object.customerDetailsObject.iban}
                                />
                                <Input 
                                    name="currency"
                                    text="Currency"
                                    value={object.customerDetailsObject.currency}
                                    disabled={true}

                                />
                                <Input 
                                    name="create_at"
                                    text="create_at"
                                    value={object.customerDetailsObject.create_at}
                                    disabled={true}
                                />
                                <Input 
                                    name="update_at"
                                    text="update_at"
                                    value={object.customerDetailsObject.update_at}
                                    disabled={true}

                                />
                                <Button tag="button" secondary="true">Save </Button>
                            </form>
                        </div>
                    ) : (
                        objectType == 'invoice' ?
                        (
                            <div className={styles.wrapper}>
                                <Title title="Add new invoice"/>
                                <form className={styles.form} onSubmit={context.onAddInvoice}>
                                    <Input 
                                        name="net"
                                        text="Netto"
                                    />
                                    <Input 
                                        name="gross"
                                        text="Gross"
                                    />
                                     <Input 
                                        name="tax"
                                        text="Tax"
                                    />
                                    <Input 
                                        name="total"
                                        text="Total"
                                    />
                                    <Input 
                                        name="payed"
                                        text="Payed"
                                    />
                                    <Button tag="button" onClick={context.onModalInvoiceToggle}>Cancel</Button><Button tag="button" secondary="true" onClick={(e) => context.onAddInvoice(e)}>Add invoice</Button>

                                </form>
                            </div>
                        ) :
                        (
                        <div className={styles.wrapper}>
                            <Title title="Add new customer"/>
                            <form className={styles.form} onSubmit={context.onAddItem}>
                                <Input 
                                    name="first_name"
                                    text="First name"
                                />
                                <Input 
                                    name="last_name"
                                    text="Last name"
                                />
                                <Input 
                                    name="email"
                                    text="Email"
                                />
                                <Input 
                                    name="gender"
                                    text="Gender"
                                />
                                <Button tag="button" secondary="true" >New customer </Button>
                            </form>
                        </div>)

                    )


            )}

        </AppContext.Consumer>
    )

};

export default Form;