import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: '#6495ED',
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

function createData(name, calories, fat, carbs, protein, protei ) {
  return { name, calories, fat, carbs, protein, protei };
}

const rows = [
  createData('역사문화자원', 159, 6.0, 24, 4.0,10.0,10.0,10.0,10.0,10.0,10.0,10.0,10.0,10.0,10.0,10.0,10.0),
  createData('관광시설', 237, 9.0, 37, 4.3,4.3,4.3,4.3,4.3,4.3,4.3,4.3,4.3,4.3,4.3,4.3,4.3),
  createData('관광축제', 262, 16.0, 24, 6.0, 6.0,6.0,6.0,6.0,6.0,6.0,6.0,6.0,6.0,6.0,6.0,6.0),
  createData('숙박', 305, 3.7, 67, 4.3,6.0,6.0,6.0,6.0,6.0,6.0,6.0,6.0,6.0,6.0,6.0,6.0),
  createData('안전', 356, 16.0, 49, 3.9,6.0,6.0,6.0,6.0,6.0,6.0,6.0,6.0,6.0,6.0,6.0,6.0),
  createData('관광객 수', 356, 16.0, 49, 3.9,6.0,6.0,6.0,6.0,6.0,6.0,6.0,6.0,6.0,6.0,6.0,6.0),
  createData('관광산업', 356, 16.0, 49, 3.9,6.0,6.0,6.0,6.0,6.0,6.0,6.0,6.0,6.0,6.0,6.0,6.0),
];

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

export default function CustomizedTables() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>구분</StyledTableCell>
            <StyledTableCell align="right">강서구</StyledTableCell>
            <StyledTableCell align="right">금정구</StyledTableCell>
            <StyledTableCell align="right">기장군</StyledTableCell>
            <StyledTableCell align="right">남구</StyledTableCell>
            <StyledTableCell align="right">동구</StyledTableCell>
            <StyledTableCell align="right">동래구</StyledTableCell>
            <StyledTableCell align="right">부산진구</StyledTableCell>
            <StyledTableCell align="right">북구</StyledTableCell>
            <StyledTableCell align="right">사상구</StyledTableCell>
            <StyledTableCell align="right">사하구</StyledTableCell>
            <StyledTableCell align="right">서구</StyledTableCell>
            <StyledTableCell align="right">수영구</StyledTableCell>
            <StyledTableCell align="right">연제구</StyledTableCell>
            <StyledTableCell align="right">영도구</StyledTableCell>
            <StyledTableCell align="right">중구</StyledTableCell>
            <StyledTableCell align="right">해운대구</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="right">{row.calories}</StyledTableCell>
              <StyledTableCell align="right">{row.fat}</StyledTableCell>
              <StyledTableCell align="right">{row.carbs}</StyledTableCell>
              <StyledTableCell align="right">{row.protein}</StyledTableCell>
              <StyledTableCell align="right">{row.protei}</StyledTableCell>
              <StyledTableCell align="right">{row.protei}</StyledTableCell>
              <StyledTableCell align="right">{row.protei}</StyledTableCell>
              <StyledTableCell align="right">{row.protei}</StyledTableCell>
              <StyledTableCell align="right">{row.protei}</StyledTableCell>
              <StyledTableCell align="right">{row.protei}</StyledTableCell>
              <StyledTableCell align="right">{row.protei}</StyledTableCell>
              <StyledTableCell align="right">{row.protei}</StyledTableCell>
              <StyledTableCell align="right">{row.protei}</StyledTableCell>
              <StyledTableCell align="right">{row.protei}</StyledTableCell>
              <StyledTableCell align="right">{row.protei}</StyledTableCell>
              <StyledTableCell align="right">{row.protei}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}