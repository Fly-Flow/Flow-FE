import { Box, IconButton, InputAdornment, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import theme from "@/styles/theme.ts";

type SearchFieldProps = {
  label: string;
};

const SearchField: React.FC<SearchFieldProps> = ({ label }) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <TextField
        focused
        size="small"
        label={label}
        sx={{ backgroundColor: "common.white" }}
        slotProps={{
          input: {
            endAdornment: (
              <InputAdornment position="end">
                <IconButton>
                  <SearchIcon sx={{ color: theme.palette.primary.main }} />
                </IconButton>
              </InputAdornment>
            ),
          },
        }}
      />
    </Box>
  );
};

export default SearchField;
