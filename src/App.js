import UserRotuer from "./router/UserRouter";
import AdminRouter from "./router/AdminRouter";
import StyleProvider from "./style";

const App = () => {
  return (
    <StyleProvider>
      <UserRotuer />
      <AdminRouter />
    </StyleProvider>
  );
};

export default App;