"use client";

import {
  Box,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import { usePathname, useRouter } from "next/navigation";

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
            href=""
            sx={{
              color: "primary.dark",
              backgroundColor:
                pathname === "" ? "background.default" : "secondary.main",
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
            href=""
            sx={{
              color: "primary.dark",
              backgroundColor:
                pathname === "" ? "background.default" : "secondary.main",
              "&:hover": {
                backgroundColor: "background.default",
              },
            }}
          >
            <ListItemText primary="마이 페이지" sx={{ textAlign: "center" }} />
          </ListItemButton>
        </ListItem>
      </List>

      <Button
        variant="contained"
        sx={{
          margin: "2rem",
          color: "primary.dark",
          backgroundColor: "secondary.main",
          "&:hover": {
            backgroundColor: "background.default",
          },
        }}
        onClick={() => router.push("/login")}
      >
        로그아웃
      </Button>
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
