import styled from 'styled-components';

export const DragFileWrapper = styled.div<{ drag: boolean }>`
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 1;   
    top: 0;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    text-transform: none;
    pointer-events: auto;
            
    & div {
        border: 1px dashed ${props => props.theme.colors.main};
        color: ${props => props.theme.colors.main};
        border-radius: 8px;
        width: 256px;
        height: 64px;
        display: flex;
        justify-content: center;
        align-items: center;
        pointer-events: none;
        margin-bottom: 16px;
    }    
`;
