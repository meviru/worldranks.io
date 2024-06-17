import styled from "styled-components"
import FlagItem from "../components/FlagItem/FlagItem"

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

const FlagsWrapper = styled.div`
    display: flex;
    gap: 16px;
    flex-wrap: wrap;
    margin: 16px 0;
`

const ListItem = ({ label, value, isBlock }: any) => {
    return <>
        <Group className={`${isBlock && (value && value.length > 0) ? "d-block" : ""}`}>
            <GroupTitle>{label}</GroupTitle>
            <GroupValue>
                {!isBlock ?
                    value :
                    (value && value.length > 0) ?
                        <FlagsWrapper>
                            {value.map((item: any, index: number) =>
                                <FlagItem key={index} flag={item} />
                            )}
                        </FlagsWrapper>
                        :
                        <span>N/A</span>
                }
            </GroupValue>
        </Group>
    </>
}

export default ListItem;