import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { AboutImage } from "../../assets";

const About = () => {  
    const nav = useNavigate()

    return(
        <AboutRoot>
            <ImageContainer>
                <img src={AboutImage} alt="icon" />
            </ImageContainer>
            <InfoContainer>
                <Title>유연 근무제란?</Title>
                <Explain>
                    <Definition>
                        유연근무제란 통상의 근무시간·근무일을 변경하거나 근로자와 사용자가 근로시간이나 근로장소 등을 선택·조정하여 일과 생활을 조화롭게 하고, 인력활용의 효율성을 높일 수 있는 제도를 말합니다.
                    </Definition>
                    <Definition>
                        스마트폰, 태블릿 등 각종 스마트기기가 생활 속으로 들어오면서 굳이 회사에 출근하지 않아도 업무수행이 가능해졌고, 일하는 시간과 공간에 제약이 없는 유연근무를 통해 업무생산성을 향상시켜 기업의 경쟁력을 키울 수 있습니다.
                    </Definition>
                    <Back onClick={()=> nav(-1) }>돌아가기</Back>
                    <MoreInfo onClick={()=> window.location.href="https://easylaw.go.kr/CSP/CnpClsMain.laf?popMenu=ov&csmSeq=1326&ccfNo=1&cciNo=1&cnpClsNo=1" }>
                        자세히 알아보기
                    </MoreInfo>
                </Explain>
            </InfoContainer>
        </AboutRoot>
    )
}

const AboutRoot = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
`;

const ImageContainer = styled.div`
    width: 50vw;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const InfoContainer = styled.div`
    width: 50vw;
    height: 100%;
`;

const Title = styled.h1`
    font-size: 50px;
    color: #ABA6EA;
    text-align: center;
    margin-top: 120px;
`

const Explain = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Definition = styled.p`
    color: #808080;
    font-size: 25px;
    max-width: 660px;
    margin-top: 120px;
`

const Back = styled.p`
    margin-top: 100px;
    font-size: 20px;
    cursor: pointer;
`

const MoreInfo = styled.p`
    font-size: 20px;
    margin-top: 60px;
    cursor: pointer;
`;

export default About;