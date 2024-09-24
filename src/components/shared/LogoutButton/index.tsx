import { Button } from "@mui/material";
import { useRouter } from "next/navigation";
import { removeCookie } from "@/utils/cookie";

const LogoutButton = () => {
  const router = useRouter();

  const handleLogout = () => {
    removeCookie("accessToken");
    removeCookie("flow_token");
    removeCookie("refreshToken");

    router.push("/login");
  };

  return (
    <Button
      variant="contained"
      sx={{
        margin: "2rem",
        color: "primary.dark",
        backgroundColor: "secondary.main",
        "&:hover": {
          color: "white",
        },
      }}
      onClick={handleLogout}
    >
      로그아웃
    </Button>
  );
};

export default LogoutButton;
