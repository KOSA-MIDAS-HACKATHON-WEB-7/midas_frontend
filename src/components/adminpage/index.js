import Header from "../common/header";
import styled from "styled-components";
import { User } from "../../constance/user";
import { useState } from "react";
import AdminModal from "./adminmodal";

const AdminPage = () => {
  const [modal, setModal] = useState(false);
  const [index, setIndex] = useState(0);
  const contents = [
    "Name",
    "ID",
    "Password",
    "Department",
    "Position",
    "Working",
  ];
  return (
    <>
      <Header />
      <InformationWrapper>
        <Information>
          <AdminTitle>Workers List</AdminTitle>
          <TableContents>
            {contents.map((e, i) => (
              <span key={i}>{e}</span>
            ))}
          </TableContents>
          {User.map((e, i) => (
            <div key={i}>
              <UserTable
                onClick={() => {
                  setModal(true);
                  setIndex(i);
                }}
              >
                <span>{e.name}</span>
                <span>{e.id}</span>
                <span>{e.password}</span>
                <span>{e.department}</span>
                <span>{e.position}</span>
                <Working working={e.working}>{e.working}</Working>
              </UserTable>
              {modal && (
                <AdminModal index={index} clickindex={i} values={e} setModal={setModal} />
              )}
            </div>
          ))}
        </Information>
      </InformationWrapper>
    </>
  );
};

const Working = styled.span`
  color: ${(props) => (props.working === "Company" ? "#53DC19" : "#E03131")};
`;

const UserTable = styled.div`
  height: 50px;
  background: #fdfdfd;
  border: 0.5px solid #000000;
  display: flex;
  justify-content: space-around;
  align-items: center;
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
  display: flex;
  justify-content: space-around;
  align-items: center;
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
`;

export default AdminPage;
