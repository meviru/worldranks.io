import styled from "styled-components";

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
    return <>
        <TagsWrapper>
            <Tag className="selected">Americas</Tag>
            <Tag>Antarctic</Tag>
            <Tag className="selected">Africa</Tag>
            <Tag className="selected">Asia</Tag>
            <Tag className="selected">Europe</Tag>
            <Tag>Oceania</Tag>
        </TagsWrapper>
    </>
}

export default Tags;