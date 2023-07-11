import styled from 'styled-components';

export const TestSuiteCardWrapper = styled.div`
display: flex;
gap: 14px;
align-items: center;
justify-content: space-between;
width: 100%;
height: 80px;
margin: 0 auto;
color: ${props => props.theme.colors.main};
border-bottom: 1px solid ${props => props.theme.colors.second};
`;