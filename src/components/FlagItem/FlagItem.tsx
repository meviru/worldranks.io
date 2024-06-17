import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const FlagBlock = styled.div`
    cursor: pointer;
`

const FlagImg = styled.div`
    width: 80px;
    height: 60px;
`

const Flag = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 4px;
`

const FlagName = styled.h2`
    width: 100%;
    font-size: 14px;
    font-weight: 500;
    margin-top: 8px;
    max-width: 80px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
`

const FlagItem = ({ flag }: any) => {
    const navigate = useNavigate();
    const redirectToCountry = (country: any) => {
        localStorage.setItem("countryDetails", JSON.stringify(country));
        navigate(`/country/${country.name.common.replace(/\s+/g, '-').toLowerCase()}`);
    }

    return <>
        <FlagBlock onClick={() => redirectToCountry(flag)}>
            <FlagImg>
                <Flag src={flag.flags.svg} alt={flag.flags.alt} title={flag.name.common} />
            </FlagImg>
            <FlagName title={flag.name.common}>{flag.name.common}</FlagName>
        </FlagBlock>
    </>
}

export default FlagItem;