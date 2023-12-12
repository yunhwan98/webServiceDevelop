import React from "react";
import { Container } from "./styled";
import Image from "next/image";
import { Item } from "@components/item";

export const ItemList: React.FC = () => {
    const arr = Array.from(Array(18), (_, i) => i + 1);
    return (
        <Container>
            {arr.map((it) => (
                <Item />
            ))}
        </Container>
    );
};
