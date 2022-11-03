import styled from "styled-components";
import { MainLogo, Profile } from "../../../assets";

const Header = () => {
  return (
    <HeaderBackGround>
      <LogoWrapper>
        <Logo src={MainLogo} alt="로고" />
        <LogoText>기관지</LogoText>
      </LogoWrapper>
      <ProfileWrapper>
        <ProfileImgWrapper>
          <img src={Profile} alt="프로필 사진" />
        </ProfileImgWrapper>
        <NameText>아무거</NameText>
      </ProfileWrapper>
    </HeaderBackGround>
  );
};

const NameText = styled.span`
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 27px;
  letter-spacing: -0.017em;
  cursor: pointer;
`;

const ProfileImgWrapper = styled.div`
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fdfdfd;
  border-radius: 100px;
`;

const ProfileWrapper = styled.div`
  width: 100px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-right: 100px;
`;

const HeaderBackGround = styled.div`
  width: 100%;
  height: 70px;
  background: #aba6ea;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.img`
  width: 50px;
  height: 50px;
  cursor: pointer;
`;

const LogoText = styled.span`
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 27px;
  letter-spacing: -0.017em;
  color: #fdfdfd;
  cursor: pointer;
`;

const LogoWrapper = styled.div`
  width: 120px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-left: 30px;
`;

export default Header;
