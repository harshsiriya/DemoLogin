import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Box } from '@mui/material';

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function createData(id, name, accountNumber, balance, branch) {
  return { id, name, accountNumber, balance, branch };
}

const randomNames = [
  "John Doe", "Jane Smith", "Alice Johnson", "Michael Brown", "Emily Davis",
  "David Wilson", "Sophia Miller", "James Anderson", "Olivia Thomas", "Robert Taylor",
  "Charlotte Moore", "William Harris", "Mia Martin", "Benjamin Thompson", "Isabella White",
  "Daniel Garcia", "Ava Martinez", "Matthew Robinson", "Evelyn Clark", "Joseph Rodriguez",
  "Abigail Lewis", "Samuel Lee", "Madison Walker", "Elijah Hall", "Scarlett Allen",
  "Alexander Young", "Chloe King", "Henry Scott", "Grace Adams", "Lucas Nelson",
  "Lily Carter", "Mason Mitchell", "Hannah Perez", "Logan Roberts", "Zoe Phillips",
  "Jackson Evans", "Nora Turner", "Aiden Parker", "Lillian Collins", "Ethan Stewart",
  "Ella Sanchez", "Sebastian Morris", "Victoria Rogers", "Jacob Reed", "Penelope Cook",
  "Owen Bailey", "Aria Rivera", "Dylan Cooper", "Layla Richardson", "Caleb Cox",
  "Nathan Scott"
];

const randomBranches = [
  "Downtown Branch", "Uptown Branch", "Westside Branch", "Eastside Branch", "Central Branch",
  "Northside Branch", "Southside Branch", "Financial District Branch", "Lakeside Branch", "Hilltop Branch",
  "Riverside Branch", "Sunset Branch", "Greenfield Branch", "Oakwood Branch", "Maple Branch",
  "Pinehill Branch", "Cedar Branch", "Willow Branch", "Seaside Branch", "Mountainview Branch"
];

const bankConsumers = Array.from({ length: 50 }, (_, index) =>
  createData(
    index + 1,
    randomNames[index],
    getRandomNumber(1000000000, 9999999999),
    getRandomNumber(1000, 1000000),
    randomBranches[getRandomNumber(0, randomBranches.length - 1)]
  )
);

export default function BasicTable() {
  return (
    <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh" p={2}>
      <TableContainer component={Paper} sx={{ maxWidth: 800, width: '100%', border: '2px solid black' }}>
        <Table sx={{ minWidth: 650, border: '1px solid black' }} aria-label="bank consumers table">
          <TableHead>
            <TableRow sx={{ borderBottom: '2px solid black' }}>
              <TableCell sx={{ borderRight: '1px solid black', borderBottom: '2px solid black' }}><b>ID</b></TableCell>
              <TableCell sx={{ borderRight: '1px solid black', borderBottom: '2px solid black' }}><b>Name</b></TableCell>
              <TableCell align="right" sx={{ borderRight: '1px solid black', borderBottom: '2px solid black' }}><b>Account Number</b></TableCell>
              <TableCell align="right" sx={{ borderRight: '1px solid black', borderBottom: '2px solid black' }}><b>Balance ($)</b></TableCell>
              <TableCell sx={{ borderBottom: '2px solid black' }}><b>Branch</b></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {bankConsumers.map((consumer, index) => (
              <TableRow
                key={consumer.id}
                sx={{ borderBottom: index === bankConsumers.length - 1 ? '2px solid black' : '1px solid black' }}
              >
                <TableCell sx={{ borderRight: '1px solid black' }}>{consumer.id}</TableCell>
                <TableCell sx={{ borderRight: '1px solid black' }}>{consumer.name}</TableCell>
                <TableCell align="right" sx={{ borderRight: '1px solid black' }}>{consumer.accountNumber}</TableCell>
                <TableCell align="right" sx={{ borderRight: '1px solid black' }}>{consumer.balance}</TableCell>
                <TableCell>{consumer.branch}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}