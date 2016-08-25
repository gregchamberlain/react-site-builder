export const OPEN_EDITOR = 'OPEN_EDITOR';

export const openEditor = (i, inputTypes) => ({
  type: OPEN_EDITOR,
  i,
  inputTypes
});