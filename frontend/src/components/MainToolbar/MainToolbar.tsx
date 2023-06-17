import React from "react";
import { MainToolbarWrapper } from "./MainToolbar.styles";
import Flex from "../common/Flex/Flex";

function MainToolbar(props: any) {
    return <MainToolbarWrapper>
        <Flex justify='space-between' align='center' margin='auto 36px' {...props}>
            <div>LOGO</div>
            <div>AVATAR</div>
        </Flex>
    </MainToolbarWrapper>
}

export default MainToolbar;
