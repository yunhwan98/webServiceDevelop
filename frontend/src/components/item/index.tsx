import React from "react";
import { Container } from "./styled";
import Image from "next/image";
import { useRouter } from "next/router";

type ItemProps = {
    id: string;
};

export const Item: React.FC<ItemProps> = ({ id }) => {
    const router = useRouter();
    const onClickItem = () => {
        router.push(`/detail/${id}`);
    };
    return (
        <Container onClick={onClickItem}>
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
