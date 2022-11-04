import styled from "styled-components";

const ValueInformation = ({ values }) => {
  return (
    <>
      <ValueItems>
        <ValueTitle>ID</ValueTitle>
        <ValueText>{values.accountId}</ValueText>
      </ValueItems>
      <ValueItems>
        <ValueTitle>Department</ValueTitle>
        <ValueText>{values.department}</ValueText>
      </ValueItems>
      <ValueItems>
        <ValueTitle>Position</ValueTitle>
        <ValueText>{values.position}</ValueText>
      </ValueItems>
      <ValueItems>
        <ValueTitle>Working</ValueTitle>
        <ValueText>{values.workWhere}</ValueText>
      </ValueItems>
      <ValueItems>
        <ValueTitle>Core Start Time</ValueTitle>
        <ValueText>{values.coreTimeStart}</ValueText>
      </ValueItems>
      <ValueItems>
        <ValueTitle>Core End Time</ValueTitle>
        <ValueText>{values.coreTimeEnd}</ValueText>
      </ValueItems>
    </>
  );
};

const ValueText = styled.span`
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 22px;
  letter-spacing: -0.017em;
  color: #000000;
`;

const ValueItems = styled.div`
  width: 100%;
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

export default ValueInformation;
