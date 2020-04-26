import React from 'react';
import { addDecorator } from '@storybook/react';
import GlobalStyle from '../src/themes/GlobalStyle';
import {ThemeProvider} from 'styled-components';
import {theme} from '../src/themes/mainTheme'

addDecorator(story => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    {story()}
  </ThemeProvider>
));