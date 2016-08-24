export const ItemConstants = {
  ADD_ITEM: 'ADD_ITEM',
  REMOVE_ITEM: 'REMOVE_ITEM',
};

export const addItem = () => ({
  type: ItemConstants.ADD_ITEM,
});

export const removeItem = i => ({
  type: ItemConstants.REMOVE_ITEM,
  i,
});