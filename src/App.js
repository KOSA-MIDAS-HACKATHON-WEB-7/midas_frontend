import { Route, Routes, BrowserRouter } from "react-router-dom";
import About from "./components/about/about";
import LoginPage from "./components/login";
import SingupPage from "./components/signup/singup";
import Main from "./components/main";
import StyleProvider from "./style";
import Application from "./components/applicaton";
import Mypage from "./components/mypage";

const App = () => {
  return (
    <StyleProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/signup" element={<SingupPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/main" element={<Main />} />
          <Route path="/application" element={<Application/>} />
          <Route path="/mypage" element={<Mypage/>} />
        </Routes>
      </BrowserRouter>
    </StyleProvider>
  );
};

export default App;
