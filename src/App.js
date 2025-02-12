import GlobalStyles from "./components/styles/globalStyles";
import Home from "./Home";
import Students from "./Students";
import { ThemeProvider } from "styled-components";

function App() {
  const theme = {
    colors: {
      sidebar: "#FFFFFF",
      body: "#EBF7F7",
    },
  };
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <>
        <Home>{<Students />}</Home>
      </>
    </ThemeProvider>
  );
}

export default App;
