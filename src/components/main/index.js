import Header from "../common/header/UserHeader";
import FullCalendar from "@fullcalendar/react";
import timeGridPlugin from "@fullcalendar/timegrid";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import { Character } from "../../assets";
import styled from "styled-components";

const Main = () => {
  const handlerClick = () => {
    const { scrollY } = window;
  };
  return (
    <>
      <Header />
      <MainIntroduce>
        <Introduce>
          기관지는 회사원의 편의성을 위해 만들어졌습니다. <br /> <br />
          우리 모두 기록하고 관리합시다. 지금 출퇴근시간 !
        </Introduce>
        <CharcterImage src={Character} alt="character" />
      </MainIntroduce>
      <IntroduceTitle>나의 근무 시간 확인</IntroduceTitle>
      <Flex>
        <Calendar>
          <FullCalendar
            plugins={[dayGridPlugin, interactionPlugin, timeGridPlugin]}
            headerToolbar={{
              left: "prev,next today",
              center: "title",
              right: "",
            }}
            editable={true}
            initialView="dayGridMonth"
            weekends={true}
            eventDisplay={"block"}
            eventTextColor={"#FFF"}
            eventColor={"#F2921D"}
            height={"100%"}
            events={[]}
          />
        </Calendar>
        <Time>
          <Title onClick={handlerClick}>이번 주 총 근무시간</Title>
          <Week>29/40 (단위:시간)</Week>
          <Today>
            Today: <span>0시간 1분</span>
          </Today>
          <StateWrapper>
            현재상태: <State>미달</State>
          </StateWrapper>
          <StartButton>퇴근</StartButton>
        </Time>
      </Flex>
    </>
  );
};

const IntroduceTitle = styled.span`
  margin-left: 150px;
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 44px;
  letter-spacing: -0.017em;
  color: #000000;
`;

const CharcterImage = styled.img`
  width: 500px;
  height: 413.73px;
`;

const Introduce = styled.span`
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  line-height: 44px;
  letter-spacing: -0.017em;
  color: #000000;
`;

const MainIntroduce = styled.div`
  width: 100%;
  height: 750px;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const Calendar = styled.div`
  width: 926px;
  height: 610px;
  margin: 170px 0 0 150px;
`;

const Time = styled.div`
  width: 350px;
  height: 400px;
  background: #fdfdfd;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  position: relative;
  top: 30%;
  margin-left: 150px;
  text-align: center;
  @keyframes slideUp {
    0% {
      transform: translateY(0%);
    }
    100% {
      transform: translateY(-5%);
    }
  }
  @keyframes slideDown {
    0% {
      transform: translateY(-5%);
    }
    100% {
      transform: translateY(0%);
    }
  }
  animation: slideDown 0.4s;
  :hover {
    animation: slideUp 0.4s;
    animation-fill-mode: forwards;
  }
`;

const Flex = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
`;

const StartButton = styled.button`
  background: #aba6ea;
  border-radius: 10px;
  width: 120px;
  height: 45px;
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 25px;
  line-height: 34px;
  color: #ffffff;
  position: absolute;
  bottom: 30px;
  left: 50%;
  transform: translate(-50%, 0%);
  cursor: pointer;
`;

const Title = styled.p`
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  line-height: 44px;
  color: #000000;
  margin-top: 40px;
`;

const Week = styled.p`
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 33px;
  color: #000000;
  margin-top: 30px;
`;

const Today = styled.p`
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 33px;
  color: #000000;
  margin-top: 30px;
  span {
    font-weight: 400;
  }
`;

const StateWrapper = styled.p`
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 19px;
  color: #000000;
  margin-top: 35px;
`;

const State = styled.span`
  margin-left: 20px;
  margin-right: 20px;
  color: #e03131;
`;

export default Main;
