import { useState } from "react";
import Router from "./Router";
import GlobalStyle from "styles/globalStyles";
import { ThemeProvider } from "styled-components";
import theme from "styles/theme";

function App() {
  const [themeMode, setThemeMode] = useState("light");

  return (
    <div className="App">
      <GlobalStyle />
      <ThemeProvider
        theme={themeMode === "light" ? theme.lightTheme : theme.darkTheme}
      >
        <Router />
      </ThemeProvider>
    </div>
  );
}

export default App;
