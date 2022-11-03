import styled from "styled-components";
import { useState } from "react";

const ModifyInformation = ({ values, onClick }) => {
  const [inputValue, setInputValue] = useState({
    accountId: values.accountId,
    password: "",
    department: values.department,
    position: values.position,
    coreTimeStart: values.coreTimeStart,
    coreTimeEnd: values.coreTimeEnd,
    workWhere: values.workWhere,
  });
  
  const onChange = (e) => {
    const { value, name } = e.target;
    console.log(value)
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  return (
    <>
      <ValueItems>
        <ValueTitle>ID</ValueTitle>
        <InputWrapper>
          <input
            type="text"
            placeholder="ID"
            onChange={onChange}
            value={inputValue.accountId}
            name="accountId"
          />
        </InputWrapper>
      </ValueItems>
      <ValueItems>
        <ValueTitle>Password</ValueTitle>
        <InputWrapper>
          <input
            type="password"
            placeholder="Password"
            onChange={onChange}
            value={inputValue.password}
            name="password"
          />
        </InputWrapper>
      </ValueItems>
      <ValueItems>
        <ValueTitle>Dept</ValueTitle>
        <InputWrapper>
          <input
            type="text"
            placeholder="Type Department"
            onChange={onChange}
            value={inputValue.department}
            name="department"
          />
        </InputWrapper>
      </ValueItems>
      <ValueItems>
        <ValueTitle>Position</ValueTitle>
        <InputWrapper>
          <input
            type="text"
            placeholder="Type Position"
            onChange={onChange}
            value={inputValue.position}
            name="position"
          />
        </InputWrapper>
      </ValueItems>
      <Button onClick={() => onClick(inputValue)}>Check</Button>
    </>
  );
};

const Button = styled.div`
  margin-left: 20em;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 40px;
  background-color: #ABA6EA;
  color: white;
  margin-top: 30px;
`

const InputWrapper = styled.div`
  width: 325px;
  height: 50px;
  background: #fdfdfd;
  border: 1px solid #d9d9d9;
  border-radius: 10px;
  display: flex;
  align-items: center;
  input {
    width: 85%;
    margin-left: 15px;
    font-family: "Noto Sans";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 22px;
    letter-spacing: -0.017em;
    color: black;
    ::placeholder {
      color: #999999;
    }
  }
`;

const ValueItems = styled.div`
  width: 450px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const ValueTitle = styled.span`
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 33px;
  letter-spacing: -0.017em;
  color: #000000;
`;

export default ModifyInformation;
