import React from 'react';
import MainToolbar from "./components/MainToolbar/MainToolbar";
import NavBar from "./components/NavBar/NavBar";
import Content from "./components/Content/Content";
import { ThemeProvider } from "styled-components";
import { theme } from './themes/themes';
import GlobalStyle from './components/common/GlobalStyle/GlobalStyle';

function App() {

    return (
        <>
            <GlobalStyle />
            <ThemeProvider theme={theme}>
                <MainToolbar />
                <NavBar />
                <Content />
            </ThemeProvider>
        </>
    );
}

export default App;
