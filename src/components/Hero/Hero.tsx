import styled from "styled-components";
import logo from "../../assets/Logo.svg";
import bgImage from "../../assets/hero-image-wr.jpg";
import { Container } from "../../shared/Container";
import { Link } from "react-router-dom";

const HeroBg = styled.div`
    height: 300px;
    background: url(${bgImage}) no-repeat center center/cover;
    @media (max-width: 639px) {
        height: 240px;
    }
`;

const Logo = styled.div`
    display: flex;
    padding-top: 120px;
    justify-content: center;
    @media (max-width: 639px) {
        padding-top: 80px;
    }
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
                        <Link to="/">
                            <LogoImg src={logo} alt="World Ranks" title="World Ranks" />
                        </Link>
                    </Logo>
                </Container>
            </HeroBg>
        </>
    )
}

export default Hero;
