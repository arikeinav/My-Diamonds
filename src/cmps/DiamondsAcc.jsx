import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionActions from '@material-ui/core/AccordionActions';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';

import {BiDetail,BiFile,BiImage,BiFilm} from 'react-icons/bi';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
  icon: {
    verticalAlign: 'bottom',
    height: 20,
    width: 20,
  },
  details: {
    alignItems: 'center',
  },
  column: {
    flexBasis: '33.33%',
   
  },
  helper: {
    borderLeft: `2px solid ${theme.palette.divider}`,
    padding: theme.spacing(1, 2),
  },
  link: {
    color: theme.palette.primary.main,
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline',
    },
  },
}));

export  function DiamondsAcc({diamonds}) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
         <AccordionSummary
          expandIcon={<ExpandMoreIcon style={{color:'white'}} />}
          aria-controls="panel1c-content"
          id="panel1c-header"
        >
          <div className={classes.column}>
            <Typography className={classes.heading}>Shape</Typography>
          </div>
          <div className={classes.column}>
            <Typography className={classes.secondaryHeading}>CT.</Typography>
          </div>
          <div className={classes.column}>
            <Typography className={classes.secondaryHeading}>Color</Typography>
          </div>
          <div className={classes.column}>
            <Typography className={classes.secondaryHeading}>Clarity</Typography>
          </div>
          <div className={classes.column}>
            <Typography className={classes.secondaryHeading}>Total</Typography>
          </div>
        </AccordionSummary>
        {diamonds.map ((diamond)=>(
      <Accordion key={diamond._id} >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1c-content"
          id="panel1c-header"
        >
          <div className={classes.column}>
            <Typography className={classes.heading}>{diamond.shape}</Typography>
          </div>
          <div className={classes.column}>
            <Typography className={classes.secondaryHeading}>{diamond.ct}</Typography>
          </div>
          <div className={classes.column}>
            <Typography className={classes.secondaryHeading}>{diamond.color}</Typography>
          </div>
          <div className={classes.column}>
            <Typography className={classes.secondaryHeading}>{diamond.clarity}</Typography>
          </div>
          <div className={classes.column}>
            <Typography className={classes.secondaryHeading}>{diamond.total}</Typography>
          </div>
        </AccordionSummary>
        <AccordionDetails className={classes.details}>
          <div className={classes.column} style={{marginRight:'35px'}}>Cut:  {diamond.cut}</div>
          <div className={classes.column} style={{marginRight:'35px'}}>Polish:  {diamond.polish}</div>
          <div className={classes.column} style={{marginRight:'35px'}}>Sym:  {diamond.symmetry}</div>
          <div className={classes.column} style={{marginRight:'50px'}}>$/CT:  ${diamond.ppc}</div>
          <div className={clsx(classes.column, classes.helper)} style={{marginRight:'35px'}}>
            <Typography variant="caption">
            <a target="blank" href={diamond.imageLink}><BiImage style={{fontSize:'1.6rem',color:'blue'}}/></a>
              <br />
              <a target="blank" href={diamond.v360}><BiFilm style={{fontSize:'1.6rem',color:'red'}}/></a>
              <br />
              <a target="blank" href={diamond.cert}><BiFile style={{fontSize:'1.6rem',color:'yellow'}}/></a>
              <br />
              <a target="blank" href={diamond.stoneDetailsLink}><BiDetail style={{fontSize:'1.6rem',color:'black'}}/></a>
            </Typography>
          </div>
        </AccordionDetails>
        <Divider />
        <AccordionActions>
          <Button size="small" color="primary">
            Add
          </Button>
        </AccordionActions>
      </Accordion>))}
    </div>
  );
}
