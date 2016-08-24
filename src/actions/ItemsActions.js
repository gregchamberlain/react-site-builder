export const ItemConstants = {
  ADD_ITEM: 'ADD_ITEM',
  REMOVE_ITEM: 'REMOVE_ITEM',
};

export const addItem = (component, props) => ({
  type: ItemConstants.ADD_ITEM,
  component,
  props
});

export const removeItem = i => ({
  type: ItemConstants.REMOVE_ITEM,
  i,
});