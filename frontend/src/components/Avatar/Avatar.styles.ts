import styled from 'styled-components';

export const AvatarWrapper = styled.div`
background-color: ${props => props.theme.colors.second};
color: ${props => props.theme.colors.main};
width: 64px;
height: 64px;
border-radius: 50%;
padding: 17px 14px 18px 14px;
display: flex;
justify-content: center;
align-items: center;
font-weight: 700;
font-size: 32px;
line-height: 39px;
cursor: pointer;
`;
