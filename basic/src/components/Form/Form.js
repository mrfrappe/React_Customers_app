import React from 'react';
import styles from './form.module.scss';
import Title from '../Title/Title';
import Input from '../Input/Input';
import Button from '../Button/Button';


const Form = ({submitFunction}) => {
    return (
        <div className={styles.wrapper}>
            <Title title="Add new employee"/>
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
                <Button tag="button" additionalClass="xl">New employee </Button>
            </form>
        </div>
    )

};

export default Form;