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
};

const Table: React.FC<TableProps> = ({ headers, rows }) => {
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
            <TableRow key={rowIndex}>
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
