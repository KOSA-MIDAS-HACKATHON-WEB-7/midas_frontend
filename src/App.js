import { Route, Routes, BrowserRouter } from "react-router-dom";
import Test from "./components/test";
import StyleProvider from "./style";

const App = () => {
  return (
    <StyleProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Test />} />
        </Routes>
      </BrowserRouter>
    </StyleProvider>
  );
};

export default App;
