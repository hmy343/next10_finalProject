import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

function KwTable1({data}){
  const dataArr = Array.from(data);
  const rate = [];
  const sort = [];
  dataArr.map( item => {
    rate.push(item.rate);
    sort.push(item.key_word);
  });

  const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: '#6495ED',
      color: theme.palette.common.white,
      fontSize: 11,
    },
    body: {
      fontSize: 11,
    },
  }))(TableCell);

  const StyledTableRow = withStyles((theme) => ({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },
    },
  }))(TableRow);

  function createData( sort,rate) {
    return { sort,rate };
  }

  const rows = [
    createData(sort, rate),
  ];

  const useStyles = makeStyles({
    table: {
      minWidth: 400,
    },
  });

  const classes = useStyles();

    return (
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell >키워드</StyledTableCell>
              <StyledTableCell align="center">{sort[0]}</StyledTableCell>
              <StyledTableCell align="center">{sort[1]}</StyledTableCell>
              <StyledTableCell align="center">{sort[2]}</StyledTableCell>
              <StyledTableCell align="center">{sort[3]}</StyledTableCell>
              <StyledTableCell align="center">{sort[4]}</StyledTableCell>
              <StyledTableCell align="center">{sort[5]}</StyledTableCell>
              <StyledTableCell align="center">{sort[6]}</StyledTableCell>
              <StyledTableCell align="center">{sort[7]}</StyledTableCell>
              <StyledTableCell align="center">{sort[8]}</StyledTableCell>
              <StyledTableCell align="center">{sort[9]}</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <StyledTableRow>
                <StyledTableCell component="th" scope="row">
                  비율(%)
                </StyledTableCell>
                <StyledTableCell align="center">{rate[0]}</StyledTableCell>
                <StyledTableCell align="center">{rate[1]}</StyledTableCell>
                <StyledTableCell align="center">{rate[2]}</StyledTableCell>
                <StyledTableCell align="center">{rate[3]}</StyledTableCell>
                <StyledTableCell align="center">{rate[4]}</StyledTableCell>
                <StyledTableCell align="center">{rate[5]}</StyledTableCell>
                <StyledTableCell align="center">{rate[6]}</StyledTableCell>
                <StyledTableCell align="center">{rate[7]}</StyledTableCell>
                <StyledTableCell align="center">{rate[8]}</StyledTableCell>
                <StyledTableCell align="center">{rate[9]}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
    
}

export default KwTable1;
