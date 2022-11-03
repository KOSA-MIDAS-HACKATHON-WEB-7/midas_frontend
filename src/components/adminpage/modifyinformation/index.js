import styled from "styled-components";
import { useState } from "react";

const ModifyInformation = ({ values }) => {
  const [inputValue, setInputValue] = useState({
    id: values.id,
    password: values.password,
    department: values.department,
    position: values.position,
    working: values.working,
  });
  const [firstCoreTime, setFirstCoreTime] = useState(values.coretime[0]);
  const [secondCoreTime, setSecondCoreTime] = useState(values.coretime[1]);
  const { id, password, department, position, working } = inputValue;
  const onChange = (e) => {
    const { value, name } = e.target;
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
            type="id"
            placeholder="Type ID"
            onChange={onChange}
            value={id}
            name="id"
          />
        </InputWrapper>
      </ValueItems>
      <ValueItems>
        <ValueTitle>Password</ValueTitle>
        <InputWrapper>
          <input
            type="text"
            placeholder="Type Password"
            onChange={onChange}
            value={password}
            name="password"
          />
        </InputWrapper>
      </ValueItems>
      <ValueItems>
        <ValueTitle>Department</ValueTitle>
        <InputWrapper>
          <input
            type="text"
            placeholder="Type Department"
            onChange={onChange}
            value={department}
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
            value={position}
            name="position"
          />
        </InputWrapper>
      </ValueItems>
      <ValueItems>
        <ValueTitle>Working</ValueTitle>
        <InputWrapper>
          <input
            type="text"
            placeholder="Type Working"
            onChange={onChange}
            value={working}
            name="working"
          />
        </InputWrapper>
      </ValueItems>
      <ValueItems>
        <ValueTitle>Core Time</ValueTitle>
        <input
          type="time"
          onChange={(e) => setFirstCoreTime(e.target.value)}
          value={firstCoreTime}
          name="coretime"
        />
        <span>~</span>
        <input
          type="time"
          onChange={(e) => setSecondCoreTime(e.target.value)}
          value={secondCoreTime}
          name="coretime"
        />
      </ValueItems>
    </>
  );
};

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
