import styled from "styled-components";

const ValueInformation = ({ values }) => {
  return (
    <>
      <ValueItems>
        <ValueTitle>ID</ValueTitle>
        <ValueText>{values.id}</ValueText>
      </ValueItems>
      <ValueItems>
        <ValueTitle>Password</ValueTitle>
        <ValueText>{values.password}</ValueText>
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
        <ValueText>{values.working}</ValueText>
      </ValueItems>
      <ValueItems>
        <ValueTitle>Core Time</ValueTitle>
        <ValueText>
          {values.coretime.map((v, i) => (
            <span key={i} style={{ marginRight: "5px" }}>
              {v} {i === 0 ? " ~ " : null}
            </span>
          ))}
        </ValueText>
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
