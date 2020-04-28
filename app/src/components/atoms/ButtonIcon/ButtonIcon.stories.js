import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import ButtonIcon from './ButtonIcon';

export default { title: 'Atoms/ButtonIcon' };

export const Default = () => (
  <ButtonIcon>
    <FontAwesomeIcon icon={faEdit} />
  </ButtonIcon>
);
