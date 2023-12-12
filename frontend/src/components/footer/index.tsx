import Image from "next/image";
import React from "react";

import { Container, List, ListItem, LogoBox } from "./styled";
import { IconGitHub } from "@public/icons";
import Link from "next/link";

export const Footer: React.FC = () => {
    return (
        <Container>
            <LogoBox>Logo</LogoBox>

            <List>
                <ListItem>문의하기</ListItem>
                <ListItem>
                    <Link href="https://github.com/EggKms/webServiceDevelop">
                        <a target="_blank">
                            <IconGitHub />
                        </a>
                    </Link>
                </ListItem>
            </List>
        </Container>
    );
};
