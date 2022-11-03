import styled from "styled-components";
import { Link } from "react-router-dom";
import { useState } from "react";
import instance from "../../instance";

const FindId = () => {

    const [input, setInput] = useState({
        name: "",
        email: ""
    })

    const [code, setCode] = useState("");
    
    const onChange = (e) => {
        const { name, value } = e.target;
        setInput({
          ...input,
          [name]: value
        });
    }

    const findId = () => {
      instance.post('/api/user/find-id/email-auth', input)
      .then((res)=>{
        alert('메일을 확인해주세요.')
      })
      .catch((e)=>{
        alert('오류가 발생했습니다')
        console.log(e)
      })
    }

    const checkCode = () => {
      instance.post('/api/user/find-id/check-auth-code', {
        email: input.email,
        code: code
      }).then((res)=>{
        alert(`아이디: ${res.data}`)
      })
      .catch((e)=>{
        alert('오류가 발생했습니다')
        console.log(e)
      })
    }

  return (
    <LoginBackground>
      <LoginBlock>
        <Login>
          <LoginWrapper>
            <Title>아이디찾기</Title>
            <Input>
              <input type="text" name="name" value={input.name} onChange={onChange} placeholder="이름을 입력해주세요." />
            </Input>
            <EmailInput>
              <input type="email" name="email" value={input.email} onChange={onChange} placeholder="이메일을을 입력해주세요." />
              <Auth>
                <span onClick={findId}>전송</span>
              </Auth>
            </EmailInput>
            <Input>
              <input type="code" name="code" value={code} onChange={(e)=> setCode(e.target.value)} placeholder="인증코드를 입력해주세요." />
            </Input>
          </LoginWrapper>
          <SignupButton onClick={checkCode}>찾기</SignupButton>
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
  margin-top: 50px;
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
    margin-top: 50px;
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
  margin-top: 140px;
  line-height: 44px;
  text-align: center;
  letter-spacing: -0.017em;
  color: #000000;
  margin-bottom: 120px;
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
    background-color: #ABA6EA;
    padding: 5px 10px 5px 10px;
    color: white;
    position: absolute;
    right: 20px;
    border-radius: 10px;
    cursor: pointer;
`;

const SignupButton = styled.button`
    background-color: #ABA6EA;
    width: 200px;
    height: 45px;
    color: white;
    cursor: pointer;
    border-radius: 10px;
    font-size: 20px;
    margin: 60px auto auto;
`;

export default FindId;
