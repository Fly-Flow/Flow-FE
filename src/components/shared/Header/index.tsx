"use client";

import theme from "@/styles/theme.ts";
import { buttonBaseClasses, Tab, Tabs, Typography } from "@mui/material";

type HeaderProps = {
  label: string;
};

// 단일 Tab을 비활성화 상태로 렌더링하는 Header 컴포넌트
const Header: React.FC<HeaderProps> = ({ label }) => {
  return (
    <Tabs value={0}>
      <Tab
        label={<Typography variant="h4">{label}</Typography>}
        disabled
        sx={{
          [`&.${buttonBaseClasses.root}`]: {
            color: theme.palette.primary.main,
          },
        }}
      />
    </Tabs>
  );
};

export default Header;
