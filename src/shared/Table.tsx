import { useEffect, useState } from "react";
import styled from "styled-components";

const Column = styled.div`
    flex: 1;
    color: #6C727F;
    font-size: 12px;
    font-weight: 600;
    &.column-flag {
        flex: 0 0 95px;
    }
`

const TableHeader = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 16px;
    padding-bottom: 16px;
    border-bottom: 2px solid #282B30;
`
const TableRow = styled.div`
    display: flex; 
    flex-wrap: wrap;
    align-items: center;
    margin-bottom: 24px;
    ${Column} {
        font-size: 16px;
        color: #D2D5DA;
        font-weight: 500;
    }
`

const FlagImg = styled.img`
    width: 50px;
    height: 38px;
    object-fit: cover;
    border-radius: 3px;
`

const Table = () => {
    const [countries, setCountries] = useState<any[]>([]);

    const getCountries = () => {
        fetch('https://restcountries.com/v3.1/all', {
            method: 'GET',
            headers: {
                'Access-Control-Allow-Origin': '*'
            }
        })
            .then(response => response.json())
            .then(data => {
                setCountries(data);
            })
            .catch(error => {
                console.log(error);
            })
    }

    useEffect(() => {
        getCountries();
    }, []);

    return <>
        <TableHeader>
            <Column className="column-flag">Flag</Column>
            <Column>Name</Column>
            <Column>Population</Column>
            <Column>Area (km²)</Column>
            <Column>Region</Column>
        </TableHeader>

        {(countries && countries.length > 0) && countries.map((country: any, index: number) => (
            <TableRow key={index}>
                <Column className="column-flag">
                    <FlagImg src={country.flags.svg} alt={country.flags.alt} title={country.flags.alt} />
                </Column>
                <Column>{country.name.common}</Column>
                <Column>{country.population}</Column>
                <Column>{country.area}</Column>
                <Column>{country.region}</Column>
            </TableRow>
        ))
        }
    </>
}

export default Table;