import React, { useEffect, useState } from "react";

import {
    CartItemBox,
    CloseButton,
    Container,
    Count,
    Counter,
    CounterBox,
    ItemInfo,
    ItemPrice,
} from "./styled";
import {
    IconCheck,
    IconClose,
    IconMinus,
    IconPlus,
    IconUnCheck,
} from "@public/icons";
import { useRecoilState, useRecoilValue } from "recoil";
import { cartListAtom } from "@recoil/atoms";

type data = {
    id: number;
    price: number;
    check: boolean;
    count: number;
};

type CartItemProps = {
    id: number;
    onClickDeleteItem: (id: number) => void;
};

export const CartItem: React.FC<CartItemProps> = ({
    id,
    onClickDeleteItem,
}) => {
    const [cartList, setCartList] = useRecoilState(cartListAtom);

    const data = useRecoilValue(cartListAtom).find(
        (it) => it.id === id,
    ) as data;

    const onClickCountPlus = () => {
        const editedList = cartList.map((it) => {
            return it.id === data.id ? { ...it, count: it.count + 1 } : it;
        });
        setCartList(editedList);
    };

    const onClickCountMinus = () => {
        if (data.count > 1) {
            const editedList = cartList.map((it) => {
                return it.id === data.id ? { ...it, count: it.count - 1 } : it;
            });
            setCartList(editedList);
        }
    };

    const onClickCheck = () => {
        const editedList = cartList.map((it) => {
            return it.id === data.id ? { ...it, check: !it.check } : it;
        });
        setCartList(editedList);
    };

    return (
        <Container>
            <CartItemBox>
                <ItemInfo>
                    {data.check ? (
                        <IconCheck onClick={onClickCheck} />
                    ) : (
                        <IconUnCheck onClick={onClickCheck} />
                    )}

                    <div>img</div>
                    <div>{`${data.id}번째 상품`}</div>
                </ItemInfo>

                <IconClose
                    className="icon_close"
                    onClick={() => onClickDeleteItem(data.id)}
                />

                <ItemPrice>{data.price}원</ItemPrice>
            </CartItemBox>

            <CounterBox>
                수량
                <Counter>
                    <Count>
                        <IconMinus onClick={onClickCountMinus} />
                        <div>{data.count}</div>
                        <IconPlus onClick={onClickCountPlus} />
                    </Count>
                    {data.count * data.price}원
                </Counter>
            </CounterBox>
        </Container>
    );
};
