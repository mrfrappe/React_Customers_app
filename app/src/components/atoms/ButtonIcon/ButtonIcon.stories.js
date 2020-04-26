import React from 'react';
import ButtonIcon from './ButtonIcon';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit } from '@fortawesome/free-solid-svg-icons'


export default { title: 'Atoms/ButtonIcon' };

export const Default = () => <ButtonIcon>
    <FontAwesomeIcon icon={faEdit} />
</ButtonIcon>;
