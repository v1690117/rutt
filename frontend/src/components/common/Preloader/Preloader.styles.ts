import styled from 'styled-components';

export const PreloaderWrapper = styled.div`
    margin: 10px auto;  
    position: relative;
    width: 30px;
    height: 30px;
    > * {
        &:first-child {
            background: ${props => props.theme.bgColors.main};
            animation-delay: -1.5s;
        }
        &: nth-child(2) {
            background: ${props => props.theme.rgbaColors.main};
            animation-delay: -1s;
        };
        &:nth-child(3) {
            background: ${props => props.theme.colors.second};
            border: 1px solid ${props => props.theme.colors.main};
            animation-delay: -0.5s;
        };
        &:last-child {
            background: ${props => props.theme.bgColors.second};
            border: 1px solid ${props => props.theme.colors.main};        
    };            
}`;
