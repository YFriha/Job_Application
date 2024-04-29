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
import {useState, useEffect} from 'react';
export default function MyCard(props, title, subtitle, text) {
  console.log(props.image);
  const [isFixed, setIsFixed] = useState(false);
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
    <div className={`fixed-component ${isFixed ? "fixed" : ""}`}>
      <Card
        // sx={{
        //   maxWidth: 500,
        //   marginBottom: 5,
        //   border: "1px solid #9cd6d1",
        //   borderRadius: "15px",
        //   height: '500px'
        // }}
      >
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={props.image}
            alt="Job Post Image"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {props.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {props.text}
            </Typography>
          </CardContent>
        </CardActionArea>

        {/* <CardActions>
        <Button size="small" className="share-button" style={{color: '#9cd6d1'}}>
          Share
        </Button>
      </CardActions> */}
      </Card>
    </div>
  );
}
