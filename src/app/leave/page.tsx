import Leave from "@/components/Leave";
import SideBar from "@/components/shared/SideBar";
import { Box } from "@mui/material";

const LeavePage = () => {
  return (
    <>
      <SideBar />
      <Box
        component="main"
        sx={{
          marginLeft: "14rem",
          padding: "1rem",
        }}
      >
        <Leave />
      </Box>
    </>
  );
};

export default LeavePage;
