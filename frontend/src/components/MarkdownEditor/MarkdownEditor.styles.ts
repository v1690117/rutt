import styled from 'styled-components';

export const MarkdownEditorWrapper = styled.div`
position: relative;
border: 1px solid ${props => props.theme.colors.main};
color: ${props => props.theme.colors.main};
text-align: start;
font-size: 14px;
line-height: 18px;
font-weight: 400;
border-radius: 8px;
width: 480px;
min-height: 256px;
padding: 0;
margin-left: 16px;
resize: none;
&:focus {
  outline: none;
  border: 2px solid ${props => props.theme.colors.main};
}    
`;
