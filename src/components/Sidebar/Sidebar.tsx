import styled from "styled-components";
import Field from "../../shared/Field";
import SelectDropdown from "../../shared/SelectDropdown";
import Tags from "../../shared/Tags";
import Checkbox from "../../shared/Checkbox";
import { ChangeEvent, useContext, useState } from "react";
import { CountryContext } from "../../store";
import { Constants } from "../../constants";

const SidebarWrapper = styled.div`
    width: 260px;
`

const Sidebar = () => {
    const [selectedStatus, setSelectedStatus] = useState([]);
    const { filterByStatus } = useContext(CountryContext);
    const onCheckboxChange = (event: ChangeEvent) => {
        let updatedStatuses: any = [...selectedStatus]
        const element = event.target as HTMLInputElement;
        if (element.checked) {
            updatedStatuses.push(element.id);
        } else {
            updatedStatuses = updatedStatuses.filter((s: any) => s !== element.id);
        }
        filterByStatus(updatedStatuses);
        setSelectedStatus(updatedStatuses);
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