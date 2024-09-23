import EmployeeInfoCardPresentation from "@/components/EmployeeInfoCard/EmployeeInfoCardPresentation.tsx";
import Header from "@/components/shared/Header/index.tsx";
import SideBar from "@/components/shared/SideBar/index.tsx";
import { Box, Stack } from "@mui/material";

const MyPage = () => {
  return (
    <Stack gap="14rem" direction="row">
      <SideBar />
      <Box sx={{ padding: "1rem" }}>
        <Header label="인사 정보" />
        <EmployeeInfoCardPresentation />
      </Box>
    </Stack>
  );
};

export default MyPage;
