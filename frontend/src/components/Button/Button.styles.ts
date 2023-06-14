import styled from 'styled-components';

export const ButtonWrapper = styled.div<{ type: 'positive' | 'negative' }>`
  background-color: ${props => props.type === 'positive'
    ? props.theme.main.bgColor
    : props.theme.second.bgColor};
  color: ${props => props.type === 'positive'
    ? props.theme.main.btnTextColor
    : props.theme.second.btnTextColor};
  box-shadow: ${props => props.type === 'positive'
    ? props.theme.main.boxShadow
    : props.theme.second.boxShadow};
  border: ${props => props.type === 'positive'
    ? props.theme.main.border
    : props.theme.second.border};
  
  width: 8rem;
  height: 2rem;
  border-radius: 10px;
  text-transform: capitalize;
  font-style: normal;
  font-weight: 400;
  font-size: 1.5rem;
  line-height: 2rem;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;    
`;
