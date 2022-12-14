import React from "react";
import { Products2 } from "../apifolder/TopProductsApi";
import Productss from "./Productss";
function Products() {
  return (
    <div className="flex flex-wrap p-5">
      {Products2.map((Product, index) => {
        return <Productss item={Product} key={index} />;
      })}
    </div>
  );
}
export default Products;
