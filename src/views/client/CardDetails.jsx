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

import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import "./home.css";
import pulseLogo from 'assets/img/PULSE-digital-logo.png'; // Adjust the path according to your project structure
import {useState, useEffect} from 'react';
import { useNavigate } from "react-router-dom";
export default function MyCard(props, title, description, requirements, localisation, mode, deadline, image) {
  console.log(props.image);
  const [isFixed, setIsFixed] = useState(false);
  const navigate = useNavigate(); // Initialize useNavigate
  const handleApplyClick = () => {
    navigate("/login");
  };
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 240) {
        // Change 100 to the scroll position where you want it to become fixed
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
  return (
    <div className={`fixed-component ${isFixed ? "fixed" : "fixed2"}`}>
      <Card
        
  
      >
        <CardActionArea  >
          <CardMedia
            component="img"
            height="80"
            width="250"
            image={pulseLogo}
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
          </CardContent>
        </CardActionArea>

        {/* <CardActions>
        <Button size="small" className="share-button" style={{color: '#9cd6d1'}}>
          Share
        </Button>
      </CardActions> */}
      <div className="d-grid gap-2 ">
        <button class="btn btn-primary" type="button" onClickCapture={handleApplyClick} >Apply</button>
      </div>
      </Card>
    </div>
  );
}
