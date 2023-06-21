import React from "react";
import { ColorModeContext, useMode } from "./../../theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Routes, Route, RouterProvider } from "react-router-dom";
import TopBar from "./Global/TopBar";
import SideBar from "./Global/SideBar";
import DashBoard from "./DashBoard";
import Team from "./Team";
import Contacts from "./Contacts";
import Invoices from "./Invoices";
import Form from "./Form";
import Calendar from "./Calendar";

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
              <Route path="/invoices" element={<Invoices />} />
              <Route path="/form" element={<Form />} />
              <Route path="/calendar" element={<Calendar />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default AdminView;
