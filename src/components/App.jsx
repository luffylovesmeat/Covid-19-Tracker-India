import "./App.css";
import DrawerLeft from "./Drawer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import India from "./pages/India";
import Global from "./pages/Global";
import StateWise from "./pages/StateWise";
import State from "./pages/State";
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { lightTheme, darkTheme } from "../themes";
import { useState } from "react";

const App = () => {
  const [mode, setMode] = useState(false);
  const handleMode = () => {
    setMode(!mode);
  };
  return (
    <Router>
      <ThemeProvider theme={mode ? darkTheme : lightTheme}>
        <CssBaseline />
        <div className="App">
          <DrawerLeft modeChange={handleMode} isDark={mode} />
          <Routes>
            <Route path="/" element={<India />} />
            <Route path="/states" element={<StateWise />} />
            <Route path="/states/:stateName" element={<State />} />
            <Route path="/global" element={<Global />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </ThemeProvider>
    </Router>
  );
};

export default App;
