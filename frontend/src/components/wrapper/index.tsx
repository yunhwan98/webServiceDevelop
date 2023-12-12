import React from "react";
import { Container, SubContainer } from "./styled";

export const Wrapper: React.FC = ({ children }) => {
    return (
        <Container>
            <SubContainer>{children}</SubContainer>
        </Container>
    );
};
