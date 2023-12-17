import React, { useEffect, useState } from "react";

import { Wrapper } from "@components";
import ItemDetail from "@components/itemdetail";
import { useRouter } from "next/router";
import { CartList, Container, PayInfo, SelectBox } from "./styled";
import { IconCheck, IconUnCheck } from "@public/icons";
import { CartItem } from "@components/cartitem";

type data = {
    id: number;
    price: number;
    check: boolean;
    count: number;
};

const Cart: React.FC = () => {
    const router = useRouter();
    const { id } = router.query;

    const dummydata = [
        { id: 1, price: 10000, check: false, count: 1 },
        { id: 2, price: 1000, check: false, count: 1 },
        { id: 3, price: 200, check: false, count: 1 },
    ];

    const [checkAll, setCheckAll] = useState<boolean>(false);

    const [cartList, setCartList] = useState<data[]>(dummydata);

    const onClickCheckAll = () => {
        setCheckAll((prev) => !prev);
    };

    const onClickDeleteItem = (id: number) => {
        const deletedList = cartList.filter((it) => it.id !== id);

        setCartList(deletedList);
    };

    const onClickSelectDeleteItem = () => {
        const deletedList = cartList.filter((it) => it.check !== true);
        setCartList(deletedList);
    };

    useEffect(() => {
        const editedList = cartList.map((it) => {
            return { ...it, check: checkAll };
        });

        setCartList(editedList);
    }, [checkAll]);

    return (
        <Wrapper>
            <SelectBox>
                {checkAll ? (
                    <IconCheck onClick={onClickCheckAll} />
                ) : (
                    <IconUnCheck onClick={onClickCheckAll} />
                )}

                <span onClick={onClickCheckAll}>전체선택</span>
                <span onClick={onClickSelectDeleteItem}>선택삭제</span>
            </SelectBox>

            <Container>
                <CartList>
                    {cartList.map((it) => (
                        <CartItem
                            key={it.id}
                            data={it}
                            cartList={cartList}
                            setCartList={setCartList}
                            onClickDeleteItem={onClickDeleteItem}
                        />
                    ))}
                </CartList>

                <PayInfo>
                    <div>
                        결제
                        <hr />
                    </div>
                    {cartList.map((it) => (
                        <div>
                            <div>
                                상품수 <span>{it.count}개</span>
                            </div>
                            <div>
                                상품금액<span>{it.count * it.price}</span>
                            </div>
                            <hr />
                        </div>
                    ))}

                    <div>
                        총결제금액 <span>10000원</span>
                    </div>
                    <button>구매하기</button>
                </PayInfo>
            </Container>
        </Wrapper>
    );
};
export default Cart;
