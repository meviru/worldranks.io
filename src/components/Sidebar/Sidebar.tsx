import styled from "styled-components";
import Field from "../../shared/Field";
import SelectDropdown from "../../shared/SelectDropdown";
import Tags from "../../shared/Tags";
import Checkbox from "../../shared/Checkbox";
import { ChangeEvent, useContext } from "react";
import { CountryContext } from "../../store";
import { Constants } from "../../constants";

const SidebarWrapper = styled.div`
    width: 260px;
`

const Sidebar = () => {
    const { filterByStatus } = useContext(CountryContext);
    const onCheckboxChange = (event: ChangeEvent) => {
        const element = event.target as HTMLInputElement;
        if (element.checked) {
            filterByStatus(element.id);
        } else {
            filterByStatus(null);
        }
    }

    return <>
        <SidebarWrapper>
            <Field label={'Sort by'}>
                <SelectDropdown />
            </Field>
            <Field label={'Region'}>
                <Tags />
            </Field>
            <Field label={'Status'}>
                <Checkbox onCheckboxChange={onCheckboxChange} id={Constants.CHECKBOX.UN} label={'Member of the United Nations'} />
                <Checkbox onCheckboxChange={onCheckboxChange} id={Constants.CHECKBOX.INDE} label={'Independent'} />
            </Field>
        </SidebarWrapper>
    </>
}

export default Sidebar;