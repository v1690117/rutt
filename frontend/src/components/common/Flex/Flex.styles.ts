import React from 'react';
import styled from 'styled-components';
import { FlexPropsType } from '../../../types/types';

const FlexWrapper = styled.div<FlexPropsType>`
height: 100%;
display: flex;
flex-direction: ${props => props.direction || 'row'};
align-items: ${props => props.align || 'stretch'};
justify-content: ${props => props.justify || 'stretch'};
margin: ${props => props.margin || '0'};
`;

export default FlexWrapper;