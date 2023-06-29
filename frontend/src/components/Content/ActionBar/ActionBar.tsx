import React, { useState } from "react";
import { ActionBarWrapper } from "./ActionBar.styles";
import ActionBarItem from "./ActionBarItem/ActionBarItem";

function ActionBar() {
    const actionBarItemValues = [
        {
            title: 'New Requirement Specification',
            isActive: false
        },
        {
            title: 'New Use Case',
            isActive: false
        },
        {
            title: 'New Test Suite',
            isActive: false
        }
    ]

    const [values, setValues] = useState(actionBarItemValues)

    const onClick = (e: any) => {
        const newValues = [...values]
        newValues.forEach(value => value.title === e.target.title
            ? value.isActive = !value.isActive
            : value.isActive = false)
        setValues(newValues)
    }

    return <ActionBarWrapper >
        {values.map((value) => <ActionBarItem
            title={value.title}
            isActive={value.isActive}
            onClick={onClick}
            key={value.title} />)}
    </ActionBarWrapper>
}

export default ActionBar;
