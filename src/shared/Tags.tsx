import { useContext, useState } from "react";
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
    &.selected {
        color: #D2D5DA;
        background-color: #282B30;
    }
`

const Tags = () => {
    const [selectedRegion, setSelectedRegion] = useState<any[]>([]);
    const { regionList, filterByRegion } = useContext(CountryContext);

    const onSelect = (region: string, index: number) => {
        if (selectedRegion.includes(index)) {
            setSelectedRegion(selectedRegion.filter(tagIndex => tagIndex !== index));
        } else {
            setSelectedRegion([...selectedRegion, index]);
        }
        filterByRegion(region);
    }

    return <>
        <TagsWrapper>
            {(regionList && regionList.length > 0) && regionList.map((region, index) =>
                <Tag className={`${selectedRegion.includes(index) ? 'selected' : ''}`} key={index} onClick={() => onSelect(region, index)}>{region}</Tag>
            )}
        </TagsWrapper>
    </>
}

export default Tags;