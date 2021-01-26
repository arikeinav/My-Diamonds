
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export  function UserMsgModal({contant,onClose}) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);

 

  const handleClose = () => {
    setOpen(false);
    if (onClose) onClose()
    return
  }

  return (
    <div>
     
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper} style={{textAlign:"center"}}>
            <h2 id="transition-modal-title">{contant.header}</h2>
            <p id="transition-modal-description">{contant.body}</p>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}