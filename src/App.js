import { Route, Routes, BrowserRouter } from "react-router-dom";
import About from "./components/about/about";
import LoginPage from "./components/login";
import SingupPage from "./components/signup/singup";
import Main from "./components/main";
import StyleProvider from "./style";

const App = () => {
  return (
    <StyleProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/signup" element={<SingupPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/main" element={<Main />} />
        </Routes>
      </BrowserRouter>
    </StyleProvider>
  );
};

export default App;
