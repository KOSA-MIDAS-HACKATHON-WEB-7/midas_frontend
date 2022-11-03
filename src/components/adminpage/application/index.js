import styled from "styled-components";
import { useState } from "react";
import AdminHeader from "../../common/header/AdminHeader"
import { Application } from "../../../constance/application";
import ApplicationModal from "./applicationModal";

const AdminApplcation = () => {
  const [modal, setModal] = useState(false);
  const [index, setIndex] = useState(0);
  const contents = [
    "Name",
    "Start",
    "End",
    "Dept",
    "Position",
  ];
  return (
    <>
      <AdminHeader />
      <InformationWrapper>
        <Information>
          <AdminTitle>Application List</AdminTitle>
          <TableContents>
            {contents.map((e, i) => (
              <span key={i}>{e}</span>
            ))}
          </TableContents>
          {Application.map((e, i) => (
            <div key={i}>
              <UserTable
                onClick={() => {
                  setModal(true);
                  setIndex(i);
                }}
              >
                <span>{e.name}</span>
                <span>{e.start}</span>
                <span>{e.end}</span>
                <span>{e.department}</span>
                <span>{e.position}</span>
              </UserTable>
              {modal && (
                <ApplicationModal index={index} clickindex={i} values={e} setModal={setModal} />
              )}
            </div>
          ))}
        </Information>
      </InformationWrapper>
    </>
  );
};


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

export default AdminApplcation;
