import styled from "styled-components";
import { Link } from "react-router-dom";

const SingupPage = () => {
  return (
    <LoginBackground>
      <LoginBlock>
        <Login>
          <LoginWrapper>
            <Title>회원가입</Title>
            <EmailInput>
              <input placeholder="이메일을을 입력해주세요." />
              <Auth>
                <span>인증요청</span>
              </Auth>
            </EmailInput>
            <Input>
              <input placeholder="인증번호를 입력해주세요." />
            </Input>
            <Input>
              <input placeholder="아이디를 입력해주세요." />
            </Input>
            <Input>
              <input placeholder="비밀번호를 입력해주세요." />
            </Input>
            <Input>
              <input placeholder="이름을 입력해주세요." />
            </Input>
            <Input>
              <input placeholder="부서를 입력해주세요." />
            </Input>
            <Input>
              <input placeholder="직책을 입력해주세요." />
            </Input>
          </LoginWrapper>
          <SignupButton>회원가입</SignupButton>
        </Login>
        <Introduce>
          <IntroduceWrapper>
            <IntroduceTitle>유연 근무제란?</IntroduceTitle>
            <IntroduceText>
              유연근무제 또는 플렉스타임 혹은 프랑스에서 퍼플잡은 개인의 선택에
              따라 근무 시간·근무 환경을 조절할 수 있는 제도
            </IntroduceText>
            <ButtonWrapper>
              <MoreInformation to="/about">더 알아보기</MoreInformation>
            </ButtonWrapper>
          </IntroduceWrapper>
        </Introduce>
      </LoginBlock>
    </LoginBackground>
  );
};

const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const MoreInformation = styled(Link)`
  width: 200px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #fdfdfd;
  border-radius: 10px;
  cursor: pointer;
  color: white;
  font-weight: 400;
  font-size: 14px;
  line-height: 19px;
  text-decoration: none;
  letter-spacing: -0.017em;
`;

const IntroduceWrapper = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
`;

const IntroduceText = styled.span`
  font-family: "Noto Sans";
  font-weight: 400;
  font-size: 14px;
  line-height: 19px;
  letter-spacing: -0.017em;
  color: #fdfdfd;
  margin-bottom: 40px;
`;

const IntroduceTitle = styled.span`
  font-family: "Noto Sans";
  font-weight: 600;
  font-size: 32px;
  line-height: 44px;
  letter-spacing: -0.017em;
  color: #fdfdfd;
  margin-bottom: 50px;
`;

const Input = styled.div`
  width: 500px;
  height: 50px;
  background: #fdfdfd;
  border: 1px solid #d9d9d9;
  border-radius: 10px;
  margin-bottom: 25px;
  display: flex;
  align-items: center;
  input {
    width: 80%;
    margin-left: 20px;
  }
`;

const EmailInput = styled.div`
  width: 500px;
  height: 50px;
  background: #fdfdfd;
  border: 1px solid #d9d9d9;
  border-radius: 10px;
  margin-bottom: 25px;
  display: flex;
  align-items: center;
  input {
    width: 80%;
    margin-left: 20px;
  }
  position: relative;
`;

const Title = styled.span`
  font-weight: 700;
  font-size: 32px;
  margin-top: 40px;
  line-height: 44px;
  text-align: center;
  letter-spacing: -0.017em;
  color: #000000;
  margin-bottom: 50px;
`;

const Login = styled.div`
  width: 900px;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const Introduce = styled.div`
  width: 500px;
  background: linear-gradient(
    180deg,
    #aba6ea 39.1%,
    rgba(171, 166, 234, 0) 153.7%
  );
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LoginBackground = styled.div`
  width: 100vw;
  height: 100vh;
  background: #f8f8f8;
  display: grid;
  place-content: center;
`;

const LoginBlock = styled.div`
  width: 1400px;
  height: 800px;
  background: #ffffff;
  display: flex;
  border: 1px solid #888888;
  border-radius: 20px;
`;

const LoginWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Auth = styled.div`
  background-color: #aba6ea;
  padding: 5px 10px 5px 10px;
  color: white;
  position: absolute;
  right: 20px;
  border-radius: 10px;
  cursor: pointer;
`;

const SignupButton = styled.button`
  background-color: #aba6ea;
  width: 200px;
  height: 45px;
  color: white;
  cursor: pointer;
  border-radius: 10px;
  font-size: 20px;
  margin: 40px auto auto;
`;

export default SingupPage;
