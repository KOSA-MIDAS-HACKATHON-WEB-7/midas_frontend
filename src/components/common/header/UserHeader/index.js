import styled from "styled-components";
import { MainLogo, Profile } from "../../../../assets";
import { Link } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { user } from "../../../../recoil/atom";

const UserHeader = () => {

  const userinfo = useRecoilValue(user);

  return (
    <HeaderBackGround>
      <LogoWrapper to="/main">
        <Logo src={MainLogo} alt="로고" />
        <LogoText>기관지</LogoText>
      </LogoWrapper>
      <NavWrapper>
        <HomeWorking to="/application">재택근무 신청</HomeWorking>
      </NavWrapper>
      <ProfileWrapper to="/mypage">
        <ProfileImgWrapper>
          <img src={Profile} alt="프로필 사진" />
        </ProfileImgWrapper>
        <NameText>{userinfo.userName}</NameText>
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
  max-width: 150px;
  cursor: pointer;
  color: #000000;
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

const ProfileWrapper = styled(Link)`
  width: 150px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-right: 100px;
  text-decoration: none;
  color: #000000;
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
  font-weight: 800;
  font-size: 20px;
  line-height: 27px;
  letter-spacing: -0.017em;
  color: #fdfdfd;
  cursor: pointer;
  margin-left: 10px;
`;

const LogoWrapper = styled(Link)`
  width: 120px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-left: 30px;
  text-decoration: none;
  color: #fdfdfd;
`;

const NavWrapper = styled.div`
  width: 150px;
  margin-left: 70em;
`;

const HomeWorking = styled(Link)`
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 27px;
  color: #000000;
  text-decoration: none;
  :hover {
    text-decoration: underline;
  }
`;

export default UserHeader;
