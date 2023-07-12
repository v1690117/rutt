import styled from 'styled-components';
import { TestSuiteCardItemPropsType } from '../../../../../../types/types';

export const TestSuiteCardItemCountWrapper = styled.div<TestSuiteCardItemPropsType>`
padding: 0 4px;
height: 16px;
line-height: 18px; 
background-color: ${(props) => props.theme.colors.second};
border-radius: 12px;
font-weight: 700;
font-size: 12px;
`;
