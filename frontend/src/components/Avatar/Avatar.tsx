import React, { useEffect, useState } from "react";
import { AvatarWrapper } from "./Avatar.styles";
import { AvatarPropsType } from "../../types/types";

const Avatar: React.FC<AvatarPropsType> = (props) => {
    const [value, setValue] = useState('');
    const { user } = props;

    useEffect(() => {
        if (user) {
            const getLetter = (arg: string) => arg.substring(0, 1).toUpperCase();
            setValue(getLetter(user.name) + getLetter(user.lastName));
        }
    }, [user])

    return <AvatarWrapper {...props}>
        {value}
    </AvatarWrapper>
}

export default Avatar;
