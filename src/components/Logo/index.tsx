import { CardMedia } from "@mui/material";

type LogoProps = {
  color: string;
};

const logo = [
  {
    color: "blue",
    src: "/images/logo_blue.svg",
  },
  {
    color: "white",
    src: "/images/logo_white.svg",
  },
];

const Logo: React.FC<LogoProps> = ({ color }) => {
  const selectedLogo = logo.find((item) => item.color === color);

  return (
    <CardMedia component="img" src={selectedLogo?.src} alt={`logo_${color}`} />
  );
};

export default Logo;
