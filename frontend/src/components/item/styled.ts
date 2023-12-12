import styled from "styled-components";

export const Container = styled.div`
    /* Item */

    display: flex;
    flex-direction: column;
    align-items: center;

    width: 216px;
    height: 316px;

    margin-bottom: 75px;

    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);

    &:hover {
        box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25),
            0 10px 10px rgba(0, 0, 0, 0.22);
    }

    /* Rectangle 144 */
    .img_box {
        position: relative;
        box-sizing: border-box;

        width: 210px;
        height: 210px;

        background: #ffffff;
        border: 1px solid #d9d9d9;
    }

    .item_info {
        flex: 1;
        width: 100%;
        display: flex;
        flex-direction: column;
        padding: 0 0.5rem;
        div {
            display: flex;
            align-items: center;
        }
    }

    /* 상품 명 */
    .name {
        flex: 1;
        display: flex;
    }

    /* 10,000원 */
    .price {
        flex: 1;
        font-weight: bold;
        font-size: 1.2rem;
    }

    /* Image */
    .img {
        background: url(.png);
    }
`;
