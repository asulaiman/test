// ----------------------------------------------------------------------------
// IMPORTS

/* NPM */

import * as React from "react";
import AddProduct from "./addProduct";

// ----------------------------------------------------------------------------

class Index extends React.PureComponent {
  public render() {
      return (
      <>
        {/* Note: The <h1> style will have a yellow background due to @/global/styles.ts! */}
        <h1>Admin Panel</h1>
        <AddProduct />
      </>
    );
  }
}

export default Index;
