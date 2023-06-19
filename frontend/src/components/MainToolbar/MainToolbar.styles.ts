import styled from 'styled-components';

export const MainToolbarWrapper = styled.div`
  width: 100%;
  height: 80px;
  padding: 0 36px; 
  color: ${props => props.theme.colors.main};
  border-bottom: 1px solid ${props => props.theme.colors.second};
  display: flex;
  justify-content: space-between;
  align-items: center;     
`;
