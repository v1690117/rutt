import styled from 'styled-components';

export const BreadcrumbWrapper = styled.div`
color: ${props => props.theme.colors.main};
background-color: ${props => props.theme.bgColors.second};
display: flex;
position: sticky;
top: 40px;
font-weight: 700;
margin-right: auto;
`;
