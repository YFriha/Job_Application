// import React, { useEffect, useState, useRef,useTheme } from "react";
// import "./login.css";
// import axios from "axios";
// import { Toast } from "primereact/toast";
// import {
//   Button,
//   Stack,
// } from "@mui/material";
// import { Login, PasswordInput } from './Login'
// function ForgotPassword() {
//   const [password, setPassword] = useState("");
//   const [password2, setPassword2] = useState("");
//   const theme = useTheme();
//   const toast = useRef(null);
//   return (
//     <div className="Auth-form-container">
//       <Toast ref={toast} />

//       <form className="Auth-form">
//         <div className="Auth-form-content">
//           <center>
//             <img src={require("assets/img/logo-black.png")} alt="Logo" />
//           </center>

//           <div className="form-group mt-3">
//             <Stack spacing={3} margin={0}>
//               <PasswordInput
//                 password={password}
//                 handlePassword={(e) => setPassword(e.target.value)}
//               />
//               <PasswordInput
//                 password={password2}
//                 handlePassword={(e) => setPassword2(e.target.value)}
//               />
//             </Stack>
//           </div>
//           <div className="d-grid gap-2 mt-3">
//             <Button
//               color="primary"
//               variant="contained"
//               sx={{
//                 bgcolor: theme.palette.mode === "dark" ? "#009688" : "#9cd6d1",
//                 ":hover": {
//                   bgcolor:
//                     theme.palette.mode === "dark" ? "#9cd6d1" : "#009688",
//                 },
//               }}
//               // onClick={connexion}
//               // onClick={functionopenpopup3}
//             >
//               CONNEXION
//             </Button>
//           </div>
//         </div>
//       </form>
//     </div>
//   );
// }

// export default ForgotPassword;
