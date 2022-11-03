import { useState, useEffect } from "react";
import styled from "styled-components";
import instance from "../../instance";

const ApplicationList = () => {
  const [startDate, setStartDate] = useState(0);
  const [endDate, setEndDate] = useState(0);
  const [reason, setReason] = useState();
  const [state, setState] = useState();
  useEffect(() => {
    instance
      .post(`/api/user/check-work-home`, {
        userId: 11,
      })
      .then((res) => {
        setStartDate(res.data.startDate);
        setReason(res.data.reason);
        setEndDate(res.data.endDate);
        setState(res.data.recruitment);
        console.log(res.data);
      })
      .catch((err) => console.error(err));
  }, []);
  return (
    <ListWrapper>
      <Date>
        <span name="startDate">{startDate}</span> ~{" "}
        <span name="endDate">{endDate}</span>
      </Date>
      <ReasonWrapper>
        <ReasonTitle>사유</ReasonTitle>
        <ReasonText name="reason">{reason}</ReasonText>
      </ReasonWrapper>
      <Manage>
        <State
          onClick={() => alert(state ? "승인 상태입니다." : "거절 상태입니다.")}
          state={state}
        >
          <span>{state ? "승인" : "거절"}</span>
        </State>
      </Manage>
    </ListWrapper>
  );
};

const ReasonWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
`;

const ReasonTitle = styled.span`
  font-weight: bold;
  font-size: 16px;
  margin-right: 10px;
`;

const ReasonText = styled.span`
  font-size: 12px;
`;

const ListWrapper = styled.div`
  margin-top: 15px;
  margin-left: 40px;
  width: 600px;
  padding-bottom: 20px;
  border-bottom: 1px solid black;
  cursor: pointer;
  margin-bottom: 30px;
`;

const Date = styled.p`
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 33px;
`;

const Manage = styled.div`
  margin-top: 10px;
  display: flex;
  align-items: center;
  position: relative;
`;

const State = styled.span`
  border: 0.5px solid ${(props) => (props.state ? "#53DC19" : "#E03131")};
  border-radius: 15px;
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 22px;
  color: ${(props) => (props.state ? "#53DC19" : "#E03131")};
  width: 72px;
  height: 28px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 10px;
  cursor: pointer;
  :hover {
    background-color: ${(props) => (props.state ? "#53DC19" : "#E03131")};
    color: white;
    transform: scale(1.1);
    font-weight: bold;
  }
`;

export default ApplicationList;
