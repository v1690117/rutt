import React from 'react';
import { NavBarItemWrapper } from './NavBarItem.styles';

type NavBarItemPropsType = {
    title: string,
    to: string
}

const NavBarItem: React.FC<NavBarItemPropsType> = (props) => {

    return <NavBarItemWrapper {...props} >
        {props.title}
    </NavBarItemWrapper>
}

export default NavBarItem;
