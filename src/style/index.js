import GlobalStyle from "./global";

const StyleProvider = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      {children}
    </>
  );
};

export default StyleProvider;
