import styled from "styled-components";
import logo from "../../assets/Logo.svg";
import bgImage from "../../assets/hero-image-wr.jpg";
import { Container } from "../../shared/Container";

const HeroBg = styled.div`
    height: 300px;
    background: url(${bgImage}) no-repeat center center/cover;
`;

const Logo = styled.div`
    display: flex;
    padding-top: 120px;
    justify-content: center;
`;

const LogoLink = styled.a`
    display: block;
`;

const LogoImg = styled.img`
    display: block;
`;

const Hero = () => {
    return (
        <>
            <HeroBg>
                <Container>
                    <Logo>
                        <LogoLink href="#">
                            <LogoImg src={logo} alt="World Ranks" title="World Ranks" />
                        </LogoLink>
                    </Logo>
                </Container>
            </HeroBg>
        </>
    )
}

export default Hero;
