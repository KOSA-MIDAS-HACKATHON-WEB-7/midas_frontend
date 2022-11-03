import UserRouter from "./router/UserRouter";
import AdminRouter from "./router/AdminRouter";
import StyleProvider from "./style";

const App = () => {
  return (
    <StyleProvider>
      <UserRouter />
      <AdminRouter />
    </StyleProvider>
  );
};

export default App;