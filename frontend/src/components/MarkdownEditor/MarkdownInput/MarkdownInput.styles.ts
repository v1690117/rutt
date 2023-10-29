import styled from 'styled-components';

export const MarkdownInputWrapper = styled.textarea`
border: none;
color: ${props => props.theme.colors.main};
text-align: start;
border-radius: 8px;
width: 100%;
height: 256px;
resize: none;
padding: 10px;
scrollbar-width: thin;
scrollbar-color: ${props => props.theme.colors.main} ${props => props.theme.colors.second};
&:focus {
  outline: none;
  border: none;
}
&::-webkit-scrollbar {
    width: 6px;
    border-bottom-right-radius: 8px;
    background-color:  ${props => props.theme.colors.second};
}
&::-webkit-scrollbar-thumb {
    border-radius: 8px;
    background-color: ${props => props.theme.colors.main};
}      
`;
