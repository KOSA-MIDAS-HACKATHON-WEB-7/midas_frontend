import Header from "../common/header";
import FullCalendar from '@fullcalendar/react';
import timeGridPlugin from "@fullcalendar/timegrid";
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from "@fullcalendar/interaction";
import styled from "styled-components";

const Main = () => {
  return (
    <>
      <Header />
      <Flex>
      <Calendar>
        <FullCalendar
          plugins={[dayGridPlugin, interactionPlugin, timeGridPlugin]}
          headerToolbar={{
            left: 'prev,next today',
            center: 'title',
            right: ''
          }}
          editable={true}
          initialView="dayGridMonth"
          weekends={true}
          eventDisplay={'block'}
          eventTextColor={'#FFF'}
          eventColor={'#F2921D'}
          height={'100%'}
          events={[]}
        />
      </Calendar>
      <Time>
        <Title>이번 주 총 근무시간</Title>
        <Week>29/40 (단위:시간)</Week>
        <Today>Today: <span>1시간 06분</span></Today>
        <StateWrapper>현재상태: <State>미달</State></StateWrapper>
        <StartButton>시작</StartButton>
      </Time>
      </Flex>
    </>
  );
};

const Calendar = styled.div`
  width: 926px;
  height: 610px;
  margin: 170px 0 0 150px;
`

const Time = styled.div`
  width: 350px;
  height: 400px;
  background: #FDFDFD;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  position: relative;
  top: 50%;
  margin-left: 150px;
  transform: translate(0%, -50%);
  text-align: center;
`;

const Flex = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
`

const StartButton = styled.button`
  background: #ABA6EA;
  border-radius: 10px;
  width: 120px;
  height: 45px;
  font-family: 'Noto Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 25px;
  line-height: 34px;
  color: #FFFFFF;
  position: absolute;
  bottom: 30px;
  left: 50%;
  transform: translate(-50%, 0%);
`

const Title = styled.p`
  font-family: 'Noto Sans';
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  line-height: 44px;
  color: #000000;
  margin-top: 40px;
`

const Week = styled.p`
  font-family: 'Noto Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 33px;
  color: #000000;
  margin-top: 30px;
`

const Today = styled.p`
  font-family: 'Noto Sans';
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 33px;
  color: #000000;
  margin-top: 30px;
  span{
    font-weight: 400
  }
`

const StateWrapper = styled.p`
  font-family: 'Noto Sans';
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 19px;
  color: #000000;
  margin-top: 35px;
`

const State = styled.span`
  margin-left: 20px;
  margin-right: 20px;
  color: red;
`

export default Main;
