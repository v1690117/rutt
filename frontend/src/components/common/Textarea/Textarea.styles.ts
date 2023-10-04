import styled from 'styled-components';
import { FormFieldPropsType } from '../../../types/types';

export const TextareaWrapper = styled.textarea<FormFieldPropsType>`
  border: 1px solid ${props => props.theme.colors.main};
  color: ${props => props.theme.colors.main};
  text-align: start;
  border-radius: 8px;
  width: 480px;
  height: 128px;
  padding: 0 8px;
  margin-left: 16px;
  resize: none;
  &:focus {
    outline: none;
    border: 2px solid ${props => props.theme.colors.main};
  }  
`;

