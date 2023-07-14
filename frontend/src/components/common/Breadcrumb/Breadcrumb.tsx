import React from "react";
import { BreadcrumbWrapper } from "./Breadcrumb.styles";
import BreadcrumbSeparator from "./BreadcrumbSeparator/BreadcrumbSeparator";
import BreadcrumbItem from "./BreadcrumbItem/BreadcrumbItem";

type BreadcrumbPropsType = {
    values: Array<string | number | undefined>
}

const Breadcrumb: React.FC<BreadcrumbPropsType> = (props) => {

    return <BreadcrumbWrapper {...props}>
        <BreadcrumbSeparator />
        {props.values.map(value => <BreadcrumbItem value={value} />)}
    </BreadcrumbWrapper>
}

export default Breadcrumb;
