import React from "react";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";

interface SelectFieldProps {
  label: string;
  value: string | undefined;
  onChange: (event: SelectChangeEvent) => void;
  items: { label: string; value: string | number }[];
  fullWidth?: boolean;
}

const SelectField: React.FC<SelectFieldProps> = ({
  label,
  value,
  onChange,
  items,
  fullWidth = true,
}) => {
  return (
    <FormControl fullWidth={fullWidth}>
      <InputLabel>{label}</InputLabel>
      <Select value={value} label={label} onChange={onChange}>
        {items.map((item, index) => (
          <MenuItem key={index} value={item.value}>
            {item.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default SelectField;
