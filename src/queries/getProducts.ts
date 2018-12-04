// Get local count state

// ----------------------------------------------------------------------------
// IMPORTS

/* NPM */

// GraphQL tag library, for creating GraphQL queries from plain
// template text
import gql from "graphql-tag";

// ----------------------------------------------------------------------------

// GraphQL query for retrieving the saved products
export default gql`
  {
    state @client {
      products @client {
        name
        description
        price
      }
    }
  }
`;
