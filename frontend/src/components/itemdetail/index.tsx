import React, { useState } from "react";
import {
    ButtonBox,
    Container,
    Count,
    Counter,
    CounterBox,
    ImgBox,
    InputCartButton,
    ItemInfoBox,
    ItemName,
    ItemPrice,
    MoveCartButton,
    TotalBox,
} from "./styled";
import Image from "next/image";
import { IconMinus, IconPlus } from "@public/icons";
import Link from "next/link";

const ItemDetail: React.FC = () => {
    const price = 10000;
    const [count, setCount] = useState<number>(1);

    const onClickCountPlus = (e: any) => {
        setCount((prev) => prev + 1);
    };

    const onClickCountMinus = (e: any) => {
        if (count > 1) {
            setCount((prev) => prev - 1);
        }
    };

    return (
        <Container>
            <ImgBox>
                <Image
                    src="/img.png"
                    width={50}
                    height={50}
                    layout="responsive"
                />
            </ImgBox>

            <ItemInfoBox>
                <ItemName>
                    상품이름
                    <hr />
                </ItemName>
                <ItemPrice>
                    10,000원
                    <hr />
                </ItemPrice>
                <CounterBox>
                    수량
                    <Counter>
                        <Count>
                            <IconMinus onClick={onClickCountMinus} />
                            <div>{count}</div>
                            <IconPlus onClick={onClickCountPlus} />
                        </Count>
                        {price}원
                    </Counter>
                </CounterBox>
                <TotalBox>
                    총 금액
                    <span>{price * count}원</span>
                </TotalBox>
                <ButtonBox>
                    <InputCartButton>장바구니 담기</InputCartButton>
                    <Link href="/cart">
                        <MoveCartButton>장바구니 이동</MoveCartButton>
                    </Link>
                </ButtonBox>
            </ItemInfoBox>
        </Container>
    );
};

export default ItemDetail;
