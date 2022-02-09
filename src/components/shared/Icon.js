import { Link } from 'react-router-dom';
import styled from 'styled-components';

import React from 'react'

const Icon = ({to, text}) => {
  return (
    <IconStyles to={to}>{text}</IconStyles>
  )
}

export default Icon


const IconStyles = styled(Link)`
  margin-left: 32px;
  margin-top: 32px;
  text-decoration: none;
  color: var(--white);
  font-weight: 700;
  font-size: 32px;

  @media screen and (max-width: 480px) {
    margin-left: 16px;
    margin-top: 8px;
  }
`;