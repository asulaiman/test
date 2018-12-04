import reducer from './index';
import {UPDATE_NEW_PRODUCT_FORM, GET_NEW_PRODUCT_FORM } from '../../actions/actionTypes';
import initialState from "../initialState";
describe('addProductForm - Store reducers', () => {
    it('gets form when GET_NEW_PRODUCT_FORM is dispatched', () => {
        const state = reducer(initialState.addProductForm, { type: GET_NEW_PRODUCT_FORM });
        expect(state).toEqual(initialState.addProductForm);
    });
    it('updates form when UPDATE_NEW_PRODUCT_FORM is dispatched', () => {
        const state = { ...initialState.addProductForm };
        const newProductForm = { name: 'product', cost: 22 };
        const newState = reducer(
            state,
            { type: UPDATE_NEW_PRODUCT_FORM, newProductForm},
        );

        expect(newState).not.toEqual(state);
        expect(newState.name).toBe(newProductForm.name);
        expect(newState.cost).toBe(newProductForm.cost);
    });
});
