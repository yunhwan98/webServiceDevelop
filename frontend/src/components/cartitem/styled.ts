import styled from "styled-components";

export const Container = styled.div`
    border: solid 1px ${({ theme }) => theme.colors.grey};
    font-size: 1.5rem;
`;

export const CartItemBox = styled.div`
    flex: 2;
    display: flex;
    position: relative;
    justify-content: space-between;
    padding: 0.5rem;

    ${({ theme }) => theme.colors.grey};
    .icon_close {
        position: absolute;
        top: 0.5rem;
        right: 0;
        font-size: 1.5rem;
    }
`;

export const ItemInfo = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    min-height: 100px;
`;

export const ItemPrice = styled.div`
    display: flex;
    align-items: self-end;
`;

export const CounterBox = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    background-color: ${({ theme }) => theme.colors.grey};
    padding: 0.5rem;
    gap: 0.5rem;
    font-size: 1rem;
`;

export const Counter = styled.div`
    flex: 1;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 1.5rem;
`;

export const Count = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    div {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 30px;
        height: 30px;
        background-color: white;
    }
`;
export const CloseButton = styled.button`
    position: absolute;
    top: 0.5rem;
    right: 0.5rem;
`;
