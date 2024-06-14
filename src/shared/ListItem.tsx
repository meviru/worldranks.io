import styled from "styled-components"

const Group = styled.div`
    display: flex;
    padding: 24px 18px;
    align-items: center;
    border-top: 1px solid #282B30;
    justify-content: space-between;
    &.d-block {
        display: block;
    }
`

const GroupTitle = styled.div`
    font-size: 14px;
    color: #6B717F;
`

const GroupValue = styled.div`
    font-size: 14px;
`

const ListItem = ({ label, value, isBlock }: any) => {
    return <>
        <Group className={`${isBlock ? "d-block" : ""}`}>
            <GroupTitle>{label}</GroupTitle>
            <GroupValue>
                {!isBlock ?
                    value :
                    (value && value.length > 0) && value.map((item: any) => <span>{item.name.common}</span>)
                }
            </GroupValue>
        </Group>
    </>
}

export default ListItem;