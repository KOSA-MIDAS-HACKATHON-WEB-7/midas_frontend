import styled from "styled-components";
import { useEffect, useState } from "react";
import ModifyInformation from "../modifyinformation";
import ValueInformation from "../valueinformation";
import instance from "../../../instance";

const AdminModal = ({ index, clickindex, values, setModal }) => {
  const [modify, setModify] = useState(false);
  useEffect(() => {
    document.body.style.overflow = "hidden";
  }, []);
  const closeModal = () => setModal(false);

  const modifyFunc = (data) => {
    console.log(data)
    instance.put('/admin/user-info', {
      accountId: values.accountId,
      position: data.position,
      department: data.department,
      newAccountId: data.accountId
    }, { headers: {
      Authorization: `Bearer ${localStorage.getItem('accessToken')}`
    }})
    .catch((e)=>{
      alert("수정 실패")
      console.log(e);
    })
  }

  if (index !== clickindex) {
    return;
  }
  return index === clickindex ? (
    <ModalBackground onClick={closeModal}>
      <ModalItems onClick={(e) => e.stopPropagation()}>
        <ValueWrapper>
          <UserName>{values.userName}</UserName>
          <Flexend>
            <ModifyBtn onClick={() => setModify(!modify)}>
              {modify ? "Done" : "Modify"}
            </ModifyBtn>
          </Flexend>
          <Wrapper>
            {modify ? (
              <ModifyInformation values={values} onClick={modifyFunc} />
            ) : (
              <ValueInformation values={values} />
            )}
          </Wrapper>
        </ValueWrapper>
        {!modify ? <CheckButton onClick={closeModal}>CHECK</CheckButton> : null}
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

const Wrapper = styled.div`
  width: 300px;
  height: 350px;
  margin-top: 60px;
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
