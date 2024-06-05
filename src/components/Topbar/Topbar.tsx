import styled from "styled-components";
import Search from "../../shared/Search";

const TopbarContainer = styled.div`
    margin-bottom: 36px;
`
const TopbarWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
`

const TopbarSearchCount = styled.div`
    color: #6C727F;
    font-weight: 600;
`

const Topbar = () => {
    return <>
        <TopbarContainer>
            <TopbarWrapper>
                <TopbarSearchCount>Found 234 countries</TopbarSearchCount>
                <Search />
            </TopbarWrapper>
        </TopbarContainer >
    </>
}

export default Topbar;