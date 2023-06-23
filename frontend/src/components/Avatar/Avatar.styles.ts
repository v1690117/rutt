import styled from 'styled-components';

export const AvatarWrapper = styled.div`
background-color: ${props => props.theme.colors.second};
color: ${props => props.theme.colors.main};
width: 32px;
height: 32px;
border-radius: 50%;
display: flex;
justify-content: center;
align-items: center;
font-weight: 700;
font-size: 16px;
line-height: 19.36px;
cursor: pointer;
`;
