import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const LoginPage = () => {
  const [input, setInput] = useState({
    id: "",
    password: "",
  });

  const onChange = (e) => {
    const { name, value } = e.target;
    setInput({
      ...input,
      [name]: value,
    });
  };

  return (
    <LoginBackground>
      <LoginBlock>
        <Login>
          <LoginWrapper>
            <Title>로그인</Title>
            <Input>
              <input
                type="text"
                name="id"
                value={input.id}
                onChange={onChange}
                placeholder="아이디를 입력해주세요."
              />
            </Input>
            <Input>
              <input
                type="password"
                name="password"
                value={input.password}
                onChange={onChange}
                placeholder="비밀번호를 입력해주세요."
              />
            </Input>
            <BottomWrapper>
              <SignUpTextWrapper>
                <SignUpText to="/signup">회원가입</SignUpText>
                <SignUpText to="/findid">아이디 찾기</SignUpText>
                <SignUpText to="/change">비밀번호 변경</SignUpText>
              </SignUpTextWrapper>
              <SubmitButton>로그인</SubmitButton>
            </BottomWrapper>
          </LoginWrapper>
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

const SignUpTextWrapper = styled.div`
  width: 190px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

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

const BottomWrapper = styled.div`
  width: 500px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const SubmitButton = styled.button`
  width: 200px;
  height: 40px;
  display: grid;
  place-content: center;
  background: #aba6ea;
  border-radius: 8px;
  color: #ffffff;
  cursor: pointer;
`;

const SignUpText = styled(Link)`
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 22px;
  letter-spacing: -0.017em;
  cursor: pointer;
  text-decoration: none;
  color: black;
  :hover {
    text-decoration: underline;
  }
`;

const Input = styled.div`
  width: 500px;
  height: 50px;
  background: #fdfdfd;
  border: 1px solid #d9d9d9;
  border-radius: 10px;
  margin-bottom: 50px;
  display: flex;
  align-items: center;
  input {
    width: 80%;
    margin-left: 20px;
  }
`;

const Title = styled.span`
  font-weight: 700;
  font-size: 32px;
  line-height: 44px;
  text-align: center;
  letter-spacing: -0.017em;
  color: #000000;
  margin-bottom: 190px;
`;

const Login = styled.div`
  width: 900px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
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

const LogoImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 100px;
  border: 1px solid black;
  margin: 30px 0 0 30px;
`;

const LoginWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default LoginPage;
