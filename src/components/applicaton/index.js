import styled from "styled-components";
import { ApplicationImage } from "../../assets";
import Header from "../common/header/UserHeader";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Application = () => {
  const nav = useNavigate();
  const [input, setInput] = useState({
    startDate: 0,
    endDate: 0,
    reason: "",
  });
  const onChange = (e) => {
    const { name, value } = e.target;
    setInput((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const onClick = () => {
    if (input.reason === "") {
      alert("사유를 적어주세요");
      return;
    }
    axios
      .post(`http://localhost:8080/api/user/work-home/application`, {
        ...input,
        id: null,
        userId: 2,
      })
      .then((res) => {
        console.log(res);
        nav(-1);
      })
      .catch((err) => {
        console.error(err);
        alert("오류 발생");
      });
  };
  return (
    <>
      <Header />
      <Flex>
        <ImageSize>
          <img src={ApplicationImage} alt="icon" />
        </ImageSize>
        <Form>
          <Title>재택근무 신청서</Title>
          <InputWrapper>
            <Input>
              <p>시작일</p>
              <input
                value={input.startDate}
                onChange={onChange}
                name="startDate"
                type="date"
              />
            </Input>
            <span>~</span>
            <Input>
              <p>종료일</p>
              <input
                value={input.endDate}
                onChange={onChange}
                name="endDate"
                type="date"
              />
            </Input>
          </InputWrapper>
          <Reason>
            <p>재택 사유</p>
            <textarea
              value={input.reason}
              onChange={onChange}
              name="reason"
              placeholder="사유를 입력해주세요"
            />
          </Reason>
          <Submit onClick={onClick}>신청</Submit>
        </Form>
      </Flex>
    </>
  );
};

const Flex = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ImageSize = styled.div`
  width: 500px;
  height: 300px;
`;

const Form = styled.div`
  background: #fdfdfd;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 15px;
  width: 600px;
  height: 800px;
  padding: 30px;
  margin-top: 50px;
  margin-left: 170px;
  position: relative;
`;

const Title = styled.h1`
  padding-top: 20px;
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 44px;
  color: #000000;
  text-align: center;
`;

const InputWrapper = styled.div`
  margin-top: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  span {
    font-size: 30px;
    font-weight: bold;
    margin: 15px 40px 0 40px;
  }
`;

const Input = styled.div`
  p {
    font-family: "Noto Sans";
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 22px;
    color: #000000;
  }
  input {
    margin-top: 10px;
    font-size: 20px;
    border: 1px solid #d9d9d9;
    padding: 5px;
  }
`;

const Reason = styled.div`
  margin-top: 50px;
  p {
    font-family: "Noto Sans";
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 22px;
    letter-spacing: -0.017em;
    color: #000000;
  }
  textarea {
    margin-top: 20px;
    background: #fdfdfd;
    border: 1px solid #d9d9d9;
    border-radius: 10px;
    width: 500px;
    height: 350px;
    padding: 10px;
    font-size: 15px;
  }
`;

const Submit = styled.button`
  cursor: pointer;
  background: #aba6ea;
  border-radius: 10px;
  width: 140px;
  height: 50px;
  font-size: 20px;
  color: white;
  position: absolute;
  right: 70px;
  bottom: 20px;
`;

export default Application;
