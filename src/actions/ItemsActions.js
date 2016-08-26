export const ItemConstants = {
  ADD_ITEM: 'ADD_ITEM',
  REMOVE_ITEM: 'REMOVE_ITEM',
  UPDATE_PROPS: 'UPDATE_PROPS'
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

export const updateProps = (i, props) => ({
  type: ItemConstants.UPDATE_PROPS,
  i,
  props,
});
