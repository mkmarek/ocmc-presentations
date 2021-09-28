import React from "react";

import { useQuery, gql } from "@apollo/client";
import Product from "./product";

export default function ProductList({ group }: any) {
  const { loading, error, data } = useQuery(
    gql`
      query ProductList($group: String!) {
        products(group: $group) {
          id
          name
          price
          comments {
            id
            content
            user {
              name
              imageUrl
            }
          }
        }
      }
    `,
    { variables: { group } }
  );

  if (loading) {
    return <div>LOADING.....</div>;
  }

  if (error) {
    return <div>Error: {`${error}`}</div>;
  }

  return (
    <section
      style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}
    >
      {data.products.map((e: any) => (
        <Product {...e} />
      ))}
    </section>
  );
}
