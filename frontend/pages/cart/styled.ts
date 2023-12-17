import styled from "styled-components";

export const Container = styled.div`
    margin-top: 1rem;
    display: flex;
    gap: 5%;
`;

export const SelectBox = styled.div`
    align-items: center;
    display: flex;
    gap: 0.5rem;
    svg {
        font-size: 1.5rem;
    }
`;

export const CartList = styled.div`
    flex: 2;
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;

export const PayInfo = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    font-size: 1.5rem;
    font-weight: bold;
    height: 600px;

    gap: 1rem;
    border: solid 1px ${({ theme }) => theme.colors.grey};

    hr {
        border: solid 1px ${({ theme }) => theme.colors.grey};
    }
`;
