import styled from 'styled-components';
import { FormFieldPropsType } from '../../../types/types';

export const InputWrapper = styled.input<FormFieldPropsType>`
  border: 1px solid ${props => props.theme.colors.main};
  color: ${props => props.theme.colors.main};
  text-align: start;
  border-radius: 8px;
  width: 480px;
  height: 32px;
  padding: 0 8px;
  margin-left: 16px;
  &:focus {
    outline: none;
    border: 2px solid ${props => props.theme.colors.main};
  }  
`;
