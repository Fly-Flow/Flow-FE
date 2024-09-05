import theme from "@/styles/theme.ts";
import {
  TableContainer,
  Table as MuiTable,
  Paper,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";
import React from "react";

type TableProps = {
  headers: string[];
  rows: (string | number | React.ReactNode)[][];
  onRowClick?: React.MouseEventHandler<HTMLTableRowElement>;
};

const Table: React.FC<TableProps> = ({ headers, rows, onRowClick }) => {
  return (
    <TableContainer component={Paper}>
      <MuiTable>
        <TableHead>
          <TableRow>
            {headers.map((header, index) => (
              <TableCell key={index} align="center">
                {header}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, rowIndex) => (
            <TableRow
              key={rowIndex}
              onClick={onRowClick ? onRowClick : undefined}
              sx={{
                cursor: onRowClick ? "pointer" : "default",
                "&:hover": {
                  backgroundColor: onRowClick
                    ? theme.palette.info.light
                    : undefined,
                },
              }}
            >
              {row.map((cell, cellIndex) => (
                <TableCell key={cellIndex} align="center">
                  {cell}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </MuiTable>
    </TableContainer>
  );
};

export default Table;
