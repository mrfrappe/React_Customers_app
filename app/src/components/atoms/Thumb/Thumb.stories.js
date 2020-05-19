import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import Thumb from './Thumb';

export default { title: 'Atoms/Thumb' };

export const Primary = () => (
  <Thumb>
    <FontAwesomeIcon icon={faUser} />
  </Thumb>
);
export const PrimaryXL = () => (
  <Thumb secondary>
    <FontAwesomeIcon icon={faUser} />
  </Thumb>
);
