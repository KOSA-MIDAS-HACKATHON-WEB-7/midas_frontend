import styled from "styled-components";

const ReasonModal = ({ setModal }) => {
  return (
    <>
      <Modal>
        <Title>재택 거절 이유</Title>
        <Text>지금까지 근무시간이 매우 부족하여 일할 시간이 필요함.</Text>
        <Submit onClick={() => setModal(false) }>확인</Submit>
      </Modal>
      <ModalBackground onClick={() => setModal(false)} />
    </>
  );
};

const ModalBackground = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 2;
  position: absolute;
`;

const Text = styled.p`
    margin-top: 30px;
    font-family: 'Noto Sans';
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 33px;
    letter-spacing: -0.017em;
    color: #000000;
`

const Modal = styled.div`
  background: #fdfdfd;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 15px;
  width: 700px;
  height: 400px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 3;
  padding: 30px;
`;

const Title = styled.div`
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 44px;
  border-bottom: 1px solid #000000;
  width: 308px;
  padding-bottom: 15px;
`;

const Submit = styled.button`
  background: #aba6ea;
  border-radius: 10px;
  width: 150px;
  height: 50px;
  color: white;
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 22px;
  color: #ffffff;
  position: absolute;
  right: 60px;
  bottom: 30px;
  cursor: pointer;
`;

export default ReasonModal;
