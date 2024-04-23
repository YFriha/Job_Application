import React, { useState } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  Button,
} from '@mui/material';

const CustomDialog = ({ open, handleClose, handleSave }) => {
  const [title, setTitle] = useState('');
  const [candidate, setCandidate] = useState('');

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleCandidateChange = (e) => {
    setCandidate(e.target.value);
  };

  const handleSaveClick = () => {
    handleSave(title, candidate);
    handleClose();
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Enter Event Details</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          label="Event Title"
          fullWidth
          value={title}
          onChange={handleTitleChange}
        />
        <TextField
          margin="dense"
          label="Candidate's Name"
          fullWidth
          value={candidate}
          onChange={handleCandidateChange}
        />
      </DialogContent>
      <Button onClick={handleSaveClick}>Save</Button>
    </Dialog>
  );
};

export default CustomDialog;
