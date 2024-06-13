import styled from "styled-components";
import PageWrapper from "./PageWrapper";

const Flag = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 12px;
`

const CountryFlag = styled.div`
    position: relative;
    top: -48px;
    width: 260px;
    height: 196px;
    margin: 0 auto;
    max-width: 100%;
`

const CountryDetails = () => {
    const storedCountry = localStorage.getItem("countryDetails");
    const country = storedCountry && JSON.parse(storedCountry);
    return <>
        <PageWrapper isDetailPage={true}>
            <CountryFlag>
                <Flag src={country.flag} />
            </CountryFlag>
        </PageWrapper>
    </>
}

export default CountryDetails;