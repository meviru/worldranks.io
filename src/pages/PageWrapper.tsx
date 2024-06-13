import styled from 'styled-components'
import Hero from '../components/Hero/Hero'
import { Container } from '../shared/Container'
import { Children } from 'react'

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

const PageWrapper = ({ children }: any) => {
    return <>
        <Hero />
        <Main>
            <Container>
                <MainContent>
                    {children}
                </MainContent>
            </Container>
        </Main>
    </>
}

export default PageWrapper;