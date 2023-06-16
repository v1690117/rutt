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
  box-sizing: border-box;
  padding: 4px 16px;
  height: 37px;
  border-radius: 10px;
  font-family: Inter, sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 29px;
  text-transform: capitalize;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
`;
