import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';


const Header = ({text}) => {
  return (
   <StyledHeader>
      <h1>{text}</h1>
   </StyledHeader> 
  );
};

const StyledHeader = styled.header`
  color: var(--white);
  text-align: center;
  height: 70px;
  width: 100%;
  justify-content: space-between;
`;

Header.defaultProps = {
  text: 'Frontend QA Interface',
}

Header.propTypes = {
  text: PropTypes.string,
}

export default Header