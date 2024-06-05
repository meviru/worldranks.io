import styled from "styled-components";
import Table from "../../shared/Table";

const TableContainer = styled.div`
    flex-grow: 1;
    padding-left: 32px;
`

const TableWrapper = () => {
    return <>
        <TableContainer>
            <Table />
        </TableContainer>
    </>
}

export default TableWrapper;