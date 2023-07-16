import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const NavBarItemWrapper = styled(NavLink) <{ title: string, to: string }>`
color: ${props => props.theme.colors.main};
background-color: ${props => props.theme.bgColors.second};
display: flex;
padding: 10px;
font-weight: 700;
cursor: pointer; 
margin-right: 24px;
text-decoration: none;
height: 44px;
&.active {
    border-bottom: 1px solid ${props => props.theme.colors.main}; 
    margin-right: auto;
};
`;
