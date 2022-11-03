import styled from "styled-components";
import { useEffect } from "react";

const AdminModal = ({ index, clickindex, values, setModal }) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
  }, []);
  const closeModal = () => setModal(false);

  if (index !== clickindex) {
    return;
  }
  return index === clickindex ? (
    <ModalBackground onClick={closeModal}>
      <ModalItems onClick={(e) => e.stopPropagation()}>
        <ValueWrapper>
          <UserName>{values.name}</UserName>
          <Flexend>
            <ModifyBtn>Modify</ModifyBtn>
          </Flexend>
          <Wrapper>
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
          </Wrapper>
        </ValueWrapper>
        <CheckButton onClick={closeModal}>CHECK</CheckButton>
      </ModalItems>
    </ModalBackground>
  ) : null;
};

const CheckButton = styled.button`
  background: #aba6ea;
  border-radius: 15px;
  padding: 22px 50px;
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 22px;
  letter-spacing: -0.017em;
  color: #ffffff;
  cursor: pointer;
  margin-bottom: 10px;
`;

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

const Wrapper = styled.div`
  width: 300px;
  height: 350px;
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const ModifyBtn = styled.button`
  width: 150px;
  height: 40px;
  background: #f7f8f9;
  border-radius: 10px;
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 22px;
  letter-spacing: -0.017em;
  color: #000000;
  padding: 9px 49px;
  cursor: pointer;
  :hover {
    background: #dadfe3;
  }
`;

const Flexend = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

const UserName = styled.span`
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  line-height: 54px;
  letter-spacing: -0.017em;
  color: #000000;
  margin-top: 30px;
`;

const ValueWrapper = styled.div`
  width: 450px;
  height: 660px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ModalBackground = styled.div`
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  position: absolute;
  z-index: 100;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalItems = styled.div`
  width: 600px;
  height: 800px;
  background: #fdfdfd;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

export default AdminModal;
