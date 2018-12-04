// ----------------------------------------------------------------------------
// IMPORTS

/* NPM */

import * as React from "react";
import ProductList from "./productLIst";

// ----------------------------------------------------------------------------

class Index extends React.PureComponent {
  public render() {
      return (
      <>
        <h1>Customer Page</h1>
        <ProductList />
      </>
    );
  }
}

export default Index;
