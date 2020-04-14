import React from 'react';
import Title from '../Title/Title';
import Button from '../Button/Button';
import styles from './modal.module.scss';
import PropTypes from 'prop-types';
import AppContext from '../../context';
import Form from '../Form/Form';

const Modal = ({id, isAlert}) => {
    return (
        <AppContext.Consumer>
        {(context) => (
            isAlert === true ? (
                <>
                <div className={styles.wrapper}>
                    <div className={styles.modal}>
                        <Title title="Alert"></Title>
                        <div className={styles.modal__content}>
                            customer will be delete. Are you sure?
                        </div>
                        <div className={styles.modal__footer}>
                        <Button tag="button" onClick={context.onModalClose}>Cancel</Button><Button tag="button" onClick={(e) => context.onDeleteItem(e, id)}>Delete</Button>
                        </div>
                    </div>
                </div>
                <div className={styles.backdrop}></div>
                </>
            ) : (
                <>
                <div className={styles.wrapper__invoice}>
                    <div className={styles.modal}>
                        <div className={styles.modal__content}>
                            <Form edit={false} objectType={'invoice'}/>
                        </div>
                        <div className={styles.modal__footer}>
                        </div>
                    </div>
                </div>
                <div className={styles.backdrop}></div>
                </>
            )

        )}
        </AppContext.Consumer>
       
    )
}

Modal.propTypes = {
    isModalOpen: PropTypes.bool


}
Modal.defaultProps = {
    isModalOpen: false

}


export default Modal;