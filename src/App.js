import React, { useState, useEffect } from "react";
import MangePartnerPage from "./pages/MangePartnerPage";
import { createTheme, ThemeProvider } from '@mui/material/styles'

const App=()=> {
  const theme = createTheme({
    palette: {
      primary: {
        main: '#4f46e5',
        contrastText: '#FFF'
      },
      secondary: {
        main: '#dbdbdb'
      },
      line: {
        main: '#00c300',
        contrastText: '#FFF'
      }
    }
  })
  return (
    <div>
      <ThemeProvider theme={theme}>
        <MangePartnerPage/>
      </ThemeProvider>
      
    </div>
  );
}

export default App
