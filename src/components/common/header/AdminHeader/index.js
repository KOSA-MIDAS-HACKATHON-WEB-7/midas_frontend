import styled from "styled-components";
import { MainLogo, Profile } from "../../../../assets";
import { Link } from 'react-router-dom'
import { useRecoilValue } from "recoil";
import { user } from "../../../../recoil/atom";

const AdminHeader = () => {
  
  const userinfo = useRecoilValue(user);

  return (
    <HeaderBackGround>
      <LogoWrapper>
        <Logo src={MainLogo} alt="로고" />
        <LogoText>기관지</LogoText>
      </LogoWrapper>
      <NavWrapper>
        <Link to="/admin">Workers</Link>
        <Link to="/admin/application">Application</Link>
        <Link to="/admin/signup">Signup</Link>
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

const ProfileWrapper = styled(Link)`
  width: 100px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-right: 100px;
  text-decoration: none;
  margin-left: 80px;
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

const NavWrapper = styled.div`
  width: 150px;
  margin-left: 70em;
  a{
    text-decoration: none;
    font-family: 'Noto Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
    color: black;
    margin-right: 30px;
  }
`


export default AdminHeader;
