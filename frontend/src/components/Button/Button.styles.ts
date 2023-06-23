import styled from 'styled-components';

export const ButtonWrapper = styled.div<{ type: 'positive' | 'negative' }>`
  background-color: ${props => props.type === 'positive'
          ? props.theme.bgColors.main
          : props.theme.bgColors.second};
  color: ${props => props.type === 'positive'
          ? props.theme.btnTextColors.main
          : props.theme.btnTextColors.second};
  border: 1px solid ${props => props.theme.colors.main};
  box-shadow: 2px 2px 5px ${props => props.theme.rgbaColors.main};
  display: inline-block;
  padding: 2px 16px;
  height: 28px;
  border-radius: 10px;  
  text-transform: capitalize;
  cursor: pointer;
`;
