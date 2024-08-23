import Employees from "@/components/Employees";
import SideBar from "@/components/shared/SideBar";
import { Box } from "@mui/material";

const EmployeesPage = () => {
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
        <Employees />
      </Box>
    </>
  );
};

export default EmployeesPage;
