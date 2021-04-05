/* eslint-disable import/prefer-default-export */
export const removeItem = (itemType, id) => {
  console.log('Detele ', itemType, id);
  return {
    type: 'REMOVE_ITEM',
    payload: {
      itemType,
      id,
    },
  };
};

export const addItem = (itemType, object) => {
  console.log('Add ', itemType, object);
  return {
    type: 'ADD_ITEM',
    payload: {
      itemType,
      object,
    },
  };
};

export const editItem = (itemType, id, object) => {
  console.log('Edit ', itemType, id, object);
  return {
    type: 'EDIT_ITEM',
    payload: {
      itemType,
      object,
      id,
    },
  };
};
