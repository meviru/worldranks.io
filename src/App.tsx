import styled from 'styled-components'
import Hero from './components/Hero/Hero'
import { GlobalStyles } from './styles/Global'
import { Container } from './shared/Container'
import Topbar from './components/Topbar/Topbar'
import Sidebar from './components/Sidebar/Sidebar'
import TableWrapper from './components/TableWrapper/TableWrapper'

const Main = styled.div`
    margin-top: -60px;
`

const MainContent = styled.div`
   padding:  24px 32px;
   border-radius: 16px;
   border: 1px solid #282B30; 
   background-color: #1C1D1F; 
`

const FlexWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const App = () => {
  return (
    <>
      <GlobalStyles />
      <Hero />
      <Main>
        <Container>
          <MainContent>
            <Topbar />
            <FlexWrapper>
              <Sidebar />
              <TableWrapper />
            </FlexWrapper>
          </MainContent>
        </Container>
      </Main>
    </>
  )
}

export default App
