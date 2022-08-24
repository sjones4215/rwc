import React from 'react';
import './App.scss';
import HomePage from "./view/HomeScreen";
import {ThemeProvider} from "@mui/material";
import {theme} from "./styles/CustomTheme";

const App = () => {
  return (
    <div>
        <ThemeProvider theme={theme}>
            <HomePage />
        </ThemeProvider>
    </div>
  );
}

export default App;
