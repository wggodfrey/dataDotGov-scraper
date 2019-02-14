import React from 'react';
import store from 'store';
import styled, { createGlobalStyle } from 'styled-components';

const Wrapper = styled.div`
  width: calc(100% - 20px);
  margin: 10px;
  padding: 10px;
  box-sizing: border-box;
  background: #ffffff;
  border-radius: 5px;
`;

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    height: 100%;
    background: #efefef;
  }

  button {
    padding: 0;
    border: none;
    cursor: pointer;
    outline: none;
    & :hover {
      outline-offset: none;
      border: none;
    }
  }

  ul {
    list-style: none;
    padding-inline-start: 0;
    padding: 0;
    margin: 0;
  }
`;

class App extends React.Component {

  render() {
    return (
      <Wrapper>
        <GlobalStyle />
      </Wrapper>
    );
  }
};

export default App;
