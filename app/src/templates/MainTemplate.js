import React from 'react';
import PropTypes from 'prop-types';
import styled, { ThemeProvider } from 'styled-components';
import GlobalStyle from '../themes/GlobalStyle';
import { theme } from '../themes/mainTheme';
import Menu from '../components/organisms/Menu/Menu';

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
// eslint-disable-next-line no-unused-vars
const MainTempalte = ({ children }) => {
  return (
    <>
      <GlobalStyle />

      <ThemeProvider theme={theme}>
        <StyledWrapper>
          {children}
          <Menu></Menu>
        </StyledWrapper>
      </ThemeProvider>
    </>
  );
};

MainTempalte.propTypes = {
  children: PropTypes.element.isRequired,
};

export default MainTempalte;
