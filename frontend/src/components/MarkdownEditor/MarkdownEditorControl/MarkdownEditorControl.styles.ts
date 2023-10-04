import styled from 'styled-components';

export const MarkdownEditorControlWrapper = styled.div`
display: flex;

border-bottom: 1px solid ${props => props.theme.colors.main};
& div {
    margin-left: 5px;
    cursor: pointer;
    
}    
`;
