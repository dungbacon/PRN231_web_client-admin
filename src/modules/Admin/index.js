import React from "react";
import { ColorModeContext, useMode } from "./../../theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Routes, Route, RouterProvider } from "react-router-dom";
import TopBar from "./Global/TopBar";
import SideBar from "./Global/SideBar";
import DashBoard from "./DashBoard";
import Team from "./Team";
// import Invoices from "./invoices";
import Contacts from "./Contacts";
// import Bar from "./bar";
// import Form from "./form";
// import Line from "./line";
// import Pipe from "./pipe";
// import FAQ from "./faq";
// import Geography from "./geography";
// import Calendar from "./calendar";

const AdminView = () => {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <SideBar />
          <main className="content">
            <TopBar />
            <Routes>
              <Route path="/" element={<DashBoard />} />
              <Route path="/team" element={<Team />} />
              <Route path="/contacts" element={<Contacts />} />
              {/* Add other nested Route components here */}
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default AdminView;
