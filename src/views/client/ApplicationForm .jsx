// import React from 'react';
// import axios from 'axios';
// import { useForm } from 'react-hook-form';

// import { styled } from '@mui/system';

// const ApplicationForm = ({ setHiddforum, post_id }) => {
//   const { register, handleSubmit, reset } = useForm();

//   const onSubmit = async (data) => {
    // const formData = new FormData();
    // formData.append('post', post_id);
    // formData.append('candidate', data.candidate);
    // formData.append('status', 'p'); // Assuming default status is pending
    // formData.append('resume', data.resume[0]);
    // formData.append('cover_letter', data.cover_letter[0]);

//     try {
//       const response = await axios.post('http://127.0.0.1:8000/candidates/application/create/', formData, {
//         headers: {
//           'Content-Type': 'multipart/form-data'
//         }
//       });
//       console.log('Application submitted:', response.data);
//       setHiddforum(true); // Trigger success animation and close the modal
//       reset();
//     } catch (error) {
//       console.error('Error submitting application:', error);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit(onSubmit)}>
//       <div>
//         <label>Candidate ID:</label>
//         <input type="number" {...register('candidate', { required: true })} />
//       </div>
//       <div>
//         <label>Resume:</label>
//         <input type="file" {...register('resume', { required: true })} />
//       </div>
//       <div>
//         <label>Cover Letter:</label>
//         <input type="file" {...register('cover_letter', { required: true })} />
//       </div>
//       <button type="submit">Apply</button>
//     </form>
//   );
// };

// export default ApplicationForm;

import React from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { Box, Button, TextField, Typography } from '@mui/material';
import { styled } from '@mui/system';

const FormContainer = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '20px',
  gap: '20px',
});

const ApplicationForm = ({ setHiddforum, post_id, post_title }) => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append('post', post_id);
    formData.append('candidate', data.candidate);
    formData.append('status', 'p'); // Assuming default status is pending
    formData.append('resume', data.resume[0]);
    formData.append('cover_letter', data.cover_letter[0]);

    try {
      const response = await axios.post('http://127.0.0.1:8000/candidates/application/create/', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log('Application submitted:', response.data);
      setHiddforum(true); // Trigger success animation and close the modal
      reset();
    } catch (error) {
      console.error('Error submitting application:', error);
    }
  };

  return (
    <FormContainer component="form" onSubmit={handleSubmit(onSubmit)}>
      <Typography variant="h6" ><h5 style={{ fontWeight: 'bold', color: 'skyblue' }}>{post_title}</h5></Typography>
      <TextField
        label="Candidate ID"
        type="number"
        {...register('candidate', { required: true })}
        fullWidth
        variant="outlined"
      />
      <TextField
        label="Resume"
        type="file"
        InputLabelProps={{
          shrink: true,
        }}
        {...register('resume', { required: true })}
        fullWidth
        variant="outlined"
      />
      <TextField
        label="Cover Letter"
        type="file"
        InputLabelProps={{
          shrink: true,
        }}
        {...register('cover_letter', { required: true })}
        fullWidth
        variant="outlined"
      />
      <Button variant="contained" color="primary" type="submit">
        Apply
      </Button>
    </FormContainer>
  );
};

export default ApplicationForm;
