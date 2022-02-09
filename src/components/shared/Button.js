import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';


const Button = ({ children, type, isDisabled }) => {
  return (
  <StyledButton type={type} disabled={isDisabled}>
    {children}
  </StyledButton>);
};

Button.defaultProps = {
  type: 'button',
  isDisabled: false
}
Button.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.string,
  isDisabled: PropTypes.bool,
}

const StyledButton = styled.button`
  color: var(--black);
  border: 0;
  border-radius: 8px;
  width: 100px;
  height: 40px;
  cursor: pointer;
  background-color: var(--primary-button);
  
  :hover {
    transform: scale(0.98);
    opacity: 0.9;
  }

  :disabled {
    background-color: #cccccc;
    color: #333;
    cursor: auto;
  }

  :disabled:hover {
    transform: scale(1);
    opacity: 1;
  }
`

export default Button;
