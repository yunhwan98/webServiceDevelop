import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    background-color: ${({ theme }) => theme.colors.grey};
`;

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    text-align: center;
    width: 100%;
`;

export const IconContainer = styled.div`
    display: flex;
    justify-content: center;
    padding: 1rem 2rem;
    gap: 40px;

    svg {
        width: 45px;
        height: 35px;
        cursor: pointer;
    }
`;
