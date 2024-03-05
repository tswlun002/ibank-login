import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Typography } from '@mui/material';
import { COLORS } from '../utils/Constants';
import { Box } from '@mui/system';
function createData(account, currentBalance, availableBalance) {
  return { account, currentBalance, availableBalance };
}

const rows = [
  createData('Savings Account', "R159", "R600.0",),
  createData('Live Better Savings Acccount', "R237", "R237",),
  createData('Accessfacility', "", ""),
];

export default function AccountTable() {
  return (
    <TableContainer component={Box} sx={{ border: "none", display: "flex", justifyContent: "center", }} >
      <Table sx={{ border: "none", backgroundColor: COLORS.shadow }} aria-label="simple table">
        <TableHead sx={{backgroundColor:COLORS.secondaryButton}}>
          <TableRow>
            <TableCell>Acccount Name</TableCell>
            <TableCell align="left">Current Balance</TableCell>
            <TableCell align="left">Available Balance</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.account}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.account}
              </TableCell>
              <TableCell align="left">{row.currentBalance ? row.currentBalance : <Typography variant='string' color={COLORS.primary}>more info</Typography>}</TableCell>
              <TableCell align="left">{row.availableBalance ? row.availableBalance : <Typography variant='string' color={COLORS.primary}>more info</Typography>}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}