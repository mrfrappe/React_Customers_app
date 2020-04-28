import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../themes/GlobalStyle';
import { theme } from '../themes/mainTheme';
import Main from '../components/organisms/Menu/Menu';

// eslint-disable-next-line no-unused-vars
const MainTempalte = ({ children }) => {
  return (
    <>
      <GlobalStyle />

      <ThemeProvider theme={theme}>
        <>
          {children}
          <Main></Main>
        </>
      </ThemeProvider>
    </>
  );
};

MainTempalte.propTypes = {
  children: PropTypes.element.isRequired,
};

export default MainTempalte;
