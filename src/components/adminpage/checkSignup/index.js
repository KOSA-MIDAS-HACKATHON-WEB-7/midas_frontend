import styled from "styled-components";
import { useState } from "react";
import AdminHeader from "../../common/header/AdminHeader"
import { User } from "../../../constance/user";

const CheckSignup = () => {

    const confirmSignup = () => {
        const result = window.confirm("회원가입을 허용하시겠습니까? (취소시 허용 안함으로 간주)")
        
    }

  const contents = [
    "Name",
    "ID",
    "Dept",
    "Position",
    "Join",
  ];
  return (
    <>
      <AdminHeader />
      <InformationWrapper>
        <Information>
          <AdminTitle>Signup List</AdminTitle>
          <TableContents>
            {contents.map((e, i) => (
              <span key={i}>{e}</span>
            ))}
          </TableContents>
          {User.map((e, i) => (
            <div key={i}>
              <UserTable>
                <span>{e.name}</span>
                <span>{e.id}</span>
                <span>{e.department}</span>
                <span>{e.position}</span>
                <ConfirmButton onClick={confirmSignup}>confirm</ConfirmButton>
              </UserTable>
            </div>
          ))}
        </Information>
      </InformationWrapper>
    </>
  );
};


const ConfirmButton = styled.p`
    font-family: 'Noto Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 22px;
    letter-spacing: -0.017em;
    color: #53DC19;
    margin-right: 10px;
    cursor: pointer;
`

const UserTable = styled.div`
  height: 50px;
  background: #fdfdfd;
  border: 0.5px solid #000000;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  align-items: center;
  justify-items: center;
  cursor: pointer;
  span {
    font-family: "Noto Sans";
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 22px;
    letter-spacing: -0.017em;
    color: #000000;
  }
`;

const TableContents = styled.div`
  width: 1100px;
  height: 50px;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  align-items: center;
  justify-items: center;
  background: #aba6ea;
  color: white;
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 33px;
  letter-spacing: -0.017em;
`;

const Information = styled.div`
  width: 1100px;
  height: 750px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const InformationWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const AdminTitle = styled.span`
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 48px;
  line-height: 65px;
  letter-spacing: -0.017em;
  color: #000000;
  margin: 150px 0 50px 0;
`;

export default CheckSignup;
