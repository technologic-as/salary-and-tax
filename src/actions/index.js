export const FORM_CHANGE = 'FORM_CHANGE';

export const formChange = (values) => ({
  type: FORM_CHANGE, ...values,
});

export const inputHasChanged = (values) => {
  return dispatch => {
    dispatch(formChange(values));
  }
};
