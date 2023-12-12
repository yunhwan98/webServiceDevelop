import React from "react";

import { Logo, Toggle } from "@components";
import { Container, IconContainer, Wrapper } from "./styled";
import { IconCart, IconLogOut, IconPerson } from "@public/icons";
import Link from "next/link";

export const Header: React.FC = () => {
    return (
        <Wrapper>
            <Container>
                <Logo />
                <IconContainer>
                    <Link href="/mypage">
                        <IconPerson />
                    </Link>
                    <Link href="/cart">
                        <IconCart />
                    </Link>
                    {/* <IconLogOut /> */}
                </IconContainer>
            </Container>
        </Wrapper>
    );
};
