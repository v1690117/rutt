import React from 'react';
import { NavBarItemWrapper } from './NavBarItem.styles';
import Breadcrumb from '../../common/Breadcrumb/Breadcrumb';
import { useSuiteStore } from '../../../stores/suiteStore';

type NavBarItemPropsType = {
    title: string,
    to: string,
    isActive: boolean
}

const NavBarItem: React.FC<NavBarItemPropsType> = (props) => {
    const currentSuite = useSuiteStore(state => state.currentSuite)
    const values = [currentSuite?.id, currentSuite?.title]

    return <NavBarItemWrapper title={props.title} to={props.to} >
        <>
            {props.title}
            {props.isActive
                && currentSuite
                && <Breadcrumb values={values} />
            }
        </>
    </NavBarItemWrapper>
}

export default NavBarItem;
