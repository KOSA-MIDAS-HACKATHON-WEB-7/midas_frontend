import { Route, Routes, BrowserRouter } from "react-router-dom";
import LoginPage from "./components/login";
import StyleProvider from "./style";

const App = () => {
  return (
    <StyleProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
        </Routes>
      </BrowserRouter>
    </StyleProvider>
  );
}; 

export default App;
