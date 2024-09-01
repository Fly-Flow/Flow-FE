import theme from "@/styles/theme.ts";
import { Box, BoxProps } from "@mui/material";

type BoxShadowContainerProps = BoxProps & {
  children: React.ReactNode;
};

const BoxShadowContainer: React.FC<BoxShadowContainerProps> = ({
  children,
  sx,
  ...rest
}) => {
  return (
    <Box
      sx={{
        backgroundColor: "common.white",
        boxShadow: `0rem 0.25rem 0.25rem 0rem ${theme.palette.gray.light}`,
        ...sx, // 사용자가 전달한 sx 스타일을 병합
      }}
      {...rest}
    >
      {children}
    </Box>
  );
};

export default BoxShadowContainer;
