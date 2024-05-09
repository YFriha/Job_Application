// import React from "react"; // Import React
import PropTypes from "prop-types"; // Import PropTypes
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import MyArrayInput from "../MyArrayInput";

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
import { CreateOutlined } from "@mui/icons-material";
import { useState, useEffect } from "react";
// import ImageUploadButton from "./ImageUploadButton";
// import PropTypes from 'prop-types';
// import axios from "axios";
import axios from "axios";
import AlertDialogSlide from "../../components/Dialog/AlertDialogSlide";

function CardIntern({
  internid,
  // imageSrc,
  subject,
  email,
  location,
  deadline,
  recruiter,
  onDeleteIntern,
  updateIntern,
}) {
  const navigate = useNavigate();

  const routeChange = () => {
    const path = `/intern/Interndetails/${encodeURIComponent(
      internid
    // )}/${encodeURIComponent(imageSrc
    )}
    /${encodeURIComponent(subject)}/${encodeURIComponent(
      email
    )}/${encodeURIComponent(location)}/${encodeURIComponent(
      deadline
    )}/${encodeURIComponent(recruiter)}`;

    navigate(path);
  };

  const [internTitle, setInternFname] = useState(subject);
  const [internDescription, setInternDescription] = useState(email);
  const [internRequirement, setInternRequirement] = useState(location);
  const [internDeadline, setInternDeadline] = useState(deadline);
  const [internCompany, setInternValue] = useState(recruiter);
  // const [selectedImage, setSelectedImage] = useState(imageSrc);
  useEffect(() => {
    // location.forEach((req, index) => {
    // console.log("this is the req :: ", imageSrc);
    // setUpdatedDB([]);
  }, []);
  async function handleUpdateIntern() {
    closepopup4();
    console.log("the intern id for deleting is : " + internid);
    const updatedInternData = {
      internid: internid,
      recruiter: "1",
      // image: imageSrc,
      subject: internTitle,
      email: internDescription,
      requirements: internRequirement,
      deadline: internDeadline,
      recruiter: "pulse",
    };
    console.log("test 1", updatedInternData);
    updateIntern(updatedInternData);
  }
  // async function updateIntern(updatedData) {
  //   console.log("test 2", updatedData);
  //   try {
  //     const response = await axios.put(
  //       `http://127.0.0.1:8000/interns/${internid}/update/`,
  //       updatedData
  //     );
  //     if (response.status === 200) {
  //       // Handle a successful update (e.g., show a success message)
  //       console.log(`Intern with ID has been updated.`);
  //       // Reload the intern data if needed
  //       // Load();
  //     } else {
  //       // Handle errors (e.g., show an error message)
  //       console.error(`Error updating intern with ID : ${response.statusText}`);
  //     }
  //   } catch (error) {
  //     // Handle any network errors or exceptions
  //     console.error(`Error updating intern: ${error.message}`);
  //   }
  // }

  const theme = useTheme();
  const [open4, openchange4] = useState(false);

  const functionopenpopup4 = () => {
    openchange4(true);
  };
  const closepopup4 = () => {
    openchange4(false);
  };
  return (
    <div className="card">
      {/* <img src={imageSrc} alt={subject} className="card-image img-responsive" /> */}
      <div className="card-content">
        <h2 className="card-subject" style={{ color: "#9cd6d1" }}>
          {subject}
        </h2>
        <p className="card-email">
          <span style={{ color: "#009688" }}>email :</span>
          <span style={{ color: "#9f9f9f" }}>{email}</span>
        </p>
        <p className="card-email">
          <span style={{ color: "#009688" }}>location :</span>
          <span style={{ color: "#9f9f9f" }}>{location}</span>
        </p>
        {/* <p className="card-email">
          <span style={{ color: "#009688" }}>Requirements : </span>{" "}
          {location.map((req, index) => (
            <span key={index} style={{ color: "#9f9f9f" }}>
              {req}
              {index !== location.length - 1 ? ", " : "."}
              <br />
            </span>
          ))}
        </p> */}

        <p className="card-email">
          <span style={{ color: "#009688" }}>Deadline :</span>
          <span style={{ color: "#9f9f9f" }}>{deadline}</span>
        </p>
        <p className="card-email">
          <span style={{ color: "#009688" }}>recruiter :</span>{" "}
          <span style={{ color: "#9f9f9f" }}>{recruiter}</span>
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
              }}
            >
              More details
            </Button>
          </div>
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
            <AlertDialogSlide id={internid} onDeleteIntern={onDeleteIntern} />
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
              Update Intern
            </Typography>
            <div className="row">
              <div className="col">
                <TextField
                  variant="outlined"
                  label="Title"
                  internId="internTitle"
                  value={subject}
                  onChange={(event) => {
                    setInternFname(event.target.value);
                  }}
                ></TextField>
              </div>
              <div className="col">
                {/* <TextField
                  variant="outlined"
                  label="Description"
                  internId="internDescription"
                  value={internDescription}
                  onChange={(event) => {
                    setInternDescription(event.target.value);
                  }}
                ></TextField> */}
              </div>
            </div>
            {/* <MyArrayInput
              value={internRequirement}
              onChange={setInternRequirement}
            /> */}

            <div className="row">
              <div className="col">
                <TextField
                  variant="outlined"
                  label="Deadline"
                  internId="internWeight"
                  value={internDeadline}
                  onChange={(event) => {
                    setInternDeadline(event.target.value);
                  }}
                ></TextField>
              </div>
            </div>

            <div className="row">
              <div className="col">
                <TextField
                  variant="outlined"
                  label="Company"
                  internId="internCompany"
                  value={internCompany}
                  onChange={(event) => {
                    setInternValue(event.target.value);
                  }}
                ></TextField>
              </div>
            </div>
            <div className="row"></div>
            <Stack direction="row" alignItems="center" spacing={2}></Stack>
          </Stack>
        </DialogContent>

        <DialogActions>
          <Button
            color="primary"
            variant="contained"
            sx={{
              bgcolor: theme.palette.mode === "dark" ? "#009688" : "#9cd6d1",
              ":hover": {
                bgcolor: theme.palette.mode === "dark" ? "#9cd6d1" : "#009688",
              },
            }}
            onClick={handleUpdateIntern} // Pass a reference to the updateIntern function
          >
            UPDATE
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

CardIntern.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  subject: PropTypes.string.isRequired,
  email: PropTypes.number.isRequired,
  location: PropTypes.arrayOf(PropTypes.string).isRequired,
  deadline: PropTypes.string.isRequired,
  recruiter: PropTypes.string.isRequired,
  onDeleteIntern: PropTypes.func.isRequired,
  internid: PropTypes.string,
  handleImageUpload: PropTypes.func.isRequired,
  intern: PropTypes.object.isRequired,
};

export default CardIntern;
