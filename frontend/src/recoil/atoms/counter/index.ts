import { Atoms } from "@recoil/constants";
import { atom, selector } from "recoil";

/**
 * This file is generated as an example of Recoil Atoms
 *
 * To learn more about Recoil and state management,
 * please visit https://recoiljs.org/
 */

export const counter = atom({
    key: Atoms.Counter,
    default: 0,
});

export const cartListAtom = atom({
    key: "cartListAtom",
    default: [
        { id: 1, price: 10000, check: false, count: 1 },
        { id: 2, price: 1000, check: false, count: 1 },
        { id: 3, price: 200, check: false, count: 1 },
    ],
});

export const TotalPriceSelector = selector({
    key: "TotalPriceSelector",
    get: ({ get }) => {
        const cartList = get(cartListAtom);
        return cartList.reduce((acc, cur) => acc + cur.price * cur.count, 0);
    },
});
