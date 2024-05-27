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

import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import pulseLogo from 'assets/img/PULSE-digital-logo.png'; // Adjust the path according to your project structure
import { SvgIcon } from '@mui/material';
import './home.css';
import {  Box } from '@mui/material';
import { useState, useEffect } from "react";
import DevOpsLoop from 'assets/img/DevOpsLoop.png'; // Adjust the path according to your project structure


function SavedIcon({ onClick }) {
    const [isSaved, setIsSaved] = useState(false);

    const handleClick = () => {
        setIsSaved(!isSaved); // Toggle the saved state
        onClick(); // Call the provided onClick function
    };

    return (
      <SvgIcon
          onClick={handleClick}
          style={{
              cursor: 'pointer',
              color: isSaved ? 'green' : 'currentColor',
              fontWeight: 'bold', // Making the icon color bold
              backgroundColor: 'transparent' // Making the background color clear
          }}
       >  
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-save" viewBox="0 0 16 16">
            <path d="M2 1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H9.5a1 1 0 0 0-1 1v7.293l2.646-2.647a.5.5 0 0 1 .708.708l-3.5 3.5a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L7.5 9.293V2a2 2 0 0 1 2-2H14a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h2.5a.5.5 0 0 1 0 1z"/>
        </svg>
      </SvgIcon>
  
    );
}

export default function MyCard({ title, description, deadline, image }) {
    const handleSaveIconClick = () => {
        // Add your logic here for handling the saved icon click event
        console.log('Saved icon clicked!');
    };

    return (
        <Card sx={{ maxWidth: 500, height: 200, marginBottom: 5, border: '1px solid #9cd6d1', borderRadius: '8px' }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="90"
                    image={image ? image : DevOpsLoop}
                    alt="Job Post Image"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {title}
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Typography variant="body2" color="text.secondary">
                            {deadline}
                        </Typography>
                        <Box sx={{ ml: 40 }}>
                            <SavedIcon onClick={handleSaveIconClick} />
                        </Box>
                    </Box>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}

