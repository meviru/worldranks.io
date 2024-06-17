import styled, { keyframes } from "styled-components";

const SkeletonWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    margin-top: 16px;
    & + & {
        margin-top: 24px;
    }
    @media (max-width: 639px) {
        display: block;   
        padding: 15px;
        min-height: 158px;
        border-radius: 12px;
        background-color: #282b30;
    }
`

const SkeletonBlock = styled.div`
    flex: 1;
    &.skeleton-flag {
        flex: 0 0 95px;
    }
    @media (max-width: 639px) {
        & + & {
            margin-top: 14px;
        }
        &:nth-child(1),
        &:nth-child(2) {
            display: inline-flex;
            vertical-align: middle;
            margin-bottom: 15px;
        }
        &.skeleton-flag {
            margin-right: 10px;
        }
    }
`

const SkeletonAnimation = keyframes`
    0% {
        background-position: -450px 0;
    }
    100% {
        background-position: 450px 0;
    }
`

const SkeletonFlag = styled.div`
    position: relative;
    width: 50px;
    height: 38px;
    overflow: hidden;
    border-radius: 3px;
    background-color: #3C3F44;
    &:before {
        position: absolute;
        content: "";
        height: 100%;
        width: 100%;
        background-image: linear-gradient(to right, #3C3F44 0%, rgba(255,255,255,0.15) 20%, #3C3F44 40%, #3C3F44 100%);
        background-repeat: no-repeat;
        background-size: 450px 400px;
        animation: ${SkeletonAnimation} 1s linear infinite;
    }
`

const SkeletonBar = styled.div`
    position: relative;
    height: 10px;
    width: 105px;
    max-width: 100%;
    overflow: hidden;
    border-radius: 12px;
    background-color: #3C3F44;
    &:before {
        position: absolute;
        content: "";
        height: 100%;
        width: 100%;
        background-image: linear-gradient(to right, #3C3F44 0%, rgba(255,255,255,0.15) 20%, #3C3F44 40%, #3C3F44 100%);
        background-repeat: no-repeat;
        background-size: 450px 400px;
        animation: ${SkeletonAnimation} 1s linear infinite;
    }
`


const Skeleton = ({ count }: any) => {
    return <>
        {
            Array(count).fill(1).map((skeleton: number, index: number) => ((
                <SkeletonWrapper key={index} id={`skeleton-${index + skeleton}`}>
                    <SkeletonBlock className="skeleton-flag">
                        <SkeletonFlag />
                    </SkeletonBlock>
                    <SkeletonBlock>
                        <SkeletonBar />
                    </SkeletonBlock>
                    <SkeletonBlock>
                        <SkeletonBar />
                    </SkeletonBlock>
                    <SkeletonBlock>
                        <SkeletonBar />
                    </SkeletonBlock>
                    <SkeletonBlock>
                        <SkeletonBar />
                    </SkeletonBlock>
                </SkeletonWrapper>
            )))
        }
    </>
}

export default Skeleton;