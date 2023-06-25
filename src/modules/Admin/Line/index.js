import React from "react";
import { Box } from "@mui/material";
import LineChart from "../../../components/Admin/LineChart";
import AdminHeader from "../../../components/Admin/Header";

const Line = () => {
  return (
    <Box m="20px">
      <AdminHeader title="Line Chart" subtitle="Simple Line Chart" />
      <Box height="70vh">
        <LineChart />
      </Box>
    </Box>
  );
};

export default Line;
