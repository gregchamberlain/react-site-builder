export const LayoutConstants = {
  CHANGE_LAYOUT: 'CHANGE_LAYOUT',
  SAVE_LAYOUT: 'SAVE_LAYOUT',
}

export const changeLayout = layout => ({
  type: LayoutConstants.CHANGE_LAYOUT,
  layout
});

export const saveLayout = () => ({
  type: LayoutConstants.SAVE_LAYOUT
})