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
import './home.css';
export default function MyCard(props,title, subtitle,text) {
  console.log(props.image)
  return (
    <Card sx={{ maxWidth: 500,height: 400 , marginBottom: 5, border: '1px solid #9cd6d1', borderRadius: '8px',     }}>
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
  );
}
