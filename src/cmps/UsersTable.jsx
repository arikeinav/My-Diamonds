import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
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
    ['@media (max-width:680px)']: { // eslint-disable-line no-useless-computed-key
      padding:0,
    },
    ['@media (max-width:450px)']: { // eslint-disable-line no-useless-computed-key
      fontSize:'0.7rem'
    }
  },
 
 
  

});






export function UsersTable({users,onToggleUser}) {
  const classes = useStyles();
  
  

  return (
    <TableContainer style={{padding:'5px'}} component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className={classes.cell}>User name</TableCell>
            <TableCell className={classes.cell} >User ID</TableCell>
            <TableCell className={classes.cell} >Type</TableCell>
            <TableCell className={classes.cell} >Status</TableCell>
            <TableCell className={classes.cell} >Change</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((user) => (
            <TableRow key={user._id}>
              <TableCell className={classes.cell}  component="th" scope="row">
                {user.username}
              </TableCell>
              <TableCell className={classes.cell} >{user._id}</TableCell>
              <TableCell className={classes.cell} >{user.isAdmin?'Admin':'Basic'}</TableCell>
              <TableCell className={classes.cell} >{user.isBlocked?'blocked':'OK'}</TableCell>
              <TableCell className={classes.cell} ><button className='btn' onClick={()=>onToggleUser(user)}>toggle</button></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
