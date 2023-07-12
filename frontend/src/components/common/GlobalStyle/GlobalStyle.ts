import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box; 
    font-family: Inter, sans-serif;
    font-style: normal;    
    font-size: 20px;
    line-height: 24.2px;
    text-align: center;
    vertical-align: middle;
    color: inherit; 
    overflow-wrap: break-word;
}
body {
    font-weight: 400;
    overflow: scroll;
    -ms-overflow-style: none; 
    scrollbar-width: none; 
    overflow-y: scroll; 
}
body::-webkit-scrollbar {
    display: none; 
}
`

export default GlobalStyle
