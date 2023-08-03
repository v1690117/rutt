import React from "react";
import { BreadcrumbItemWrapper } from "./BreadcrumbItem.styles";

const BreadcrumbItem: React.FC<{ value: string | number | undefined }> = (props) => {
    const cutValue = (str: string) => {
        let cuttedStr = str.substring(0, 30) + '...'
        return cuttedStr
    }

    const value = typeof props.value === 'string' && props.value.length >= 30
        ? cutValue(props.value)
        : props.value

    return <BreadcrumbItemWrapper >
        {value}
    </BreadcrumbItemWrapper>
}

export default BreadcrumbItem;
