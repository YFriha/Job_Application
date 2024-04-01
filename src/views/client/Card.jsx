import React from 'react'
import {
    CCardBody,
    CCardTitle,
    CCardSubtitle,
    CCardText,
    CCardLink,
    CCard,
  } from "@coreui/react";
function MyCard(props,title, subtitle,text) {
  return (
    <div>
        <CCard style={{ width: "18rem" }}>
        <CCardBody>
          <CCardTitle>{props.title}</CCardTitle>
          <CCardSubtitle className="mb-2 text-body-secondary">
            {props.subtitle}
          </CCardSubtitle>
          <CCardText>
            {props.text}
          </CCardText>
          {/* <CCardLink href="#">Card link</CCardLink> */}
          <CCardLink href="#">Read more</CCardLink>
        </CCardBody>
      </CCard>
    </div>
  )
}

export default MyCard