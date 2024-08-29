import theme from "@/styles/theme.ts";
import { BorderColor } from "@mui/icons-material";
import { Chip as MuiChip } from "@mui/material";

type ChipsProps = {
  label: string;
};

const getChipStyles = (label: string) => {
  switch (label) {
    case "지각":
    case "조퇴":
      return {
        borderColor: theme.palette.warning.main,
        backgroundColor: theme.palette.warning.light,
        color: theme.palette.warning.main,
      };
    case "결근":
    case "반려":
      return {
        borderColor: theme.palette.error.main,
        backgroundColor: theme.palette.error.light,
        color: theme.palette.error.main,
      };
    case "퇴근":
    case "휴가":
    case "승인":
      return {
        borderColor: theme.palette.success.main,
        backgroundColor: theme.palette.success.light,
        color: theme.palette.success.main,
      };
    case "근무":
    case "대기중":
      return {
        borderColor: theme.palette.info.main,
        backgroundColor: theme.palette.info.light,
        color: theme.palette.info.main,
      };
    case "관리자":
      return {
        borderColor: theme.palette.purple.main,
        backgroundColor: theme.palette.purple.light,
        color: theme.palette.purple.main,
      };
    case "사원":
      return {
        borderColor: theme.palette.gray.main,
        backgroundColor: theme.palette.gray.light,
        color: theme.palette.gray.main,
      };
  }
};

const Chip: React.FC<ChipsProps> = (props) => {
  const { label } = props;
  const styles = getChipStyles(label);

  return (
    <MuiChip
      label={label}
      sx={{
        backgroundColor: styles?.backgroundColor,
        color: styles?.color,
        border: `0.0625rem solid ${styles?.borderColor}`,
      }}
    />
  );
};

export default Chip;
