import styled from "styled-components";
import Field from "../../shared/Field";
import SelectDropdown from "../../shared/SelectDropdown";
import Tags from "../../shared/Tags";
import Checkbox from "../../shared/Checkbox";

const SidebarWrapper = styled.div`
    width: 260px;
`

const Sidebar = () => {
    return <>
        <SidebarWrapper>
            <Field label={'Sort by'}>
                <SelectDropdown />
            </Field>
            <Field label={'Region'}>
                <Tags />
            </Field>
            <Field label={'Status'}>
                <Checkbox id={'checkbox-un'} label={'Member of the United Nations'} />
                <Checkbox id={'checkbox-inde'} label={'Independent'} />
            </Field>
        </SidebarWrapper>
    </>
}

export default Sidebar;