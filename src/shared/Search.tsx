import styled, { css } from "styled-components";
import searchImage from "/Search.svg";
import { useContext, useEffect, useState } from "react";
import { CountryContext } from "../store";
import { useDebounce } from "use-debounce";

const InputWrapper = styled.div`
    position: relative;
    z-index: 2;
    width: 340px;
    max-width: 100%;
`

const SearchIcon = styled.span`
    position: absolute;
    top: 50%;
    left: 12px;
    width: 24px;
    height: 24px;
    transform: translateY(-50%);
    ${() => css`
        background: url(${searchImage}) no-repeat center center/contain;
    `}
`

const Input = styled.input`
    color: #6C727F;
    width: 100%;
    height: 44px;
    border: none;
    border-radius: 12px;
    background-color: #282B30;
    padding: 8px 12px 8px 45px;
`

const Search = () => {
    const { searchCountries } = useContext(CountryContext);
    const [text, setText] = useState("");
    const [searchValue] = useDebounce(text, 600);

    useEffect(() => {
        searchCountries(searchValue);
    }, [searchValue])

    return <>
        <InputWrapper>
            <SearchIcon />
            <Input type="text" onChange={(e) => {
                setText(e.target.value);
            }}
                placeholder="Search by Name, Region, Subregion" />
        </InputWrapper>
    </>;
}

export default Search;