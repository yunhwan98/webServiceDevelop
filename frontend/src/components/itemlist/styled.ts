import styled from "styled-components";

export const Container = styled.div`
    margin-top: 85px;

    display: grid;

    @media ${({ theme }) => theme.breakpoints.TABLETMIN} {
        grid-template-columns: repeat(3, 1fr);
    }

    @media ${({ theme }) => theme.breakpoints.DESKTOPMIN} {
        grid-template-columns: repeat(4, 1fr);
    }
`;
