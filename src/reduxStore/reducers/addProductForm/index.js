import initialState from '../initialState';
import {UPDATE_NEW_PRODUCT_FORM, GET_NEW_PRODUCT_FORM } from '../../actions/actionTypes';

export default function addProductForm(state = initialState.addProductForm, action) {
    switch (action.type) {
        case GET_NEW_PRODUCT_FORM:
            return state;
        case UPDATE_NEW_PRODUCT_FORM:
            return action.newProductForm;
        default:
            return state;
    }
}