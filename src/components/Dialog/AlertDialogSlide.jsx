import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import axios from "axios";
import { DeleteOutlined } from "@mui/icons-material";
import {
    IconButton,

  } from "@mui/material";
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function AlertDialogSlide(props) {
  const [open, setOpen] = React.useState(false);
  const { id, onDeletePost } = props; // Destructure id from props

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  async function deletePostById() {
    console.log(id);
    // try {
    //   // Display a confirmation dialog
    // //   const confirmed = window.confirm(`Are you sure  ${id}?`);
      
    //   // Check if the user confirmed the deletion
    //   if (true) {
    //     // Send a DELETE request to the API endpoint with the post's ID
    //     await axios.delete(`http://127.0.0.1:8000/posts/${id}/delete/`);
    //     
    //     // If the request is successful, log a success message
    //     console.log(`Post with ID ${id} has been deleted.`);
        
    //     // Optionally, reload the data or perform other actions
    //     // Load();
    //   } else {
    //     handleClose()
    //     // Log a message indicating that the deletion was canceled
    //     console.log(`Deletion of post with ID ${id} canceled.`);
    //   }
    // } catch (error) {
    //     handleClose()
    //   // Handle any errors that occur during the deletion process
    //   console.error(`Error deleting post with ID ${id}: ${error.message}`);
    // }
    onDeletePost(id)
    handleClose()
  }
  return (
    <React.Fragment >
      {/* <Button variant="outlined" onClick={handleClickOpen}>

      </Button> */}
      <IconButton
              sx={{
                color: "#9f9f9f",
              }}
              onClick={handleClickOpen}
              color="inherit"
              aria-label="delete"
            >
              <DeleteOutlined />
            </IconButton>
      <Dialog
      PaperProps={{
        style: {
          backgroundColor: '#e85858',
        },
      }}
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle style={{color:'white'}}>{"Are you sure you want to delete this post?"} </DialogTitle>
        <DialogContent>
          {/* <DialogContentText id="alert-dialog-slide-description">
            Let Google help apps determine location. This means sending anonymous
            location data to Google, even when no apps are running.
          </DialogContentText> */}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} style={{color:'white'}}>Disagree</Button>
          <Button onClick={deletePostById} style={{color:'white'}}>Agree</Button>
        </DialogActions>
      </Dialog>

    </React.Fragment>
  );
}