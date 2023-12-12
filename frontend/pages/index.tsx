import React from "react";

import { Cards, Footer, Header, Main, Wrapper } from "@components";
import GlobalStyle from "@styles/globalStyles";
import { SearchBar } from "@components/searchbar";
import { Item } from "@components/item";
import { ItemList } from "@components/itemlist";

const Home: React.FC = () => {
    return (
        <>
            <Wrapper>
                <SearchBar />
                <ItemList />
            </Wrapper>
        </>
    );
};
export default Home;
