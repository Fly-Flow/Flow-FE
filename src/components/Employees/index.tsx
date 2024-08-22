import { Box, Button, TextField, Typography } from "@mui/material";

const renderToolbar = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "2rem",
      }}
    >
      <TextField size="small" label="이름" />
      <Button variant="contained">구성원 추가</Button>
    </Box>
  );
};

const Employees: React.FC = (props) => {
  return (
    <>
      <Typography variant="h4" sx={{ cursor: "default" }}>
        구성원
      </Typography>
      {renderToolbar()}
    </>
  );
};

export default Employees;
