import { useState, useEffect } from "react";
import styled from "styled-components";
import { Profile } from "../../assets";
import Header from "../common/header/UserHeader";
import ApplicationList from "./applicationList";
import DeleteModal from "./deleteModal";
import ReasonModal from "./reasonModal";

const Mypage = () => {
  const [modal, setModal] = useState(false);
  const [rModal, setRModal] = useState(false);

  useEffect(() => {
    if (modal || rModal) {
      window.scrollTo(0, 0);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [modal, rModal]);

  return (
    <>
      {modal && <DeleteModal setModal={setModal} />}
      {rModal && <ReasonModal setModal={setRModal} /> }
      <Header />
      <UserWrapper>
        <UserInfo>
          <ImgWrapper>
            <Img src={Profile} alt="icon" />
          </ImgWrapper>
          <Info>
            <p>김경호</p>
            <Company>마이다스IT</Company>
            <Dept>Frontend Developer</Dept>
          </Info>
        </UserInfo>
        <ChangePassword onClick={() => setModal((prev) => !prev)}>
          비밀번호 변경하기
        </ChangePassword>
        <HomeWorkingCheck>
          <Text>재택근무 확인하기</Text>
          <List>
            <ApplicationList
              start={"2022.10.31"}
              end={"2022.11.05"}
              state={"승인"}
            />
            <ApplicationList
              start={"2022.11.06"}
              end={"2022.11.10"}
              state={"대기"}
            />
            <ApplicationList
              start={"2022.12.31"}
              end={"2040.01.01"}
              state={"거절"}
              onClick={setRModal}
            />
          </List>
        </HomeWorkingCheck>
      </UserWrapper>
    </>
  );
};

const ImgWrapper = styled.div`
  width: 100px;
  height: 100px;
  background: #fdfdfd;
  border: 0.5px solid #000000;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
`;

const Img = styled.img`
  width: 50px;
  height: 50px;
`;

const UserWrapper = styled.div`
  width: 800px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const UserInfo = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  margin-top: 150px;
  padding-bottom: 50px;
  padding-left: 80px;
  border-bottom: 3px solid #999999;
`;

const Info = styled.p`
  p {
    font-weight: 700;
    font-size: 32px;
    line-height: 44px;
    margin-bottom: 5px;
  }
  font-family: "Noto Sans";
  font-style: normal;
  color: #000000;
  margin-left: 70px;
`;

const Company = styled.span`
  font-weight: 500;
  font-size: 24px;
  line-height: 33px;
`;

const Dept = styled.span`
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  margin-left: 20px;
  color: #aba6ea;
`;

const ChangePassword = styled.button`
  cursor: pointer;
  width: 700px;
  height: 100px;
  background: #fdfdfd;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 15px;
  margin-top: 40px;
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 44px;
  text-align: left;
  padding-left: 40px;
  @keyframes sizeup {
    0% {
      transform: scale(1);
    }
    100% {
      transform: scale(1.05);
    }
  }
  @keyframes sizedown {
    0% {
      transform: scale(1.05);
    }
    100% {
      transform: scale(1);
    }
  }
  animation: sizedown 0.4s;
  :hover {
    animation: sizeup 0.4s;
    animation-fill-mode: forwards;
  }
`;

const HomeWorkingCheck = styled.div`
  width: 100%;
  margin-top: 70px;
`;

const Text = styled.p`
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 44px;
  margin-bottom: 40px;
`;

const List = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default Mypage;
