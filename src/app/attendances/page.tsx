import Attendances from "@/components/Attendances";
import SideBar from "@/components/shared/SideBar";
import { Box } from "@mui/material";

const AttendancesPage = () => {
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
        <Attendances />
      </Box>
    </>
  );
};

export default AttendancesPage;
