import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const TestSuiteCardWrapper = styled(NavLink)<{to: string}>`
display: flex;
gap: 14px;
align-items: center;
justify-content: space-between;
width: 100%;
min-height: 80px;
padding: 16px 0;
margin: 0 auto;
color: ${props => props.theme.colors.main};
border-bottom: 1px solid ${props => props.theme.colors.second};
text-decoration: none;
`;
