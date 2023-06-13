import React from "react";
import AdminHeader from "../../../components/Admin/Header";
import { Box } from "@mui/material";

const DashBoard = () => {
  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <AdminHeader title="DASHBOARD" subtitle="Welcome to your Dashboard" />
      </Box>
    </Box>
  );
};

export default DashBoard;
