import React from "react";
import { Box } from "@mui/material";
import PieChart from "../../../components/Admin/PieChart";
import AdminHeader from "../../../components/Admin/Header";

const Pie = () => {
  return (
    <Box m="20px">
      <AdminHeader title="Pie Chart" subtitle="Simple Pie Chart" />
      <Box height="70vh">
        <PieChart />
      </Box>
    </Box>
  );
};

export default Pie;
