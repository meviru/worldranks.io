import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { CountryContext } from "../store";

const TagsWrapper = styled.div`
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
`

const Tag = styled.span`
    cursor: pointer;
    color: #6C727F;
    display: block;
    font-size: 14px;
    font-weight: 500;
    padding: 8px 12px;
    border-radius: 12px;
    transition: 0.25s ease;
    &:hover,
    &.selected {
        color: #D2D5DA;
        background-color: #282B30;
    }
`


let includedRegions: any = ["Americas", "Africa", "Asia", "Europe"];

const Tags = () => {
    const [selectedRegion, setSelectedRegion] = useState<any[]>([0, 2, 3, 4]);
    const { regionList, filterByRegion } = useContext(CountryContext);


    const onSelect = (region: string, index: number) => {
        if (selectedRegion.includes(index)) {
            setSelectedRegion(selectedRegion.filter(tagIndex => tagIndex !== index));
            includedRegions = includedRegions.filter((regItem: any) => regItem !== region)
        } else {
            includedRegions = [...includedRegions, region];
            setSelectedRegion([...selectedRegion, index]);
        }
        filterByRegion(includedRegions);
    }

    useEffect(() => {
        filterByRegion(includedRegions);
    }, [regionList]);

    return <>
        <TagsWrapper>
            {(regionList && regionList.length > 0) && regionList.map((region, index) =>
                <Tag className={`${selectedRegion.includes(index) ? 'selected' : ''}`} key={index} onClick={() => onSelect(region, index)}>{region}</Tag>
            )}
        </TagsWrapper>
    </>
}

export default Tags;