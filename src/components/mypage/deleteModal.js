import styled from "styled-components";

const DeleteModal = ({ setModal }) => {

    return(
        <>
        <Modal>
            <Title>비밀번호 변경</Title>
            <Input>
                <input placeholder="기존 비밀번호를 입력해주세요." />
            </Input>
            <Input>
                <input placeholder="변경할 비밀번호를 입력해주세요." />
            </Input>
            <p>비밀번호 최소길이: 4글자</p>
            <Submit>변경</Submit>
        </Modal>
        <ModalBackground onClick={() => setModal(false)} />
        </>
    )
}

const ModalBackground = styled.div`
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    z-index: 2;
    position: absolute;
`

const Modal = styled.div`
    background: #FDFDFD;
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
    p{
        margin-left: 20px;
        font-family: 'Noto Sans';
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 19px;
        color: #E03131;
    }
`

const Title = styled.div`
    font-family: 'Noto Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 44px;
    border-bottom: 1px solid #000000;
    width: 308px;
    padding-bottom: 15px;
`

const Input = styled.div`
    width: 619px;
  height: 50px;
  background: #fdfdfd;
  border: 1px solid #d9d9d9;
  border-radius: 10px;
  margin-bottom: 25px;
  display: flex;
  align-items: center;
  margin-top: 20px;
  input {
    width: 80%;
    margin-left: 20px;
  }
`

const Submit = styled.button`
    background: #ABA6EA;
    border-radius: 10px;
    width: 150px;
    height: 50px;
    color: white;
    font-family: 'Noto Sans';
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 22px;
    color: #FFFFFF;
    position: absolute;
    right: 60px;
    bottom: 30px;
    cursor: pointer;
`

export default DeleteModal;