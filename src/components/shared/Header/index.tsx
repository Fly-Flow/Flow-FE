import { Typography } from "@mui/material";

type HeaderProps = {
  header: string;
};

const Header: React.FC<HeaderProps> = (props) => {
  const { header } = props;

  return (
    <Typography variant="h4" color="primary" sx={{ cursor: "default" }}>
      {header}
    </Typography>
  );
};

export default Header;
