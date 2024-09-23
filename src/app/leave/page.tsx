import Vacation from "@/components/Vacation";
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
        <Vacation />
      </Box>
    </>
  );
};

export default LeavePage;
