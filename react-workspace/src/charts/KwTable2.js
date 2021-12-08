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
  const enp_majors = [];
  const enps = [];
  const expd_totals = [];

  dataArr.map( item => {
    enp_majors.push(item.enp_major);
    enps.push(item.enp);
    expd_totals.push(item.expd_total);
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

  function createData( enp_majors, enps, expd_totals) {
    return { enp_majors, enps, expd_totals };
  }

  const rows = [ // 행
    createData(enp_majors[0], enps[0], expd_totals[0]),
    createData(enp_majors[1], enps[1], expd_totals[1]),
    createData(enp_majors[2], enps[2], expd_totals[2]),
    createData(enp_majors[3], enps[3], expd_totals[3]),
    createData(enp_majors[4], enps[4], expd_totals[4]),
    createData(enp_majors[5], enps[5], expd_totals[5])
  ];

  const useStyles = makeStyles({
    table: {
      minWidth: 400,
    },
  });
  console.log(enps)

  const classes = useStyles();

    return (
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="center">사업체 분류</StyledTableCell>
              <StyledTableCell align="center">사업체 수(단위: 개)</StyledTableCell>
              <StyledTableCell align="center">관광 지출액(단위: 억원)</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <StyledTableRow >
                <StyledTableCell component="th" scope="row" align="center">{row.enp_majors}</StyledTableCell>
                <StyledTableCell align="center">{row.enps}</StyledTableCell>
                <StyledTableCell align="center">{row.expd_totals}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
    
}

export default KwTable1;
