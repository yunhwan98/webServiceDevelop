import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
`;

export const InputForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
`;

export const PageName = styled.div`
    text-align: center;

    font-size: 2rem;
    font-weight: bold;
`;

export const LoginLink = styled.div`
    text-align: center;
    span {
        font-weight: bold;
    }
`;
