import React from "react";

import { Wrapper } from "@components";
import ItemDetail from "@components/itemdetail";
import { useRouter } from "next/router";

const Detail: React.FC = () => {
    const router = useRouter();
    const { id } = router.query;

    return (
        <Wrapper>
            <ItemDetail />
        </Wrapper>
    );
};
export default Detail;
