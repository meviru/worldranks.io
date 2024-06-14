import styled from "styled-components";

const CountryStats = styled.div`
    display: flex;
    padding: 8px 20px;
    border-radius: 12px;
    align-items: center; 
    background-color: #282B30;
    justify-content: space-between;
`

const Separator = styled.span`
    width: 1px;
    height: 36px;
    margin: 0 20px;
    display: inline-flex;
    background-color: #1C1D1F;
`


const CountryStatsItem = styled.span`
    &:first-child {
        font-size: 14px;
    }
`

const Stats = ({ label, value }: any) => {
    return <>
        <CountryStats>
            <CountryStatsItem>{label}</CountryStatsItem>
            <Separator />
            <CountryStatsItem>{value}</CountryStatsItem>
        </CountryStats>
    </>
}

export default Stats;