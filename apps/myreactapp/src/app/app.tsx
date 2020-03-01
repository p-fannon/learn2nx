import React from 'react';
import { Link, Redirect, Route } from 'react-router-dom';

import { BooksFeature } from '@cfsboom/books/feature';

import { Text } from '@cfsboom/ui';

import {
  GlobalStyles,
  Header,
  Main,
  NavigationItem,
  NavigationList
} from '@cfsboom/ui';

export const App = () => {
  return (
    <>
      <GlobalStyles />
      <Header>
        <h1>Bookstore</h1>
        <NavigationList>
          <NavigationItem>
            <Link to="/books">Books</Link>
          </NavigationItem>
        </NavigationList>
      </Header>
      <Main>
        <Text>I made this!</Text>
        <Route path="/books" component={BooksFeature} />
        <Route exact path="/" render={() => <Redirect to="/books" />} />
      </Main>
    </>
  );
};

export default App;
