import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Form from '../components/organisms/Form/Form';

const ModalWrapper = styled.div`
  position: fixed;
  top: 20%;
  left: calc(50% - 250px);
  right: 0;
  background: #fff;
  width: 500px;
  padding: 20px;
  align-items: center;
  justify-content: center;
  border: 1px solid #ccc;
  border-radius: 8px;
  display: ${({ isVisible }) => (isVisible ? 'flex' : 'none')};
  z-index: 10;
`;

const ModaBackdrop = styled.div`
  width: 100%;
  height: 100%;
  background: #000;
  opacity: 0.3;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  display: ${({ isVisible }) => (isVisible ? 'flex' : 'none')};
`;

// eslint-disable-next-line no-unused-vars
const Modal = ({ mode, type, isVisible, onModalClose}) => {
  return (
    <>
      <ModalWrapper isVisible={isVisible}>
        <Form mode={mode} type={type}></Form>
      </ModalWrapper>
      <ModaBackdrop isVisible={isVisible} />

      <ModaBackdrop isVisible={isVisible} onClick={() => onModalClose()}/>
    </>
  );
};

const onBackdropClick = (isVisible) => {
  // console.log(a);
  isVisible = false;
};

Modal.propTypes = {
  isVisible: PropTypes.element.isRequired,
  onModalClose: PropTypes.func.isRequired
};

export default Modal;
