import { CardMedia, SxProps, Theme } from "@mui/material";

type LogoProps = {
  color: string;
  sx?: SxProps<Theme>;
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

const Logo: React.FC<LogoProps> = ({ color, sx, ...rest }) => {
  const selectedLogo = logo.find((item) => item.color === color);

  return (
    <CardMedia
      component="img"
      src={selectedLogo?.src}
      alt={`logo_${color}`}
      sx={{ ...sx }} // 사용자가 전달한 sx 스타일을 병합
      {...rest}
    />
  );
};

export default Logo;
