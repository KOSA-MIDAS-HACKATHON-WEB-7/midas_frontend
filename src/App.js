import UserRouter from "./router/UserRouter";
import AdminRouter from "./router/AdminRouter";
import StyleProvider from "./style";
import { useEffect } from "react";
import instance from "./instance";
import { useSetRecoilState } from "recoil";
import { user } from "./recoil/atom";

const App = () => {

  const setUserinfo = useSetRecoilState(user);

  useEffect(()=>{
    instance.get('/api/user/user-info', { headers: {
      Authorization: localStorage.getItem("accessToken")
    }})
    .then((res)=>{
      console.log(res)
      setUserinfo(res.data)
    })
    .catch((e)=>{
      console.log(e)
    })
  }, [])

  return (
    <StyleProvider>
      <UserRouter />
      <AdminRouter />
    </StyleProvider>
  );
};

export default App;