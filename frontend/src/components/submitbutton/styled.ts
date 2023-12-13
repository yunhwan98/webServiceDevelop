import styled from "styled-components";

export const Button = styled.button`
    width: 100%;
    height: 40px;
    border: 0;
    background-color: ${({ theme }) => theme.colors.grey};
    border-radius: 5px;
    font-weight: bold;
`;
