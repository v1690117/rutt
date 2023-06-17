import styled from 'styled-components';

export const MainToolbarWrapper = styled.div`
  height: 80px;
  color: ${props => props.theme.colors.main};
  border-bottom: 1px solid ${props => props.theme.colors.second};    
`;
