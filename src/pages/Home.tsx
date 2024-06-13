import styled from 'styled-components'
import Topbar from '../components/Topbar/Topbar'
import Sidebar from '../components/Sidebar/Sidebar'
import TableWrapper from '../components/TableWrapper/TableWrapper'
import PageWrapper from './PageWrapper'

const FlexWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const Home = () => {
    return (
        <>
            <PageWrapper>
                <Topbar />
                <FlexWrapper>
                    <Sidebar />
                    <TableWrapper />
                </FlexWrapper>
            </PageWrapper>
        </>
    )
}

export default Home
