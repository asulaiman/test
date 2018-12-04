// ----------------------------------------------------------------------------
// IMPORTS

/* NPM */
import * as React from "react";

// grab the `<Query>` component, because we'll want to 'listen' to the current
// product list as it changes
import {Query} from "react-apollo";

// Get the current products stored in local Apollo state
import getProducts from "@/queries/getProducts";

// Mutation to add a new product to state
import {IProduct} from "@/graphql/state";
import NoProductsAdded from "./noProductsAdded";
import {StyledContainer, StyledRow} from "@/components/customer/styled";

export default () => (
    <Query query={getProducts}>
        {
            ({data, error}) => {
                if (error) {
                    {
                        error.graphQLErrors.map(({message}) => console.error(message));
                    }
                }
                else if (data.state && data.state.products) {
                    return (
                        <StyledContainer>
                            {data.state.products.length === 0 ?
                                <NoProductsAdded/> : data.state.products.map((product: IProduct, index: number) =>
                                    (
                                        <div key={index}>
                                            <StyledRow>
                                                <h4>Product Name:</h4>
                                                <h4> {product.name}</h4>
                                            </StyledRow>
                                            <StyledRow>
                                                <h4>Description:</h4>
                                                <p>{product.description}</p>
                                            </StyledRow>
                                            <StyledRow>
                                                <h4>Price:</h4>
                                                <h5>${product.price}</h5>
                                            </StyledRow>
                                        </div>
                                    ))}

                        </StyledContainer>
                    );
                }
                return null;
            }
        }
    </Query>
);