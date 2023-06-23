import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const LogoWrapper = styled(NavLink)`
  color: ${props => props.theme.colors.main};
  font-weight: 700;  
  font-size: 24px;
  line-height: 29.05px;
  text-transform: uppercase;
  cursor: pointer;
  text-decoration: none;
`;