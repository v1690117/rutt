import React from 'react';
import MainToolbar from "./components/MainToolbar/MainToolbar";
import NavBar from "./components/NavBar/NavBar";
import Content from "./components/Content/Content";
import { ThemeProvider } from "styled-components";
import { theme } from './themes/themes';
import GlobalStyle from './components/common/GlobalStyle/GlobalStyle';
import { BrowserRouter } from 'react-router-dom';

function App() {

    return (
        <>
            <BrowserRouter>
                <GlobalStyle />
                <ThemeProvider theme={theme}>
                    <MainToolbar />
                    <NavBar />
                    <Content />
                </ThemeProvider>
            </BrowserRouter>
        </>
    );
}

export default App;
