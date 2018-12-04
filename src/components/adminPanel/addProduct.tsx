// ----------------------------------------------------------------------------
// IMPORTS

/* NPM */
import * as React from "react";

// Use the `<Mutation>` component from the React Apollo lib to set-up the
// mutation block that will allow us to fire up GraphQL mutations.
import {Mutation} from "react-apollo";

// Mutation to add a new product to state
import addProduct from "@/mutations/AddProduct";
import {ChangeEvent} from "react";
import {connect} from "react-redux";
import {StyledInputWrapper} from "@/components/adminPanel/styled";
import * as actions from "../../reduxStore/actions/actionTypes";

// ----------------------------------------------------------------------------
class AddProductComponent extends React.Component {
    private handleNewProductCreated = () => alert('Product created successfully.');
    private handleNewProductCreatedError = (error) => error.graphQLErrors.map(({message}) => (
        console.error(message)
    ))
    private render = () => (
        <Mutation mutation={addProduct} onCompleted={this.handleNewProductCreated} onError={this.handleNewProductCreatedError}>
            {
                doAddProduct => {
                    const {addProductForm, updateProductForm} = this.props;

                    // Create an `onClick` handler to run the mutation
                    function handleButtonClick() {
                        return doAddProduct({variables: {product: addProductForm}});
                    }

                    const handleFieldChange = (e: ChangeEvent) => {
                        if (e.target.value) {
                            addProductForm[e.target.name] = e.target.value;
                            updateProductForm(addProductForm);
                        }
                    };

                    return (
                        <>
                            <h3>New Product</h3>
                            <StyledInputWrapper>
                                <label>Name</label>
                                <input type="text" onChange={handleFieldChange} name="name"/>
                            </StyledInputWrapper>
                            <StyledInputWrapper>
                                <label>Description</label>
                                <textarea onChange={handleFieldChange} name="description"/>
                            </StyledInputWrapper>
                            <StyledInputWrapper>
                                <label>Price</label>
                                $<input type="text" onChange={handleFieldChange} name="price"/>
                            </StyledInputWrapper>
                            <button onClick={handleButtonClick}>Save</button>
                        </>
                    );
                }
            }
        </Mutation>
    );
}

function mapStateToProps(state) {
    return {
        addProductForm: state.addProductForm,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        updateProductForm: (newProductForm) => dispatch({type: actions.UPDATE_NEW_PRODUCT_FORM, newProductForm}),
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(AddProductComponent);
