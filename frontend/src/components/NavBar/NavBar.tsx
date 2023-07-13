import React from 'react';
import { NavBarWrapper } from './NavBar.styles';
import NavBarItem from './NavBarItem/NavBarItem';
import { useLocation } from 'react-router-dom';

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

    const location = useLocation()
    console.log(location.pathname.includes(fieldValues[2].to))
    const renderNavBarItems = (isActive: boolean) => {
        return fieldValues
            .filter(isActive
                ? value => location.pathname.includes(value.to)
                : value => !location.pathname.includes(value.to))
            .map(value => <NavBarItem
                key={value.title}
                title={value.title}
                to={value.to} />)
    }

    return <NavBarWrapper>
        {renderNavBarItems(true)}
        {renderNavBarItems(false)}
    </NavBarWrapper>
}

export default NavBar;
