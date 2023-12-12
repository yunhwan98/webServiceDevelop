import React from "react";
import { Container } from "./styled";
import Image from "next/image";

export const Item: React.FC = () => {
    return (
        <Container>
            <div className="img_box">
                <Image
                    src="/img.png"
                    width={50}
                    height={50}
                    layout="responsive"
                />
            </div>
            <div className="item_info">
                <div className="name">상품명</div>
                <div className="price">10,000원</div>
            </div>
        </Container>
    );
};
