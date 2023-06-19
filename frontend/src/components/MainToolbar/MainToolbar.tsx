import React from 'react';
import { MainToolbarWrapper } from './MainToolbar.styles';
import Logo from '../Logo/Logo';
import Avatar from '../Avatar/Avatar';

const MainToolbar: React.FC = (props: any) => {
    return <MainToolbarWrapper>
        <Logo />
        <Avatar user={{ name: 'Vla', lastName: 'Ves' }} />
    </MainToolbarWrapper>
}

export default MainToolbar;
