import styled from 'styled-components';

export const MainToolbarWrapper = styled.div`
  width: 100%;
  height: 40px;
  padding: 0 30px 0 42px; 
  color: ${props => props.theme.colors.main};
  background-color: ${props => props.theme.bgColors.second};
  border-bottom: 1px solid ${props => props.theme.colors.second};
  display: flex;
  justify-content: space-between;
  align-items: center;   
  position: sticky;
  top: 0;  
`;
