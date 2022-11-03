import styled from "styled-components";
import { useLayoutEffect, useState } from "react";
import AdminModal from "./adminmodal";
import AdminHeader from "../common/header/AdminHeader";
import instance from '../../instance';
import { useQueryClient, useMutation } from 'react-query'

const AdminPage = () => {

  const queryClient = useQueryClient();
  const [userList, setUserList] = useState([]);

  useLayoutEffect(()=>{
    instance.get('/api/user')
    .then((res)=>{
      setUserList(res.data)
    })
    .catch((e)=>{
      console.log(e)
    })
  }, [])

  

  const [modal, setModal] = useState(false);
  const [index, setIndex] = useState(0);
  const contents = [
    "Name",
    "ID",
    "Start",
    "End",
    "Dept", 
    "Position",
    "Working",
  ];
  return (
    <>
      <AdminHeader />
      <InformationWrapper>
        <Information>
          <AdminTitle>Workers List</AdminTitle>
          <TableContents>
            {contents.map((e, i) => (
              <span key={i}>{e}</span>
            ))}
          </TableContents>
          {userList.map((e, i) => (
            <div key={i}>
              <UserTable
                onClick={() => {
                  setModal(true);
                  setIndex(i);
                }}
              >
                <span>{e.userName}</span>
                <span>{e.accountId}</span>
                <span>{e.coreTimeStart}</span>
                <span>{e.coreTimeEnd}</span>
                <span>{e.department}</span>
                <span>{e.position}</span>
                <Working working={e.workWhere}>{e.workWhere}</Working> 
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
  display: grid;
  grid-template-columns: repeat(7, 1fr);
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
  grid-template-columns: repeat(7, 1fr);
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

export default AdminPage;
