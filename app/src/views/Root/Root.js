import React from 'react';
import Button from '../../components/atoms/Button/Button';
import GlobalStyle from '../../themes/GlobalStyle';
import {ThemeProvider} from 'styled-components';
import {theme} from '../../themes/mainTheme';

function Root() {
  return (
    <>
    <GlobalStyle />
      <ThemeProvider theme={theme}>
        <>
          <h1>New app</h1>
          <Button>Button</Button>
          <Button secondary>Button</Button>
        </>
      </ThemeProvider>
    </>
  );
}

export default Root;
