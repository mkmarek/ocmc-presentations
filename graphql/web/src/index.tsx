import React from 'react';
import { render } from 'react-dom';

import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider
  } from "@apollo/client";

  import ProductList from './product-list'

  const client = new ApolloClient({
    uri: 'http://localhost:4000',
    cache: new InMemoryCache()
  });

  function App() {
    return (
      <div>
        <strong>Top picks!</strong>
        <ProductList group="top" />
        <hr />
        <strong>Brand new in store!</strong>
        <ProductList group="latest" />
      </div>
    );
  }
  
  render(
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>,
    document.getElementById('root'),
  );