import {
    // FETCH_PRODUCTS_BEGIN,
    SET_EMPLOYEES_LIST,
    SET_ERROR
  } from './actions';

const initialState = {
    employeesList: [],
    employeeDetail : {
        employee_name: "",
        employee_salary: "",
        employee_age: "",
        profile_image: ""
    },
    loading: false,
    error: null
};

export default function reducer(state = initialState, action) {
    switch(action.type) {
        case SET_EMPLOYEES_LIST:
            return {
            ...state,
            employeesList: [...action.payload]
            };

        case SET_ERROR:
            return {
                ...state,
                error: action.payload,
            };

        default:
            return state;
    }
}