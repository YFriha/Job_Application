import  { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import { useTheme } from "@mui/material";
import axios from "axios";
// import setImgUrl from "./PlayerPage";
function ImageUploadButton({ onImageUpload }) {
  const [selectedImage, setSelectedImage] = useState("");
  // const [url, setUrl]=useState("");

  const preset_key="tpjsjr7k";
  const cloud_name ='dwckvxlca';

  // const handleFileChange = (event) => {
  //   const file = event.target.files[0];

  //   if (file) {
  //     // Read the selected image file as a data URL
  //     const reader = new FileReader();
  //     reader.onload = (e) => {
  //       setSelectedImage(e.target.result);
  //     };
  //     reader.readAsDataURL(file);
  //   }
  // };

// useEffect(()=>{
//   setImgUrl(selectedImage);
// },[selectedImage])

function handleFile(event){

  const file= event.target.files[0];
  const formData= new FormData();
  formData.append('file',file);
  formData.append('upload_preset',preset_key);
  axios
      .post(`https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`, formData)
      .then((res) => {
        const imageUrl = res.data.secure_url;
        setSelectedImage(imageUrl);
        // Call the callback function to pass the image URL to the parent component
        onImageUpload(imageUrl);
      })
      .catch((err) => console.log(err));
  // console.log(selectedImage);
}



  const theme = useTheme();
  return (
    <div style={{ textAlign: "center" }}>
    <Button
      variant="contained"
      component="label"
      sx={{
        bgcolor:
          theme.palette.mode === "dark" ? "#009688" : "#9cd6d1",
          width:"420px",
        ":hover": {
          bgcolor:
            theme.palette.mode === "dark" ? "#9cd6d1" : "#009688",
        },
      }}
    >
      Upload
      <input accept="image/*" type="file" onChange={handleFile} style={{ display: "none" }} />
    </Button>

    {selectedImage && (
      <div style={{ marginTop: "20px" }}>
        {/* <h2>Image Preview:</h2> */}
        <img src={selectedImage} alt="Selected" style={{ maxWidth: "60%", margin: "0 auto",border: "3px solid #E5E4E2", borderRadius:"10px"}}  />
      </div>
    )}
  </div>

  );
}

export default ImageUploadButton;
