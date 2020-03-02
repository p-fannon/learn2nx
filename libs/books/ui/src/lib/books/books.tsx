import React from 'react';
import styled from 'styled-components';
import { Book } from '../book/book';
import { SharedBook } from '@cfsboom/shared-models';

export interface BooksProps {
  books: SharedBook[];
  onAdd: (book: SharedBook) => void;
}

const StyledBooks = styled.div`
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const Books = ({ books, onAdd }: BooksProps) => {
  return (
    <StyledBooks>
      {books.map(book => (
        <Book key={book.id} book={book} onAdd={onAdd} />
      ))}
    </StyledBooks>
  );
};

export default Books;
