import styled from 'styled-components';
import { TestSuiteCardItemPropsType } from '../../../../../../types/types';

export const TestSuiteCardItemEmptyWrapper = styled.div<TestSuiteCardItemPropsType>`
width: 8px;
height: 8px;
background-color: ${(props) => props.theme.colors.second};
border: 1px solid ${(props) => props.theme.colors.main};
border-radius: 50%;
`;
