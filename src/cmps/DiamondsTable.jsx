import React from 'react';
import {  makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';





const useStyles = makeStyles({
  table: {
    minWidth: 650,
    ['@media (max-width:680px)']: { // eslint-disable-line no-useless-computed-key
     minWidth:300
    }
  },
  cell:{
    ['@media (max-width:500px)']: { // eslint-disable-line no-useless-computed-key
      padding:0,
    }
  },

});





export function DiamondsTable({diamonds}) {
  const classes = useStyles();
  
  

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Shape</TableCell>
            <TableCell className={classes.cell} align="right">CT.</TableCell>
            <TableCell className={classes.cell} align="right">Image</TableCell>
            <TableCell className={classes.cell} align="right">V360</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {diamonds.map((diamond) => (
            <TableRow key={diamond._id}>
              <TableCell component="th" scope="row">
                {diamond.shape}
              </TableCell>
              <TableCell className={classes.cell} align="right">{(diamond.ct===1)?'1.00':diamond.ct}</TableCell>
              <TableCell className={classes.cell} align="right"><img src={diamond.imageLink} style={{width:'150px'}}alt=""/></TableCell>
              <TableCell className={classes.cell} align="right"><a href={diamond.v360}>V360</a></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}