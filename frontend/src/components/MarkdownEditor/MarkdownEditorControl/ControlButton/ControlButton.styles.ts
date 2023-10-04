import styled from 'styled-components';
import { ControlButtonPropsType } from '../../../../types/types';

export const ControlButtonWrapper = styled.div<ControlButtonPropsType>`
    color: ${props => props.isActive ? props.theme.colors.main : props.theme.colors.second };    
`;
