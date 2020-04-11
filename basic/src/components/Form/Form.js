import React from 'react';
import styles from './form.module.scss';
import Header from '../Header/Header';
import Input from '../Input/Input';
import Button from '../Button/Button';


const Form = ({submitFunction}) => {
    return (
        <div className={styles.wrapper}>
            <Header title="Add new employee"/>
            <form className={styles.form} onSubmit={submitFunction}>
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
                <Button tag="button">New employee </Button>
            </form>
        </div>
    )

};

export default Form;