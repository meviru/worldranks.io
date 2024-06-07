import styled from "styled-components";
import Table from "../../shared/Table";
import { useContext } from "react";
import { CountryContext } from "../../store";

const TableContainer = styled.div`
    flex-grow: 1;
    padding-left: 32px;
`

const TableWrapper = () => {
    const { countryList, isLoading } = useContext(CountryContext);
    return <>
        <TableContainer>
            <Table isLoading={isLoading} countries={countryList} />
        </TableContainer>
    </>
}

export default TableWrapper;