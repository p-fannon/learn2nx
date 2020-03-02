import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { getBooks } from '@cfsboom/books/data-access';
import { Books } from '@cfsboom/books/ui';
import { SharedBook } from '@cfsboom/shared-models';

export const BooksFeature = () => {
  const [books, setBooks] = useState([] as SharedBook[]);

  useEffect(() => {
    getBooks().then(setBooks);
  }, [
    // This effect runs only once on first component render
    // so we declare it as having no dependent state.
  ]);

  return (
    <>
      <h2>Books</h2>
      <Books books={books} onAdd={book => alert(`Added ${book.title}`)} />
    </>
  );
};

export default BooksFeature;
