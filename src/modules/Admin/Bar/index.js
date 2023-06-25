import React from "react";
import AdminHeader from "../../../components/Admin/Header";
import { Box } from "@mui/material";
import BarChart from "../../../components/Admin/BarChart";

const Bar = () => {
  return (
    <Box m="20px">
      <AdminHeader title="Bar Chart" subtitle="Simple Bar Chart" />
      <Box height="70vh">
        <BarChart />
      </Box>
    </Box>
  );
};

export default Bar;
