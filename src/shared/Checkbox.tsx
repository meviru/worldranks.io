import styled from "styled-components";
import iconCheck from "../assets/Done_round.svg";

const CustomCheckbox = styled.div`
    position: relative;
    & + & {
        margin-top: 12px;
    }
`

const CheckboxLabel = styled.label`
    position: relative;
    color: #D2D5DA;
    font-size: 14px;
    font-weight: 500;
    display: flex;
    align-items: center;
    &:before {
        cursor: pointer;
        content: "";
        width: 24px;
        height: 24px;
        margin-right: 12px;
        border-radius: 4px;
        display: inline-block;
        border: 2px solid #6C7280;
        transition: 0.25s ease;
    }
    &:after {
        cursor: pointer;
        position: absolute;
        opacity: 0;
        content: "";
        width: 24px;
        height: 24px;
        transition: 0.25s ease;
        background: url(${iconCheck}) no-repeat center center/22px; 
    }
`

const CustomCheckboxInput = styled.input`
    position: absolute;
    z-index: -1;
    width: 0;
    height: 0;
    &:checked + ${CheckboxLabel} {
        &:before {
            border-color: #4E80EE;
            background-color: #4E80EE;
        }
    }
    &:checked + ${CheckboxLabel} {
        &:after {
            opacity: 1;
        }
    }
`
const Checkbox = ({ label, id }: any) => {
    return <>
        <CustomCheckbox>
            <CustomCheckboxInput id={id} type="checkbox" />
            <CheckboxLabel htmlFor={id}>{label}</CheckboxLabel>
        </CustomCheckbox>
    </>
}

export default Checkbox;