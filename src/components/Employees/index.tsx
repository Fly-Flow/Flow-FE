import {
  Box,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";

const renderHeader = () => {
  return (
    <Typography variant="h4" sx={{ cursor: "default" }}>
      구성원
    </Typography>
  );
};

const renderToolbar = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <TextField size="small" label="이름" />
      <Button variant="contained">구성원 추가</Button>
    </Box>
  );
};

const renderTable = () => {
  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>사원번호</TableCell>
            <TableCell>이름</TableCell>
            <TableCell>부서</TableCell>
            <TableCell>직급</TableCell>
            <TableCell>입사일자</TableCell>
            <TableCell>권한</TableCell>
          </TableRow>
        </TableHead>
        <TableBody></TableBody>
      </Table>
    </TableContainer>
  );
};

const Employees: React.FC = (props) => {
  return (
    <>
      {renderHeader()}
      {renderToolbar()}
      {renderTable()}
    </>
  );
};

export default Employees;
