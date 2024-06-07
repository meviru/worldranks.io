import styled from 'styled-components'
import Hero from './components/Hero/Hero'
import { GlobalStyles } from './styles'
import { Container } from './shared/Container'
import Topbar from './components/Topbar/Topbar'
import Sidebar from './components/Sidebar/Sidebar'
import TableWrapper from './components/TableWrapper/TableWrapper'
import CountryProvider from './store'

const Main = styled.div`
  position: relative;
  top: -60px;
`

const MainContent = styled.div`
   padding:  24px 32px;
   border-radius: 16px;
   margin-bottom: 35px;
   border: 1px solid #282B30; 
   background-color: #1C1D1F; 
`

const FlexWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const App = () => {
  return (
    <CountryProvider>
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
    </CountryProvider>
  )
}

export default App
