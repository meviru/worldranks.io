import styled from "styled-components";
import Skeleton from "./Skeleton";
import { useNavigate } from "react-router-dom";

const Column = styled.div`
    flex: 1;
    cursor: pointer;
    color: #6C727F;
    font-size: 12px;
    font-weight: 600;
    &.column-flag {
        flex: 0 0 95px;
    }
    &.w-100 {
        flex: 0 0 100%;
        text-align: center;
    }
    @media (max-width: 639px) {
        & + & {
            margin-top: 5px;
        }
        &:nth-child(1),
        &:nth-child(2) {
            display: inline-flex;
            vertical-align: middle;
            margin-bottom: 15px;
        }
        &.column-flag {
            margin-right: 10px;
        }
    }
`

const TableHeader = styled.div`
    display: flex;
    flex-wrap: wrap;
    padding-right: 8px;
    padding-bottom: 16px;
    border-bottom: 2px solid #282B30;
    @media (max-width: 639px) {
       display: none;
    }
`
const TableRow = styled.div`
    cursor: pointer;
    display: flex; 
    flex-wrap: wrap;
    margin-top: 16px;
    align-items: center;
    border-radius: 3px;
    & + & {
        margin-top: 24px;
    }
    ${Column} {
        font-size: 16px;
        color: #D2D5DA;
        font-weight: 500;
    }

    .md-hidden {
        display: none;
    }

    @media (max-width: 639px) {
        display: block;   
        padding: 15px;
        border-radius: 12px;
        background-color: #282b30;
        .md-hidden {
            display: inline-flex;
            margin-right: 5px;
        }
    }
`

const FlagImg = styled.img`
    width: 50px;
    height: 38px;
    display: block;
    object-fit: cover;
    border-radius: 3px;
`

const TableRowGroup = styled.div``

const Table = ({ countries, isLoading }: any) => {
    const navigate = useNavigate();
    const redirectToCountry = (country: any) => {
        localStorage.setItem("countryDetails", JSON.stringify(country));
        navigate(`/country/${country.name.common.replace(/\s+/g, '-').toLowerCase()}`);
    }

    return <>
        <TableHeader>
            <Column className="column-flag">Flag</Column>
            <Column>Name</Column>
            <Column>Population</Column>
            <Column>Area (km²)</Column>
            <Column>Region</Column>
        </TableHeader>
        <TableRowGroup>
            {isLoading ? <Skeleton count={10} /> :
                (countries && countries.length > 0) ? countries.map((country: any, index: number) => (
                    <TableRow key={index} onClick={() => redirectToCountry(country)}>
                        <Column className="column-flag">
                            <FlagImg src={country.flags.svg} alt={country.flags.alt} title={country.name.common} />
                        </Column>
                        <Column>{country.name.common}</Column>
                        <Column><span className="md-hidden">Population - </span>{country.population}</Column>
                        <Column><span className="md-hidden">Area - </span>{country.area}</Column>
                        <Column><span className="md-hidden">Region - </span>{country.region}</Column>
                    </TableRow>
                ))
                    : <TableRow>
                        <Column className="w-100">No records found.</Column>
                    </TableRow>
            }
        </TableRowGroup>
    </>
}

export default Table;