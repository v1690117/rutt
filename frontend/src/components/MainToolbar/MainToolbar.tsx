import React from "react";
import { MainToolbarWrapper } from "./MainToolbar.styles";
import Flex from "../common/Flex/Flex";
import Logo from "../Logo/Logo";
import Avatar from "../Avatar/Avatar";

const MainToolbar: React.FC = (props: any) => {
    return <MainToolbarWrapper>
        <Flex justify='space-between' align='center' margin='auto 36px' {...props}>
            <Logo />
            <Avatar user={{name: 'Vla', lastName: 'Ves'}}/>
        </Flex>
    </MainToolbarWrapper>
}

export default MainToolbar;
