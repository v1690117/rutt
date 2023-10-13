import styled from 'styled-components';

export const ActionBarItemWrapper = styled.div<{ title: string, isActive: boolean }>`
color: ${props => props.theme.colors.main};
height: 29px;
font-weight: 700;
text-align: left;
border-bottom: ${props => props.isActive ? `1px solid ${props.theme.colors.main}` : 'none' };
position: relative;
margin-right: auto;
margin-bottom: 16px;
padding: 0 28px;
cursor: pointer;
`;
