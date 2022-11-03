import { useState, useEffect } from "react";
import styled from "styled-components"
import { Profile } from "../../assets";
import Header from "../common/header";
import ApplicationList from "./applicationList";
import DeleteModal from "./deleteModal";

const Mypage = () => {

    const [modal, setModal] = useState(false);

    useEffect(() => {
        if (modal) {
            window.scrollTo(0, 0)
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset"
        }
    }, [modal]);

    return(
        <>
            {modal && <DeleteModal setModal={setModal} />}
            <Header/>
            <UserWrapper>
                <UserInfo>
                    <img src={Profile} alt="icon" />
                    <Info>
                        <p>이름값</p>
                        <Company>마이다스IT</Company>
                        <Dept>직책</Dept>
                    </Info>
                </UserInfo>
                <ChangePassword onClick={() => setModal((prev)=> !prev)}>비밀번호 변경</ChangePassword>
                <HomeWorkingCheck>
                    <Text>재택근무 확인</Text>
                    <List>
                        <ApplicationList start={"2022.10.31"} end={"2022.11.05"} state={"승인"} />
                        <ApplicationList start={"2022.11.06"} end={"2022.11.10"} state={"대기"} />
                        <ApplicationList start={"2022.12.31"} end={"2040.01.01"} state={"거절"} />
                    </List>
                </HomeWorkingCheck>
            </UserWrapper>
        </>
    )
}

const UserWrapper = styled.div`
    width: 800px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const UserInfo = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    margin-top: 150px;
    padding-bottom: 50px;
    padding-left: 80px;
    border-bottom: 3px solid #999999;
    img{
        width: 100px;
        height: 100px;
        border: 2px solid black;
        border-radius: 50%;
        padding: 10px;
    }
`

const Info = styled.p`
    p{
        font-weight: 700;
        font-size: 32px;
        line-height: 44px;
        margin-bottom: 5px;
    }
    font-family: 'Noto Sans';
    font-style: normal;
    color: #000000;
    margin-left: 70px;
`

const Company = styled.span`
    font-weight: 500;
    font-size: 24px;
    line-height: 33px;
`

const Dept = styled.span`
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
    margin-left: 20px;
`

const ChangePassword = styled.button`
    cursor: pointer;
    width: 700px;
    height: 100px;
    background: #FDFDFD;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 15px;
    margin-top: 40px;
    font-family: 'Noto Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 44px;
    text-align: left;
    padding-left: 40px;
    &:hover{
        transform: scale(1.05);
    }
`

const HomeWorkingCheck = styled.div`
    width: 100%;
    margin-top: 70px;
`

const Text = styled.p`
    font-family: 'Noto Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 44px;
    margin-bottom: 40px;
`

const List = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export default Mypage;