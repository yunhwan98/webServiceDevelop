import { IconDown, IconSearch } from "@public/icons";
import React, { useState } from "react";
import { Container, Filter } from "./styled";

export const SearchBar: React.FC = () => {
    const [search, setSearch] = useState<string>("");
    const [show, setShow] = useState<boolean>(false);
    const [type, setType] = useState<string>("전체");

    const onClickShow = () => {
        setShow((prev) => !prev);
    };

    const OnChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
    };

    const onClickType = (item: string) => {
        setType(item);
        setShow(false);
    };

    const dummyData = ["전체", "모자", "신발", "상의"];

    return (
        <Container>
            <Filter>
                <div className="type_list">
                    <div className="current_type">
                        {type}
                        <button onClick={onClickShow}>
                            <IconDown />
                        </button>
                    </div>
                    {show &&
                        dummyData.map((item, idx) =>
                            item !== type ? (
                                <div
                                    onClick={() => onClickType(item)}
                                    key={idx}
                                >
                                    {item}
                                </div>
                            ) : null,
                        )}
                </div>
            </Filter>
            <input
                onChange={OnChangeSearch}
                placeholder="찾고 싶은 상품을 입력해주세요"
                value={search}
            />
            <IconSearch />
        </Container>
    );
};
