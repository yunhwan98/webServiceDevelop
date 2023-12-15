import { Button } from "@components/submitbutton/styled";
import styled from "styled-components";

export const Container = styled.div`
    padding: 10%;
    display: flex;
    flex-direction: column;
    font-size: 1.5rem;
    font-weight: bold;
    justify-content: center;
    gap: 10%;

    @media ${({ theme }) => theme.breakpoints.DESKTOPMIN} {
        flex-direction: row;
    }
`;

export const ImgBox = styled.div`
    flex: 1;
    @media ${({ theme }) => theme.breakpoints.DESKTOPMIN} {
        flex: 3;
    }
`;

export const ItemInfoBox = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    @media ${({ theme }) => theme.breakpoints.DESKTOPMIN} {
        flex: 2;
    }
`;

export const ItemName = styled.div`
    flex: 1;
    hr {
        height: 1px;
        background: ${({ theme }) => theme.colors.grey};
    }
`;

export const ItemPrice = styled(ItemName)``;

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

export const TotalBox = styled.div`
    flex: 2;
    display: flex;
    justify-content: end;
    align-items: center;
    padding: 0.5rem;
    font-size: 1rem;
    gap: 0.5rem;

    span {
        font-size: 1.5rem;
    }
`;
export const ButtonBox = styled.div`
    display: flex;
    width: 100%;
    gap: 1rem;
`;

export const InputCartButton = styled(Button)`
    flex: 1;
    font-size: 1rem;
    font-weight: bold;
`;

export const MoveCartButton = styled(InputCartButton)``;
