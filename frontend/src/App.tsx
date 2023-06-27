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
                    <Content />
                    {/* added for routing testing purposes */}
                    <Routes>
                        <Route path="/" element={<div>ROOT</div>} />
                        <Route path="/requirements" element={<div>Requirements</div>} />
                        <Route path="/cases" element={<div>Use Cases</div>} />
                        <Route path="/tests" element={<div>Test Suits</div>} />
                        <Route path="*" element={<div>404 NOT FOUND</div>} />
                    </Routes>

                </ThemeProvider >
            </BrowserRouter>
        </>
    );
}

export default App;
