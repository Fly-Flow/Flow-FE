"use client";

import {
  Button,
  FormGroup,
  Stack,
  Typography,
  Avatar,
  TextField,
  useTheme,
} from "@mui/material";

type LoginProps = {
  onEmployeeNumberChange: React.ChangeEventHandler<HTMLInputElement>;
  onPasswordChange: React.ChangeEventHandler<HTMLInputElement>;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
};

const LoginPresentation: React.FC<LoginProps> = (props) => {
  const { onEmployeeNumberChange, onPasswordChange, onClick } = props;
  const theme = useTheme();

  return (
    <Stack
      padding="3rem"
      width="18.75rem"
      sx={{
        backgroundColor: "common.white",
        borderRadius: "1.875rem",
        boxShadow: `0rem 0.25rem 0.25rem 0rem ${theme.palette.grey[500]}`,
      }}
    >
      <FormGroup sx={{ gap: "1rem", alignItems: "center" }}>
        <Avatar
          sx={{
            width: "4rem",
            height: "4rem",
            backgroundColor: "primary.main",
          }}
        />

        <Typography variant="h5">로그인</Typography>

        <TextField
          required
          focused
          size="small"
          fullWidth
          label="사원 번호"
          onChange={onEmployeeNumberChange}
          sx={{
            backgroundColor: "common.white",
          }}
        />
        <TextField
          required
          focused
          size="small"
          fullWidth
          label="비밀 번호"
          type="password"
          onChange={onPasswordChange}
          sx={{
            backgroundColor: "common.white",
          }}
        />

        <Button variant="contained" fullWidth onClick={onClick}>
          로그인
        </Button>
      </FormGroup>
    </Stack>
  );
};

export default LoginPresentation;
