"use client";

import Logo from "@/components/Logo/index.tsx";
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import { usePathname, useRouter } from "next/navigation";
import LogoutButton from "../LogoutButton";

const SideBar: React.FC = (props) => {
  const router = useRouter();
  const pathname = usePathname();

  const DrawerList = (
    <Box
      sx={{
        width: "14rem",
        display: "flex",
        flexDirection: "column",
        height: "100%",
      }}
    >
      <Box
        display="flex"
        justifyContent="center"
        padding="1rem"
        marginBottom="1rem"
      >
        <Logo color="white" />
      </Box>
      <List sx={{ flexGrow: 1 }}>
        <ListItem disablePadding>
          <ListItemButton
            href="/"
            sx={{
              color: "primary.dark",
              backgroundColor:
                pathname === "/" ? "background.default" : "secondary.main",
              "&:hover": {
                backgroundColor: "background.default",
              },
            }}
          >
            <ListItemText primary="홈" sx={{ textAlign: "center" }} />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton
            href="/attendances"
            sx={{
              color: "primary.dark",
              backgroundColor:
                pathname === "/attendances"
                  ? "background.default"
                  : "secondary.main",
              "&:hover": {
                backgroundColor: "background.default",
              },
            }}
          >
            <ListItemText primary="출퇴근" sx={{ textAlign: "center" }} />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton
            href="/leave"
            sx={{
              color: "primary.dark",
              backgroundColor:
                pathname === "/leave" ? "background.default" : "secondary.main",
              "&:hover": {
                backgroundColor: "background.default",
              },
            }}
          >
            <ListItemText primary="휴가 관리" sx={{ textAlign: "center" }} />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton
            href="/employees"
            sx={{
              color: "primary.dark",
              backgroundColor:
                pathname === "/employees"
                  ? "background.default"
                  : "secondary.main",
              "&:hover": {
                backgroundColor: "background.default",
              },
            }}
          >
            <ListItemText primary="구성원" sx={{ textAlign: "center" }} />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton
            href="/employees/me"
            sx={{
              color: "primary.dark",
              backgroundColor:
                pathname === "/employees/me"
                  ? "background.default"
                  : "secondary.main",
              "&:hover": {
                backgroundColor: "background.default",
              },
            }}
          >
            <ListItemText primary="마이 페이지" sx={{ textAlign: "center" }} />
          </ListItemButton>
        </ListItem>
      </List>

      <LogoutButton />
    </Box>
  );
  return (
    <>
      <Drawer
        variant="permanent"
        sx={{
          "& .MuiDrawer-paper": {
            backgroundColor: "primary.main",
            borderRight: "none",
          },
        }}
      >
        {DrawerList}
      </Drawer>
    </>
  );
};

export default SideBar;
