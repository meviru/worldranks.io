import styled from "styled-components";
import PageWrapper from "./PageWrapper";
import Stats from "../shared/Stats";
import ListItem from "../shared/ListItem";
import { useContext, useEffect, useState } from "react";
import { CountryContext } from "../store";
import { useLocation } from "react-router-dom";

const Flag = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 12px;
`

const CountryFlag = styled.div`
    width: 260px;
    height: 196px;
    margin: 0 auto;
    max-width: 100%;
    margin-top: -48px;
`

const CountryName = styled.h2`
    margin: 32px 0 8px 0;
    font-size: 32px;
    font-weight: 600;
    line-height: 32px;
    text-align: center;
`

const CountryAltName = styled.h3`
    text-align: center;
    font-size: 16px;
    font-weight: normal;
`

const Flex = styled.div<{ $marginY?: number, $alignItems?: string, $justifyContent?: string, $colGap?: number }>`
    display: flex;
    flex-wrap: wrap;
    ${props => props.$marginY && `margin: ${props.$marginY}px 0;`}
    ${props => props.$alignItems && `align-items: ${props.$alignItems};`}
    ${props => props.$justifyContent && `justify-content: ${props.$justifyContent};`}
    ${props => props.$colGap && `column-gap: ${props.$colGap}px`}
`

const CountryDetails = () => {
    const location = useLocation();
    
    let storedCountry = localStorage.getItem("countryDetails");
    let countryDetails = storedCountry && JSON.parse(storedCountry);
    const [country, setCountry] = useState(countryDetails);

    useEffect(() => {
        setCountry(countryDetails)
    }, [location]);

    const { findNeighbours } = useContext(CountryContext);

    const saperateByComma = (object: any) => {
        return Object.values(object).join(", ");
    }

    const getCurrency = (currencies: any) => {
        return Object.keys(currencies).length > 0 && `${(Object.values(currencies)[0] as any).name} (${(Object.values(currencies)[0] as any).symbol})`;
    }

    const getNeighbours = (borders: string[]) => {
        return findNeighbours(borders);
    }

    return <>
        <PageWrapper isDetailPage={true}>
            <CountryFlag>
                <Flag src={country.flags.svg} title={country.name.common} alt={country.flags.alt} />
            </CountryFlag>
            <CountryName>{country.name.common}</CountryName>
            <CountryAltName>{country.name.official}</CountryAltName>
            <Flex $marginY={40} $justifyContent="center" $colGap={40}>
                <Stats label="Population" value={country.population.toLocaleString()} />
                <Stats label="Area (km²)" value={country.area.toLocaleString()} />
            </Flex>
            <ListItem label="Capital" value={country.capital[0]} />
            <ListItem label="Subregion" value={country.subregion} />
            <ListItem label="Language" value={saperateByComma(country.languages)} />
            <ListItem label="Currencies" value={getCurrency(country.currencies)} />
            <ListItem label="Continents" value={saperateByComma(country.continents)} />
            <ListItem label="Neighbouring Countries" isBlock={true} value={getNeighbours(country.borders)} />
        </PageWrapper>
    </>
}

export default CountryDetails;