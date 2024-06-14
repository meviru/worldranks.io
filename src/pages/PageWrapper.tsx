import styled from 'styled-components'
import Hero from '../components/Hero/Hero'
import { Container } from '../shared/Container'

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
   &.detail-page {
        padding: 0;
        width: 720px;
        color: #D2D5DA;
        max-width: 100%;
        margin-left: auto;
        margin-right: auto;
   }
`

const PageWrapper = ({ children, isDetailPage }: any) => {
    return <>
        <Hero />
        <Main>
            <Container>
                <MainContent className={`${isDetailPage ? 'detail-page' : ''}`}>
                    {children}
                </MainContent>
            </Container>
        </Main>
    </>
}

export default PageWrapper;