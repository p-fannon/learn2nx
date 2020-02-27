import React from 'react';

import styled from 'styled-components';

/* eslint-disable-next-line */
export interface TextProps {}

const StyledText = styled.div`
  color: black;
  display: flex;
  font-family: sans-serif;
  text-decoration: none;
  font-size: 24px;
  margin-top: 24px;
  align-self: center;
  align-items: center;
  text-align: center;
  padding: 10px;
  border: solid 1px green;
  border-radius: 10px;
`;

export const Text = (props: TextProps) => {
  return (
    <StyledText>
      <span>I made this!</span>
    </StyledText>
  );
};

export default Text;
