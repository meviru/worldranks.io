import styled, { css } from "styled-components";
import arrowDown from "/Expand_down.svg";

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

    const onRegionSelect = (event: any) => {
        
    }

    return <>
        <Select onChange={() => onRegionSelect(event)}>
            <Option value="population">Population</Option>
            <Option value="name">Name</Option>
            <Option value="region">Region</Option>
            <Option value="area">Area</Option>
        </Select>
    </>
}

export default SelectDropdown;