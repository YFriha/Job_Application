// import React from "react"; // Import React
import PropTypes from "prop-types"; // Import PropTypes
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import MyArrayInput from "./MyArrayInput";

import {
  Dialog,
  DialogActions,
  DialogContent,
  IconButton,
  Stack,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import { CreateOutlined, DeleteOutlined } from "@mui/icons-material";
import { useState, useEffect } from "react";
// import ImageUploadButton from "./ImageUploadButton";
// import PropTypes from 'prop-types';
// import axios from "axios";
import axios from "axios";

function CardPost({
  postid,
  imageSrc,
  title,
  description,
  requirement,
  deadline,
  company,
  onDeletePost,
  // updatePost,
  post,
  // handleImageUpload,
}) {
  // console.log("first Test ", title, description);
  const navigate = useNavigate();

  const routeChange = () => {
    const path = `/post/Postdetails/${encodeURIComponent(
      imageSrc
    )}/${encodeURIComponent(title)}/${encodeURIComponent(
      description
    )}/${encodeURIComponent(requirement)}/${encodeURIComponent(
      deadline
    )}/${encodeURIComponent(company)}`;

    navigate(path);
  };

  const [arrayOfStrings, setArrayOfStrings] = useState([]);
  const [postTitle, setPostFname] = useState(title);
  const [postDescription, setPostDescription] = useState(description);
  const [postRequirement, setPostRequirement] = useState(requirement);
  const [postDeadline, setPostDeadline] = useState(deadline);
  const [postCompany, setPostValue] = useState(company);
  const [selectedImage, setSelectedImage] = useState(imageSrc);
  const [updatedDB, setUpdatedDB] = useState([]);
  useEffect(() => {
    // requirement.forEach((req, index) => {
    console.log("this is the req :: ", imageSrc);
    // setUpdatedDB([]);
  }, []);
  async function handleUpdatePost() {
    closepopup4();
    // console.log("the new image : "+ selectedImage)
    const updatedPostData = {
      // postid: id,
      title: postTitle,
      description: postDescription,
      requirements: postRequirement,
      deadline: postDeadline,
      company: postCompany,
    };
    console.log("test 1", updatedPostData);
    updatePost(updatedPostData);
  }
  async function updatePost(updatedData) {
    console.log("test 2", updatedData);
    try {
      const response = await axios.put(
        `http://127.0.0.1:8000/posts/${postid}/update/`,
        updatedData
      );
      if (response.status === 200) {
        // Handle a successful update (e.g., show a success message)
        console.log(`Post with ID has been updated.`);
        // Reload the post data if needed
        // Load();
      } else {
        // Handle errors (e.g., show an error message)
        console.error(`Error updating post with ID : ${response.statusText}`);
      }
    } catch (error) {
      // Handle any network errors or exceptions
      console.error(`Error updating post: ${error.message}`);
    }
  }
  // async function updatePost(updatedData) {
  //   setUpdatedDB([
  //     {
  //       "id": 8,
  //       "title": "devOps",
  //       "description": "developer",
  //       "requirements": [
  //           "DevOps",
  //           "Deployament"
  //       ],
  //       "deadline": "2024-11-14",
  //       "company": "pulse"
  //   }
  //   ]);
  //   console.log("voila le nom du post updated : " + updatedDB);
  //   try {
  //     const response = await axios.put(
  //       `http://127.0.0.1:8000/posts/5/update/`,
  //       updatedDB
  //     );
  //     console.log(updatedDB)

  //     if (response.status === 200) {
  //       // Handle a successful update (e.g., show a success message)
  //       console.log(`Post with ID has been updated.`);
  //       // Reload the post data if needed
  //       // Load();
  //     } else {
  //       // Handle errors (e.g., show an error message)
  //       console.error(`Error updating post with ID : ${response.statusText}`);
  //     }
  //   } catch (error) {
  //     // Handle any network errors or exceptions
  //     console.error(`Error updating post: ${error.message}`);
  //   }
  // }

  // const updatePost = async (updatedData) => {
  //   console.log("Data updated : ", updatedData);

  //   try {
  //   const response = await fetch("http://127.0.0.1:8000/posts/8/update/", {
  //     method: "PUT",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(updatedData),
  //   });
  //   if (!response.ok) {
  //     throw new Error(`Failed to update data: ${response.statusText}`);
  //   }
  //   console.log("Data updated successfully");
  //   // Optionally, you can fetch the updated data again or perform other actions
  // } catch (error) {
  //   console.error("Error updating data:", error);
  // }
  // try
  //  const response = await fetch('http://127.0.0.1:8000/posts/list/');
  //     const result = await response.json();
  //     console.log(result);
  // setData(result);
  //         const response = await axios.put(
  //           'http://127.0.0.1:8000/posts/5/update/',
  //           updatedData
  //         );

  //         if (response.status === 200) {
  //           // Handle a successful update (e.g., show a success message)
  //           console.log(`Post with ID has been updated.`);
  //           // Reload the post data if needed
  //           // Load();
  //         } else {
  //           // Handle errors (e.g., show an error message)
  //           console.error(`Error updating post with ID : ${response.statusText}`);
  //         }
  //       } catch (error) {
  //         // Handle any network errors or exceptions
  //         console.error(`Error updating post: ${error.message}`);
  //       }
  // };
  async function handleDeletePost() {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this post?"
    );
    if (confirmDelete) {
      onDeletePost(postid);
    }
  }
  const handleImageUpload = (imageUrl) => {
    setSelectedImage(imageUrl);
  };
  const theme = useTheme();
  const [open4, openchange4] = useState(false);

  const functionopenpopup4 = () => {
    openchange4(true);
  };
  const closepopup4 = () => {
    openchange4(false);
  };
  async function deletePostById(postid) {
    console.log(postid);
    try {
      // Send a DELETE request to the API endpoint with the post's ID
      await axios.delete(`http://127.0.0.1:8000/posts/${postid}/delete/`);

      // If the request is successful, the post has been deleted
      console.log(`Post with ID ${postid} has been deleted.`);
      // Load();
    } catch (error) {
      // Handle any errors that occur during the deletion process
      console.error(`Error deleting post with ID ${postid}: ${error.message}`);
    }
  }

  // async function updatePost(updatedData) {
  //   console.log("voila le nom du post updated : " + updatedData.postTitle);
  //   try {
  //     const response = await axios.put(
  //       `http://localhost:8080/posts`,
  //       updatedData
  //     );

  //     if (response.status === 200) {
  //       // Handle a successful update (e.g., show a success message)
  //       console.log(`Post with ID has been updated.`);
  //       // Reload the post data if needed
  //       // Load();
  //     } else {
  //       // Handle errors (e.g., show an error message)
  //       console.error(`Error updating post with ID : ${response.statusText}`);
  //     }
  //   } catch (error) {
  //     // Handle any network errors or exceptions
  //     console.error(`Error updating post: ${error.message}`);
  //   }

  return (
    <div className="card">
      <img src={imageSrc} alt={title} className="card-image img-responsive" />
      <div className="card-content">
        <h2 className="card-title" style={{ color: "#9cd6d1" }}>
          {title}
        </h2>
        <p className="card-description">
          <span style={{ color: "#009688" }}>description :</span>
          <span style={{ color: "#9f9f9f" }}>{description}</span>
        </p>
        <p className="card-description">
          <span style={{ color: "#009688" }}>Requirements : </span>{" "}
          {requirement.map((req, index) => (
            <span key={index} style={{ color: "#9f9f9f" }}>
              {req}
              {index !== requirement.length - 1 ? ", " : "."}
              <br />
              {/* Add comma if not the last requirement, otherwise add a dot */}
            </span>
          ))}
        </p>

        <p className="card-description">
          <span style={{ color: "#009688" }}>Deadline :</span>
          <span style={{ color: "#9f9f9f" }}>{deadline}</span>
        </p>
        <p className="card-description">
          <span style={{ color: "#009688" }}>Company :</span>{" "}
          <span style={{ color: "#9f9f9f" }}>{company}</span>
        </p>
        <div className="row ">
          <div className="col-8">
            <Button
              className="card-button"
              onClick={routeChange}
              style={{
                backgroundColor: "white",
                color: "black",
                border: "2px solid #9cd6d1",
                borderRadius: " 4px",
                padding: " 8px 16px",
                cursor: "pointer",
                transition: "transform 0.6s ease-in-out",
                marginTop: "20px",
                // marginLeft:"10px"
                // paddingLeft:"40px"
              }}
            >
              More details
            </Button>
          </div>
          {/* <Box ></Box>   */}
          <div
            style={{
              marginTop: "20px",
            }}
            className="col-4"
          >
            <IconButton
              sx={{
                color: "#9f9f9f",
              }}
              onClick={functionopenpopup4}
              color="inherit"
              aria-label="delete"
            >
              <CreateOutlined />
            </IconButton>
            <IconButton
              sx={{
                color: "#9f9f9f",
              }}
              onClick={() => deletePostById(postid)}
              // onClick={handleDeletePost}
              color="inherit"
              aria-label="delete"
            >
              <DeleteOutlined />
            </IconButton>
          </div>
        </div>
      </div>
      <Dialog
        // fullScreen
        open={open4}
        onClose={closepopup4}
        fullWidth
        maxWidth="sm"
      >
        <DialogContent>
          <Stack spacing={2.5} margin={1}>
            <Typography
              fontSize={25}
              fontFamily={"sans-serif"}
              color={theme.palette.mode === "dark" ? "#009688" : "#9cd6d1"}
            >
              Update Post
            </Typography>
            <div className="row">
              <div className="col">
                <TextField
                  variant="outlined"
                  label="Title"
                  postId="postTitle"
                  value={postTitle}
                  onChange={(event) => {
                    setPostFname(event.target.value);
                  }}
                ></TextField>
              </div>
              <div className="col">
                <TextField
                  variant="outlined"
                  label="Description"
                  postId="postDescription"
                  value={postDescription}
                  onChange={(event) => {
                    setPostDescription(event.target.value);
                  }}
                ></TextField>
              </div>
            </div>
            {/* <div className="row">
              <div className="col">
                <TextField
                  variant="outlined"
                  label="Requirements"
                  postId="postRequirement"
                  value={postRequirement}
                  onChange={(event) => {
                    setPostRequirement(event.target.value);
                  }}
                ></TextField>
              </div>
            </div> */}
            <MyArrayInput
              value={postRequirement}
              onChange={setPostRequirement}
            />

            <div className="row">
              <div className="col">
                <TextField
                  variant="outlined"
                  label="Deadline"
                  postId="postWeight"
                  value={postDeadline}
                  onChange={(event) => {
                    setPostDeadline(event.target.value);
                  }}
                ></TextField>
              </div>
            </div>

            <div className="row">
              <div className="col">
                <TextField
                  variant="outlined"
                  label="Company"
                  postId="postCompany"
                  value={postCompany}
                  onChange={(event) => {
                    setPostValue(event.target.value);
                  }}
                ></TextField>
              </div>
            </div>
            <div className="row">
              {/* <ImageUploadButton
                onImageUpload={
                  handleImageUpload}
              /> */}
            </div>

            {/* <text>Additional informations</text> */}
            {/* <p className="lead">Login : {postTitle}.{postDescription}@intelltrac.com </p>
                <p className="lead">Password : {randomPassword} </p> */}
            <Stack direction="row" alignItems="center" spacing={2}></Stack>
          </Stack>
        </DialogContent>

        <DialogActions>
          {/* <generateRandomPassword length = "16" /> */}
          <Button
            color="primary"
            variant="contained"
            sx={{
              bgcolor: theme.palette.mode === "dark" ? "#009688" : "#9cd6d1",
              ":hover": {
                bgcolor: theme.palette.mode === "dark" ? "#9cd6d1" : "#009688",
              },
            }}
            onClick={handleUpdatePost} // Pass a reference to the updatePost function
          >
            UPDATE
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

CardPost.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.number.isRequired,
  requirement: PropTypes.arrayOf(PropTypes.string).isRequired,
  deadline: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  // value: PropTypes.string.isRequired,
  // poste: PropTypes.string.isRequired,
  onDeletePost: PropTypes.func.isRequired,
  postid: PropTypes.string,
  // postImage: PropTypes.string.isRequired,
  // updatePost: PropTypes.func.isRequired,
  handleImageUpload: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired,
  // postObj: PropTypes.object.isRequired,
};

export default CardPost;
