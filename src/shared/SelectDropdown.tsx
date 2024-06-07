import styled, { css } from "styled-components";
import arrowDown from "/Expand_down.svg";
import { ChangeEvent, useContext } from "react";
import { CountryContext } from "../store";
import { Constants } from "../constants";

const Select = styled.select`
    cursor: pointer;
    color: #D2D5DA;
    width: 100%;
    height: 42px;
    padding: 0 12px;
    border-radius: 12px;
    border: 2px solid #282B30;
    ${() => css`
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        background: transparent url(${arrowDown}) no-repeat center right 12px/16px;
    `}
`

const Option = styled.option`
    background-color: #1C1D1F;
`

const SelectDropdown = () => {
    const { sortCountries } = useContext(CountryContext);
    const onRegionSelect = (event: ChangeEvent) => {
        sortCountries(+(event.target as HTMLSelectElement).value);
    }

    return <>
        <Select onChange={onRegionSelect}>
            <Option value={Constants.SORTBY.POPULATION}>Population</Option>
            <Option value={Constants.SORTBY.NAME}>Name</Option>
            <Option value={Constants.SORTBY.AREA}>Area</Option>
        </Select>
    </>
}

export default SelectDropdown;