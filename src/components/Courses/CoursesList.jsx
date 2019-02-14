import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Button from '@material-ui/core/Button';

const styles = {
  root: {
    width: '100%',
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
};

let id = 0;
function createData(name, calories, fat, carbs, enroll) {
  id += 1;
  return { id, name, calories, fat, carbs, enroll };
}

const data = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

function CoursesList(props) {
  const { classes } = props;

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>Course Title</TableCell>
            <TableCell align="right">Course Number</TableCell>
            <TableCell align="right">Cost ($)</TableCell>
            <TableCell align="right">Learn More</TableCell>
            <TableCell align="right">Enroll</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map(n => (
            <TableRow key={n.id}>
              <TableCell component="th" scope="row">{n.name}</TableCell>
              <TableCell align="right">{n.calories}</TableCell>
              <TableCell align="right">$ {n.fat}</TableCell>
              <TableCell align="right"><Button variant="contained" color="primary" className={classes.button}>Learn More</Button></TableCell>
              <TableCell align="right"><Fab color="primary" aria-label="Add" className={classes.fab}><AddIcon /></Fab></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}

CoursesList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CoursesList);