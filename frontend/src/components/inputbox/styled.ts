import styled from "styled-components";

export const Wrapper = styled.div`
    width: 360px;

    span {
        font-weight: bold;
        cursor: pointer;
    }
    input {
        margin-top: 0.5rem;
        padding: 0.5rem;
        border: solid 1px ${({ theme }) => theme.colors.grey};
        height: 45px;
        width: 100%;
        border-radius: 10px;
    }
`;
