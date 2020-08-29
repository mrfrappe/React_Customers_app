import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled, { ThemeProvider } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import GlobalStyle from '../themes/GlobalStyle';
import { theme } from '../themes/mainTheme';
import Menu from '../components/organisms/Menu/Menu';
import ButtonIcon from '../components/atoms/ButtonIcon/ButtonIcon';
// import Modal from './Modal';

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
// eslint-disable-next-line no-unused-vars
class MainTempalte extends Component {
  state = {
    isModalVisible: false,
  };

  handleIsVisibleToggle = () => {
    console.log(this.state);
    this.setState(prevState => (prevState.isModalVisible = !prevState.isModalVisible));
  };

  render() {
    const { children } = this.props;
    // const { isModalVisible } = this.state;

    console.log(this.props, this.props.isModalVisible);
    return (
      <>
        <GlobalStyle />

        <ThemeProvider theme={theme}>
          <StyledWrapper>
            {children}
            <Menu></Menu>
          </StyledWrapper>
          <ButtonIcon secondary>
            <FontAwesomeIcon icon={faPlus} onClick={this.handleIsVisibleToggle} />
          </ButtonIcon>

          {/* TODO check view by url */}
          {/* <Modal mode="add" isVisible={isModalVisible} /> */}
        </ThemeProvider>
      </>
    );
  }
}

MainTempalte.propTypes = {
  children: PropTypes.element.isRequired,
  isVisible: PropTypes.bool,
};

export default MainTempalte;
