import React from 'react';
import AppContext from '../../context';
import styles from './form.module.scss';
import Title from '../Title/Title';
import Input from '../Input/Input';
import Button from '../Button/Button';


const Form = ({edit, object}) => {
    let editMode = (edit) ? true : false;

    console.log(object)

    return (
        <AppContext.Consumer>
            {(context) => (
                    editMode === true ? (
                        <div className={styles.wrapper__edit}>
                            <Title title="Edit employee"/>
                            <form className={styles.form} onSubmit={context.onEditItem}>
                                <Input 
                                    name="first_name"
                                    text="First name"
                                    value={object.employeeObject.first_name}
                                />
                                <Input 
                                    name="last_name"
                                    text="Last name"
                                    value={object.employeeObject.last_name}
                                />
                                <Input 
                                    name="email"
                                    text="Email"
                                    value={object.employeeObject.email}
                                />
                                <Input 
                                    name="gender"
                                    text="Gender"
                                    value={object.employeeObject.gender}
                                />
                                <Input 
                                    name="company"
                                    text="Company"
                                    value={object.employeeDetailsObject.company}
                                />
                                <Input 
                                    name="address"
                                    text="Address"
                                    value={object.employeeDetailsObject.address}
                                />
                                <Input 
                                    name="city"
                                    text="City"
                                    value={object.employeeDetailsObject.city}
                                />
                                <Input 
                                    name="country"
                                    text="Country"
                                    value={object.employeeDetailsObject.country}
                                />
                                <Input 
                                    name="iban"
                                    text="Iban"
                                    value={object.employeeDetailsObject.iban}
                                />
                                <Input 
                                    name="currency"
                                    text="Currency"
                                    value={object.employeeDetailsObject.currency}
                                />
                                <Input 
                                    name="create_at"
                                    text="create_at"
                                    value={object.employeeDetailsObject.create_at}
                                    disabled={true}
                                />
                                <Input 
                                    name="update_at"
                                    text="update_at"
                                    value={object.employeeDetailsObject.update_at}
                                    disabled={true}

                                />
                                <Button tag="button" additionalClass="xl">Save </Button>
                            </form>
                        </div>
                    ) : (
                        
                        <div className={styles.wrapper}>
                        <Title title="Add new employee"/>
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
                            <Button tag="button" additionalClass="xl">New employee </Button>
                        </form>
                    </div>
                    )


            )}

        </AppContext.Consumer>
    )

};

export default Form;