import styled from "styled-components";
import Search from "../../shared/Search";
import { useContext } from "react";
import { CountryContext } from "../../store";

const TopbarContainer = styled.div`
    margin-bottom: 36px;
`
const TopbarWrapper = styled.div`
    display: flex;
    gap: 16px;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
`

const TopbarSearchCount = styled.div`
    color: #6C727F;
    font-weight: 600;
`

const Topbar = () => {
    const { countryList } = useContext(CountryContext);
    return <>
        <TopbarContainer>
            <TopbarWrapper>
                <TopbarSearchCount>Found {countryList.length} countries</TopbarSearchCount>
                <Search />
            </TopbarWrapper>
        </TopbarContainer >
    </>
}

export default Topbar;