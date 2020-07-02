// export const FETCH_PRODUCTS_BEGIN   = 'FETCH_PRODUCTS_BEGIN';
export const SET_EMPLOYEES_LIST = 'SET_EMPLOYEES_LIST';
export const FETCH_EMPLOYEE_DETAIL = 'FETCH_EMPLOYEE_DETAIL';
export const DELETE_EMPLOYEE = 'DELETE_EMPLOYEE';
export const SET_ERROR = 'SET_ERROR';

// export const fetchProductsBegin = () => ({
//   type: FETCH_PRODUCTS_BEGIN
// });

export const setEmployeesList = list => ({
  type: SET_EMPLOYEES_LIST,
  payload: list
});

export const deleteEmployee = list => ({
    type: DELETE_EMPLOYEE,
    payload: list
  });

export const setError = error => ({
  type: SET_ERROR,
  payload: error
});