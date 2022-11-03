import styled from "styled-components";
import { useState } from "react";
import axios from "axios";

const DeleteModal = ({ setModal }) => {
  const [input, setInput] = useState({
    beforePassword: "",
    afterPassword: "",
    afterPasswordCheck: "",
  });
  const onChange = (e) => {
    const { name, value } = e.target;
    setInput((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const submitClick = () => {
    if (input.afterPassword.length < 4 || input.afterPasswordCheck < 4) {
      alert("비밀번호 길이가 짧습니다.");
      return;
    }
    axios
      .put(`http://localhost:8080/auth/update-password-mypage`, {
        accountId: "asdfq",
        ...input,
      })
      .then((res) => {
        console.log(res);
        alert("비밀번호가 변경되었습니다.");
        setModal(false);
      })
      .catch((err) => console.error(err));
  };
  return (
    <>
      <Modal>
        <Title>비밀번호 변경</Title>
        <Input>
          <input
            value={input.beforePassword}
            onChange={onChange}
            name="beforePassword"
            placeholder="기존 비밀번호를 입력해주세요."
            type="password"
          />
        </Input>
        <Input>
          <input
            value={input.afterPassword}
            onChange={onChange}
            name="afterPassword"
            placeholder="변경할 비밀번호를 입력해주세요."
            type="password"
          />
        </Input>
        <Input>
          <input
            value={input.afterPasswordCheck}
            onChange={onChange}
            name="afterPasswordCheck"
            placeholder="변경할 비밀번호를 다시 입력해주세요."
            type="password"
          />
        </Input>
        <p>비밀번호 최소길이: 4글자</p>
        <Submit onClick={submitClick}>변경</Submit>
      </Modal>
      <ModalBackground onClick={() => setModal(false)} />
    </>
  );
};

const ModalBackground = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 2;
  position: absolute;
`;

const Modal = styled.div`
  background: #fdfdfd;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 15px;
  width: 700px;
  height: 400px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 3;
  padding: 30px;
  p {
    margin-left: 20px;
    font-family: "Noto Sans";
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 19px;
    color: #e03131;
  }
`;

const Title = styled.div`
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 44px;
  border-bottom: 1px solid #000000;
  width: 308px;
  padding-bottom: 15px;
`;

const Input = styled.div`
  width: 619px;
  height: 50px;
  background: #fdfdfd;
  border: 1px solid #d9d9d9;
  border-radius: 10px;
  margin-bottom: 25px;
  display: flex;
  align-items: center;
  margin-top: 20px;
  input {
    width: 80%;
    margin-left: 20px;
  }
`;

const Submit = styled.button`
  background: #aba6ea;
  border-radius: 10px;
  width: 150px;
  height: 50px;
  color: white;
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 22px;
  color: #ffffff;
  position: absolute;
  right: 60px;
  bottom: 30px;
  cursor: pointer;
`;

export default DeleteModal;
