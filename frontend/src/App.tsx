import React from 'react';
import MainToolbar from "./components/MainToolbar/MainToolbar";
import NavBar from "./components/NavBar/NavBar";
import Content from "./components/Content/Content";
import { ThemeProvider } from "styled-components";
import { theme } from './themes/themes';
import GlobalStyle from './components/common/GlobalStyle/GlobalStyle';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {

    return (
        <>
            <BrowserRouter>
                <GlobalStyle />
                <ThemeProvider theme={theme}>
                    <MainToolbar />
                    <NavBar />                    
                    <Routes>
                        <Route path="/" element={<Content type={'main'}/>} />
                        <Route path="/requirements" element={<Content type={'requirements'}/>} />
                        <Route path="/cases" element={<Content type={'cases'}/>}  />
                        <Route path="/tests" element={<Content type={'tests'}/>}  />
                        <Route path="*" element={<div>404 NOT FOUND</div>} />
                    </Routes>
                </ThemeProvider >
            </BrowserRouter>
        </>
    );
}

export default App;
