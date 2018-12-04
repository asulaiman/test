// Add products to the products in local state

// ----------------------------------------------------------------------------
// IMPORTS

/* NPM */

// GraphQL tag library, for creating GraphQL queries from plain
// template text
import gql from "graphql-tag";

// ----------------------------------------------------------------------------

// GraphQL query for retrieving the new product from local state
export default gql`
  mutation AddProduct($product: IProduct) {
    addProduct(product: $product) @client
  }
`;
