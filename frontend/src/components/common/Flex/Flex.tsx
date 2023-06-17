import React from 'react';
import { FlexPropsType } from '../../../types/types';
import FlexWrapper from './Flex.styles';

const Flex: React.FC<FlexPropsType> = (props) => {
    return <FlexWrapper {...props} />
}

export default Flex;