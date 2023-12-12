import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;

    justify-content: space-between;
    text-align: center;
    width: 100%;
    height: 50px;
    background-color: ${({ theme }) => theme.colors.grey};
    padding: 0 2rem;
`;

export const LogoBox = styled.div`
    width: 75px;
    text-align: center;
`;

export const List = styled.ul`
    display: flex;
    align-items: center;
    justify-content: center;
    list-style: none;
`;

export const ListItem = styled.li`
    margin-left: 5rem;
    svg {
        width: 35px;
        height: 35px;
    }
`;
