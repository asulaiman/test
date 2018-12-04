// Local GraphQL state

// ----------------------------------------------------------------------------
// IMPORTS

/* NPM */
import {InMemoryCache} from "apollo-cache-inmemory";
import {ApolloLink} from "apollo-link";
import {ClientStateConfig, withClientState} from "apollo-link-state";
/* Local */

// Queries
import getProductsQuery from "@/queries/getProducts";

// ----------------------------------------------------------------------------

// Types

/* STATE */
export interface IState {
    products: [];
}

// 'Root', which contains the 'State' key
export interface IRoot {
    state: IState;
}

export interface IProduct {
    name: string;
    description: string;
    price: number;
}


export default function createState(cache: InMemoryCache): ApolloLink {

    // Helper function to retrieve the state from cache
    function getState(query: any): IState {
        return cache.readQuery<IRoot>({query}).state;
    }

    // Helper function to write data back to the cache
    function writeState(state: IState) {
        return cache.writeData({data: {state}});
    }

    const opt: ClientStateConfig = {
        cache,
        resolvers: {
            Mutation: {

                // mutation to add product to state
                addProduct(_, {product: newProduct}) {

                    // Get the existing state
                    const state = getState(getProductsQuery);

                    // Create new state. Note that we're assigning this to a new
                    // constant, and not simply adding a product to the existing state
                    // key on the state we retrieved. We use this immutable pattern
                    // so Apollo can see that we have a brand new object to write
                    // to the cache
                    const newState = {
                        ...state,
                        products: [...state.products, {...newProduct, __typename: "Product"}],
                    };

                    // Write the new product to the cache
                    writeState(newState);

                    // ... and return it back to the calling function, which will
                    // then become our response data
                    return newState;
                },
            },
        },
    };

    opt.defaults = {
        state: {
            __typename: "State",
            products: [],
        },
    } as IRoot;

    return withClientState(opt);
}
