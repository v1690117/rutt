import React from 'react';
import { PreloaderWrapper } from './Preloader.styles';
import PreloaderItem from './PreloaderItem/PreloaderItem';

const Preloader = () => {
    return (
        <PreloaderWrapper >
            <PreloaderItem />
            <PreloaderItem />
            <PreloaderItem />
            <PreloaderItem />
        </PreloaderWrapper>
    )
};

export default Preloader; 
