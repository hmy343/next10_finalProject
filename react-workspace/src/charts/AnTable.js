import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

function AnTable({data}){
  const dataArr = Array.from(data);
  const sgg_nms = [];
  const his_rscs = [];
  const facilities = [];
  const festivals = []; 
  const residences = []; 
  const safeties = []; 
  const visitors1 = []; 
  const industries = []; 
  const sort = ['역사문화자원', '관광시설', '관광축제', '숙박', '안전', '관광객 수', '관광산업']
  
  dataArr.map( item => {
    sgg_nms.push(item.sgg_nm);
    his_rscs.push(item.his_rsc);
    facilities.push(item.facility);
    festivals.push(item.festival);
    residences.push(item.residence);
    safeties.push(item.safety);
    visitors1.push(item.visitors);
    industries.push(item.industry);
  });

  const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: '#6495ED',
      color: theme.palette.common.white,
      fontSize: 16,
    },
    body: {
      fontSize: 13,
    },
  }))(TableCell);

  const StyledTableRow = withStyles((theme) => ({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },
    },
  }))(TableRow);

  function createData( sgg_nms, his_rscs, facilities, festivals, residences, safeties, visitors1, industries ) {
    return { sgg_nms, his_rscs, facilities, festivals, residences, safeties, visitors1, industries };
  }

  const rows = [ // 행
    createData( '역사문화자원', his_rscs[0], his_rscs[1], his_rscs[2], his_rscs[3], his_rscs[4], his_rscs[5], his_rscs[6], his_rscs[7], 
    his_rscs[8], his_rscs[9], his_rscs[10], his_rscs[11], his_rscs[12], his_rscs[13], his_rscs[14], his_rscs[15]),
    createData( '관광시설', facilities[0], facilities[1], facilities[2], facilities[3], facilities[4], facilities[5], facilities[6], facilities[7], 
    facilities[8], facilities[9], facilities[10], facilities[11], facilities[12], facilities[13], facilities[14], facilities[15]),
    createData( '관광축제', festivals[0], festivals[1], festivals[2], festivals[3], festivals[4], festivals[5], festivals[6], festivals[7], 
    festivals[8], festivals[9], festivals[10], festivals[11], festivals[12], festivals[13], festivals[14], festivals[15]),
    createData( '숙박', residences[0], residences[1], residences[2], residences[3], residences[4], residences[5], residences[6], residences[7], 
    residences[8], residences[9], residences[10], residences[11], residences[12], residences[13], residences[14], residences[15]),
    createData( '안전', safeties[0], safeties[1], safeties[2], safeties[3], safeties[4], safeties[5], safeties[6], safeties[7], 
    safeties[8], safeties[9], safeties[10], safeties[11], safeties[12], safeties[13], safeties[14], safeties[15]),
    createData( '관광객 수', visitors1[0], visitors1[1], visitors1[2], visitors1[3], visitors1[4], visitors1[5], visitors1[6], visitors1[7], 
    visitors1[8], visitors1[9], visitors1[10], visitors1[11], visitors1[12], visitors1[13], visitors1[14], visitors1[15]),
    createData( '관광산업', industries[0], industries[1], industries[2], industries[3], industries[4], industries[5], industries[6], industries[7], 
    industries[8], industries[9], industries[10], industries[11], industries[12], industries[13], industries[14], industries[15]),
  ];

  console.log(sgg_nms)
  console.log(his_rscs)

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
              <StyledTableCell align="center">구분</StyledTableCell>
              <StyledTableCell align="center">남구</StyledTableCell>
              <StyledTableCell align="center">북구</StyledTableCell>
              <StyledTableCell align="center">해운대구</StyledTableCell>
              <StyledTableCell align="center">기장군</StyledTableCell>
              <StyledTableCell align="center">금정구</StyledTableCell>
              <StyledTableCell align="center">중구</StyledTableCell>
              <StyledTableCell align="center">연제구</StyledTableCell>
              <StyledTableCell align="center">수영구</StyledTableCell>
              <StyledTableCell align="center">사하구</StyledTableCell>
              <StyledTableCell align="center">사상구</StyledTableCell>
              <StyledTableCell align="center">서구</StyledTableCell>
              <StyledTableCell align="center">동구</StyledTableCell>
              <StyledTableCell align="center">영도구</StyledTableCell>
              <StyledTableCell align="center">부산진구</StyledTableCell>
              <StyledTableCell align="center">동래구</StyledTableCell>
              <StyledTableCell align="center">강서구</StyledTableCell>

            </TableRow>
          </TableHead>
          <TableBody>
              <StyledTableRow >
                <StyledTableCell component="th" scope="row" align="center">{sort[0]}</StyledTableCell>
                <StyledTableCell  align="center">{ his_rscs[0] }</StyledTableCell>
                <StyledTableCell  align="center">{ his_rscs[1] }</StyledTableCell>
                <StyledTableCell  align="center">{ his_rscs[2] }</StyledTableCell>
                <StyledTableCell  align="center">{ his_rscs[3] }</StyledTableCell>
                <StyledTableCell  align="center">{ his_rscs[4] }</StyledTableCell>
                <StyledTableCell  align="center">{ his_rscs[5] }</StyledTableCell>
                <StyledTableCell  align="center">{ his_rscs[6] }</StyledTableCell>
                <StyledTableCell  align="center">{ his_rscs[7] }</StyledTableCell>
                <StyledTableCell  align="center">{ his_rscs[8] }</StyledTableCell>
                <StyledTableCell  align="center">{ his_rscs[9] }</StyledTableCell>
                <StyledTableCell  align="center">{ his_rscs[10] }</StyledTableCell>
                <StyledTableCell  align="center">{ his_rscs[11] }</StyledTableCell>
                <StyledTableCell  align="center">{ his_rscs[12] }</StyledTableCell>
                <StyledTableCell  align="center">{ his_rscs[13] }</StyledTableCell>
                <StyledTableCell  align="center">{ his_rscs[14] }</StyledTableCell>
                <StyledTableCell  align="center">{ his_rscs[15] }</StyledTableCell>
              </StyledTableRow>
              <StyledTableRow >
                <StyledTableCell component="th" scope="row" align="center">{sort[1]}</StyledTableCell>
                <StyledTableCell  align="center">{ facilities[0] }</StyledTableCell>
                <StyledTableCell  align="center">{ facilities[1] }</StyledTableCell>
                <StyledTableCell  align="center">{ facilities[2] }</StyledTableCell>
                <StyledTableCell  align="center">{ facilities[3] }</StyledTableCell>
                <StyledTableCell  align="center">{ facilities[4] }</StyledTableCell>
                <StyledTableCell  align="center">{ facilities[5] }</StyledTableCell>
                <StyledTableCell  align="center">{ facilities[6] }</StyledTableCell>
                <StyledTableCell  align="center">{ facilities[7] }</StyledTableCell>
                <StyledTableCell  align="center">{ facilities[8] }</StyledTableCell>
                <StyledTableCell  align="center">{ facilities[9] }</StyledTableCell>
                <StyledTableCell  align="center">{ facilities[10]}</StyledTableCell>
                <StyledTableCell  align="center">{ facilities[11]}</StyledTableCell>
                <StyledTableCell  align="center">{ facilities[12]}</StyledTableCell>
                <StyledTableCell  align="center">{ facilities[13]}</StyledTableCell>
                <StyledTableCell  align="center">{ facilities[14]}</StyledTableCell>
                <StyledTableCell  align="center">{ facilities[15]}</StyledTableCell>
              </StyledTableRow>
              <StyledTableRow >
                <StyledTableCell component="th" scope="row" align="center">{sort[2]}</StyledTableCell>
                <StyledTableCell  align="center">{ festivals[0] }</StyledTableCell>
                <StyledTableCell  align="center">{ festivals[1] }</StyledTableCell>
                <StyledTableCell  align="center">{ festivals[2] }</StyledTableCell>
                <StyledTableCell  align="center">{ festivals[3] }</StyledTableCell>
                <StyledTableCell  align="center">{ festivals[4] }</StyledTableCell>
                <StyledTableCell  align="center">{ festivals[5] }</StyledTableCell>
                <StyledTableCell  align="center">{ festivals[6] }</StyledTableCell>
                <StyledTableCell  align="center">{ festivals[7] }</StyledTableCell>
                <StyledTableCell  align="center">{ festivals[8] }</StyledTableCell>
                <StyledTableCell  align="center">{ festivals[9] }</StyledTableCell>
                <StyledTableCell  align="center">{ festivals[10]}</StyledTableCell>
                <StyledTableCell  align="center">{ festivals[11]}</StyledTableCell>
                <StyledTableCell  align="center">{ festivals[12]}</StyledTableCell>
                <StyledTableCell  align="center">{ festivals[13]}</StyledTableCell>
                <StyledTableCell  align="center">{ festivals[14]}</StyledTableCell>
                <StyledTableCell  align="center">{ festivals[15]}</StyledTableCell>
              </StyledTableRow>
              <StyledTableRow>
                <StyledTableCell component="th" scope="row" align="center">{sort[3]}</StyledTableCell>
                <StyledTableCell  align="center">{ residences[0] }</StyledTableCell>
                <StyledTableCell  align="center">{ residences[1] }</StyledTableCell>
                <StyledTableCell  align="center">{ residences[2] }</StyledTableCell>
                <StyledTableCell  align="center">{ residences[3] }</StyledTableCell>
                <StyledTableCell  align="center">{ residences[4] }</StyledTableCell>
                <StyledTableCell  align="center">{ residences[5] }</StyledTableCell>
                <StyledTableCell  align="center">{ residences[6] }</StyledTableCell>
                <StyledTableCell  align="center">{ residences[7] }</StyledTableCell>
                <StyledTableCell  align="center">{ residences[8] }</StyledTableCell>
                <StyledTableCell  align="center">{ residences[9] }</StyledTableCell>
                <StyledTableCell  align="center">{ residences[10]}</StyledTableCell>
                <StyledTableCell  align="center">{ residences[11]}</StyledTableCell>
                <StyledTableCell  align="center">{ residences[12]}</StyledTableCell>
                <StyledTableCell  align="center">{ residences[13]}</StyledTableCell>
                <StyledTableCell  align="center">{ residences[14]}</StyledTableCell>
                <StyledTableCell  align="center">{ residences[15]}</StyledTableCell>
              </StyledTableRow>
              <StyledTableRow >
                <StyledTableCell component="th" scope="row" align="center">{sort[4]}</StyledTableCell>
                <StyledTableCell  align="center">{ safeties[0] }</StyledTableCell>
                <StyledTableCell  align="center">{ safeties[1] }</StyledTableCell>
                <StyledTableCell  align="center">{ safeties[2] }</StyledTableCell>
                <StyledTableCell  align="center">{ safeties[3] }</StyledTableCell>
                <StyledTableCell  align="center">{ safeties[4] }</StyledTableCell>
                <StyledTableCell  align="center">{ safeties[5] }</StyledTableCell>
                <StyledTableCell  align="center">{ safeties[6] }</StyledTableCell>
                <StyledTableCell  align="center">{ safeties[7] }</StyledTableCell>
                <StyledTableCell  align="center">{ safeties[8] }</StyledTableCell>
                <StyledTableCell  align="center">{ safeties[9] }</StyledTableCell>
                <StyledTableCell  align="center">{ safeties[10]}</StyledTableCell>
                <StyledTableCell  align="center">{ safeties[11]}</StyledTableCell>
                <StyledTableCell  align="center">{ safeties[12]}</StyledTableCell>
                <StyledTableCell  align="center">{ safeties[13]}</StyledTableCell>
                <StyledTableCell  align="center">{ safeties[14]}</StyledTableCell>
                <StyledTableCell  align="center">{ safeties[15]}</StyledTableCell>
              </StyledTableRow>
              <StyledTableRow >
                <StyledTableCell component="th" scope="row" align="center">{sort[5]}</StyledTableCell>
                <StyledTableCell  align="center">{ visitors1[0] }</StyledTableCell>
                <StyledTableCell  align="center">{ visitors1[1] }</StyledTableCell>
                <StyledTableCell  align="center">{ visitors1[2] }</StyledTableCell>
                <StyledTableCell  align="center">{ visitors1[3] }</StyledTableCell>
                <StyledTableCell  align="center">{ visitors1[4] }</StyledTableCell>
                <StyledTableCell  align="center">{ visitors1[5] }</StyledTableCell>
                <StyledTableCell  align="center">{ visitors1[6] }</StyledTableCell>
                <StyledTableCell  align="center">{ visitors1[7] }</StyledTableCell>
                <StyledTableCell  align="center">{ visitors1[8] }</StyledTableCell>
                <StyledTableCell  align="center">{ visitors1[9] }</StyledTableCell>
                <StyledTableCell  align="center">{ visitors1[10]}</StyledTableCell>
                <StyledTableCell  align="center">{ visitors1[11]}</StyledTableCell>
                <StyledTableCell  align="center">{ visitors1[12]}</StyledTableCell>
                <StyledTableCell  align="center">{ visitors1[13]}</StyledTableCell>
                <StyledTableCell  align="center">{ visitors1[14]}</StyledTableCell>
                <StyledTableCell  align="center">{ visitors1[15]}</StyledTableCell>
              </StyledTableRow>
              <StyledTableRow >
                <StyledTableCell component="th" scope="row" align="center">{sort[6]}</StyledTableCell>
                <StyledTableCell  align="center">{ industries[0] }</StyledTableCell>
                <StyledTableCell  align="center">{ industries[1] }</StyledTableCell>
                <StyledTableCell  align="center">{ industries[2] }</StyledTableCell>
                <StyledTableCell  align="center">{ industries[3] }</StyledTableCell>
                <StyledTableCell  align="center">{ industries[4] }</StyledTableCell>
                <StyledTableCell  align="center">{ industries[5] }</StyledTableCell>
                <StyledTableCell  align="center">{ industries[6] }</StyledTableCell>
                <StyledTableCell  align="center">{ industries[7] }</StyledTableCell>
                <StyledTableCell  align="center">{ industries[8] }</StyledTableCell>
                <StyledTableCell  align="center">{ industries[9] }</StyledTableCell>
                <StyledTableCell  align="center">{ industries[10]}</StyledTableCell>
                <StyledTableCell  align="center">{ industries[11]}</StyledTableCell>
                <StyledTableCell  align="center">{ industries[12]}</StyledTableCell>
                <StyledTableCell  align="center">{ industries[13]}</StyledTableCell>
                <StyledTableCell  align="center">{ industries[14]}</StyledTableCell>
                <StyledTableCell  align="center">{ industries[15]}</StyledTableCell>
              </StyledTableRow>


          </TableBody>
        </Table>
      </TableContainer>
    );
    
}

export default AnTable;
