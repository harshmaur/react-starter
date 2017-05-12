import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  height: 30px;
  border: none;
  border-radius: 5px;
  background-color: skyblue;
`

const Button = ({text}) => <StyledButton type="button">{text}</StyledButton>

export { Button };