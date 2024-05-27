// import React from 'react'
// import {
//     CCardBody,
//     CCardTitle,
//     CCardSubtitle,
//     CCardText,
//     CCardLink,
//     CCard,
//   } from "@coreui/react";
// function MyCard(props,title, subtitle,text) {
//   return (
//     <div>
//         <CCard style={{ width: "18rem" }}>
//         <CCardBody>
//           <CCardTitle>{props.title}</CCardTitle>
//           <CCardSubtitle className="mb-2 text-body-secondary">
//             {props.subtitle}
//           </CCardSubtitle>
//           <CCardText>
//             {props.text}
//           </CCardText>
//           {/* <CCardLink href="#">Card link</CCardLink> */}
//           <CCardLink href="#">Read more</CCardLink>
//         </CCardBody>
//       </CCard>
//     </div>
//   )
// }

//-==============================================================================
import React, { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, Modal, Box } from "@mui/material";
import Lottie from 'react-lottie';
import successAnimation from './Animation - 1716461046736.json'; // Update the path to your success animation JSON file
import "./home.css";
import pulseLogo from 'assets/img/PULSE-digital-logo.png'; // Adjust the path according to your project structure
import DevOpsLoop from 'assets/img/DevOpsLoop.png'; // Adjust the path according to your project structure
import ApplicationForm from "./ApplicationForm ";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const successOptions = {
  loop: false,
  autoplay: true,
  animationData: successAnimation,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice'
  }
};

export default function MyCard(props) {
  const [isFixed, setIsFixed] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [Hiddforum, setHiddforum] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleApplyClick = () => {
    setShowForm(true);
  };

  const handleClose = () => {
    setShowForm(false);
    setHiddforum(false); // Reset Hiddforum state when modal is manually closed
    setShowSuccess(false); // Reset success animation state
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 240) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (Hiddforum) {
      setShowSuccess(true);
      setTimeout(() => {
        handleClose();
      }, 3000); // Display success animation for 3 seconds before closing modal
    }
  }, [Hiddforum]);

  return (
    <div className={`fixed-component ${isFixed ? "fixed" : "fixed2"}`}>

      <Card>
        <CardActionArea>
          <CardMedia
            component="img"
            height="200"
            width="250"
            image={props.image ? props.image : DevOpsLoop}
            alt="Job Post Image"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {props.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {props.description}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {props.requirements}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {props.localisation}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {props.mode}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {props.deadline}
            </Typography>
            {/* <Typography variant="body2" color="text.secondary">
              {props.id}
            </Typography> */}
          </CardContent>
        </CardActionArea>
        <div className="d-grid gap-2">
          <button
            className="btn btn-primary"
            type="button"
            onClickCapture={handleApplyClick}
          >
            Apply
          </button>
        </div>
      </Card>
      <Modal
        open={showForm}
        onClose={handleClose}
        aria-labelledby="application-form-modal-title"
        aria-describedby="application-form-modal-description"
      >
        <Box sx={style}>
          {showSuccess ? (
            <Lottie options={successOptions} height={200} width={200} />
          ) : (
            <ApplicationForm setHiddforum={setHiddforum} post_id={props.id} post_title={props.title} /> 
          )}
        </Box>
      </Modal>
    </div>
  );
}
