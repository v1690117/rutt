import React from 'react';
import { NavBarWrapper } from './NavBar.styles';
import NavBarItem from './NavBarItem/NavBarItem';

function NavBar() {
    const fieldValues = [
        {
            title: 'Requirements',
            to: '/requirements'
        },
        {
            title: 'Use Cases',
            to: '/cases'
        },
        {
            title: 'Test Suites',
            to: '/tests'
        }
    ]

    return <NavBarWrapper>
        {fieldValues.map(value => <NavBarItem
            key={value.title}
            title={value.title}
            to={value.to} />)}
    </NavBarWrapper>
}

export default NavBar;
