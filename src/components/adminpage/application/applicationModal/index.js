import styled from "styled-components";
import { useEffect, useState } from "react";


const ApplicationModal = ({ index, clickindex, values, setModal }) => {
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
          <p>{values.department}</p>
          <p>{values.position}</p>
          <DateWrapper>
            <Date>
                <p>시작일</p>
                <YMD>2022.11.01</YMD>
            </Date>
            <span>~</span>
            <Date>
                <p>종료일</p>
                <YMD>2022.11.02</YMD>
            </Date>
          </DateWrapper>
          <ReasonWrapper>
            <p>재택 사유</p>
            <Reason>밤샘 해커톤을 했습니다</Reason>
          </ReasonWrapper>
        </ValueWrapper>
      </ModalItems>
    </ModalBackground>
  ) : null;
};

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
  p{
    margin-top: 15px;
    font-family: 'Noto Sans';
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 27px;
  }
`;

const DateWrapper = styled.div`
    display: flex;
    align-items: center;
    margin-top: 10px;
    justify-content: center;
    span{
        font-size: 30px;
        font-weight: bold;
        margin: 30px 50px 0 50px;
    }
`

const Date = styled.div`
    p{
        font-family: 'Noto Sans';
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 22px;
    }
`

const YMD = styled.p`
    background: #FDFDFD;
    border: 1px solid #D9D9D9;
    border-radius: 10px;
    width: 160px;
    height: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 25px;
    color: black;
    font-weight: bold;
`

const ReasonWrapper = styled.div`
    margin-top: 10px;
    p{
        font-family: 'Noto Sans';
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 22px;
        letter-spacing: -0.017em;
        color: #000000;
    }
`

const Reason = styled.p`
    background: #FDFDFD;
    border: 1px solid #D9D9D9;
    border-radius: 10px;
    width: 440px;
    height: 300px;
    padding: 10px;
    overflow: scroll;
    ::-webkit-scrollbar{
        display: none;
    }
`

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

export default ApplicationModal;
