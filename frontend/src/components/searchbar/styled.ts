import styled from "styled-components";

export const Container = styled.div`
    * {
        font-size: 1.5rem;
    }
    display: flex;
    align-items: center;
    height: 65px;

    margin-top: 85px;
    border: solid 1px ${({ theme }) => theme.colors.grey};

    input {
        flex: 1;
        height: 100%;
        border: none;
        outline: none;
        padding: 1rem;
    }

    > svg {
        width: 45px;
        height: 45px;
        margin: 1rem;
    }
`;

export const Filter = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    height: 100%;
    width: 200px;
    font-weight: bold;
    border-right: solid 1px ${({ theme }) => theme.colors.grey};

    .type_list {
        z-index: 1;
        position: absolute;
        top: 0px;

        .current_type {
            display: flex;
            justify-content: center;
            align-items: center;
            flex: 1;

            button {
                position: absolute;
                right: 1rem;
                border: 0;
                background-color: transparent;
                display: flex;
                align-items: center;
                justify-content: center;
                width: 30px;
                height: 30px;
            }
        }

        div {
            display: flex;
            justify-content: center;
            align-items: center;
            list-style: none;
            width: 200px;
            height: 65px;
            background-color: white;
            border: solid 1px ${({ theme }) => theme.colors.grey};
        }
    }
`;
