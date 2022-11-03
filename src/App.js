import { Route, Routes, BrowserRouter } from "react-router-dom";
import About from "./components/about/about";
import LoginPage from "./components/login";
import SingupPage from "./components/signup/singup";
import StyleProvider from "./style";

const App = () => {
  return (
    <StyleProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/signup" element={<SingupPage />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </StyleProvider>
  );
}; 

export default App;
