// import React, { useEffect, useState, useRef } from "react";
// import "./login.css";
// import { FaGoogle, FaFacebook } from "react-icons/fa"; // Import Google and Facebook icons
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import { Toast } from "primereact/toast";
// import ToggleButton from "components/ToggleButton/ToggleButton";
// import {
//   Box,
//   Button,
//   Dialog,
//   DialogActions,
//   DialogContent,
//   Stack,
//   TextField,
//   Typography,
//   useTheme,
// } from "@mui/material";
// import { InputSwitch } from "primereact/inputswitch";
// import { Dropdown } from "primereact/dropdown";
// import { Visibility, VisibilityOff } from "@mui/icons-material";
// import { IconButton, InputAdornment } from "@mui/material";

// const PasswordInput = ({ password, handlePassword, required }) => {
//   const [showPassword, setShowPassword] = useState(false);

//   const handleClickShowPassword = () => {
//     setShowPassword(!showPassword);
//   };

//   return (
//     <TextField
//       // size="small"
//       type={showPassword ? "text" : "password"}
//       label="Password"
//       value={password}
//       onChange={handlePassword}
//       required={required}
//       InputProps={{
//         endAdornment: (
//           <InputAdornment position="end">
//             <IconButton
//               aria-label="toggle password visibility"
//               onClick={handleClickShowPassword}
//               edge="end"
//             >
//               {showPassword ? <VisibilityOff /> : <Visibility />}
//             </IconButton>
//           </InputAdornment>
//         ),
//       }}
//       // fullWidth
//     />
//   );
// };
// export default function Login(props) {
//   let [authMode, setAuthMode] = useState("signin");
//   let [isChecked, setIsChecked] = useState(true);
//   const theme = useTheme();
//   const [login, setLogin] = useState("");
//   const [role, setRole] = useState("c");
//   const [password, setPassword] = useState("");
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password2, setPassword2] = useState("");
//   const [company, setComapny] = useState("");
//   const [type, setType] = useState("");
//   const toast = useRef(null);
//   const [selectedGender, setSelectedGender] = useState("m");
//   const [accessToken, setAccessToken] = useState("");
//   const [refreshToken, setRefreshToken] = useState("");
//   // const genderValue = mapGenderToValue(selectedGender);
//   const gender = [{ name: "Male" }, { name: "Female" }];

//   const [isSwitchChecked, setIsSwitchChecked] = useState(false);

//   const [showPassword, setShowPassword] = useState(false);

//   const handleClickShowPassword = () => {
//     setShowPassword(!showPassword);
//   };
//   useEffect(() => {
//     setType("candidate");
//   }, []);
//   useEffect(() => {
//     console.log("===>", type);
//   }, [type]);

//   function mapGenderToValue(selectedOption) {
//     console.log("option : ", selectedOption);
//     switch (selectedOption.name) {
//       case "Male":
//         return "m";
//       case "Female":
//         return "f";
//       // Add more cases if needed
//       default:
//         return null; // Return null for invalid or unknown options
//     }
//   }

//   const changeAuthMode = () => {
//     setAuthMode(authMode === "signin" ? "signup" : "signin");
//   };
//   const check = () => {
//     setIsChecked(isChecked === true ? "signup" : "signin");
//   };
//   // Get the history object
//   const navigate = useNavigate();
//   function redirectToDashboard() {
//     // Redirect to the dashboard component
//     navigate("/admin/dashboard");
//   }

//   const apiUrl = process.env.REACT_APP_API_URL;

//   async function connexion(event) {
//     console.log(login, password);
//     try {
//       const response = await axios.post(`${apiUrl}authentication/login/`, {
//         email: login,
//         password: password,
//       });
//       console.log(response.data);
//       setRefreshToken(response.data.refresh_token);
//       setAccessToken(response.data.access_token);
//       // Storing accessToken in localStorage====================================
//       localStorage.setItem("accessToken", response.data.access_token);
//       localStorage.setItem("refreshToken", response.data.refresh_token);

//       redirectToDashboard();
//       setLogin("");
//       setPassword("");
//       toast.current.show({
//         severity: "success",
//         summary: "Successful",
//         detail: "Logged in",
//         life: 3000,
//       });
//     } catch (err) {
//       alert("Post Registration Failed!");
//     }
//   }
//   const linkedinAuth = async () => {
//     console.log("LinkedInAuth");
//     try {
//       // Open the popup window for LinkedIn authentication

//       console.log(apiUrl);
//       window.location.href =
//         "https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=78q7n8oilzgi18&redirect_uri=http://localhost:3000/login&state=1234&scope=openid%20email%20profile";

//       if (window.location.href.includes("code=")) {
//         console.log("it contains the code in url ");
//         // fetchCallbackData();
//       } else {
//         console.log("it does not contain the code in url ");
//       }
//     } catch (error) {
//       console.error("Error redirecting to LinkedIn authentication:", error);
//     }
//   };

//   // FetchCallbackData.js
//   const fetchCallbackData = async (code) => {
//     console.log("Code:", code);
//     try {
//       const params = {
//         grant_type: "authorization_code",
//         code: code,
//         redirect_uri: "http://localhost:3000/login",
//         client_id: "78q7n8oilzgi18",
//         client_secret: "WPL_AP0.khyYEipcPsAtKLM1.NzU5ODc1NDU1",
//       };
//       const response = await axios.get(
//         `${apiUrl}authentication/linkedin-callback/`,
//         { params: params }
//       );
//       console.log("params : ", params);
//       const result = response.data;
//       console.log(result);
//     } catch (error) {
//       console.error("Error fetching data from callback:", error);
//       // Handle the error, e.g., show a message to the user
//     }
//   };

//   useEffect(() => {
//     if (window.location.href.includes("code=")) {
//       console.log("The URL contains the code.");
//       // Call the function to fetch data using the code
//       // fetchCallbackData(code);
//     } else {
//       console.log("does not contain anything");
//     }
//     const urlParams = new URLSearchParams(window.location.search);
//     const code = urlParams.get("code");

//     if (code) {
//       // console.log('code :', code);
//       // Call a function to handle the code
//       fetchCallbackData(code);
//     } else {
//       console.log("Code not found in the URL.");
//     }
//   });

//   async function registration(event) {
//     console.log(name, type, email, password2, role, genderValue, company);
//     try {
//       await axios.post(`${apiUrl}authentication/signup/`, {
//         type: type,
//         username: name,
//         email: email,
//         password: password2,
//         role: role,
//         gender: genderValue,
//         company: company,
//       });

//       // alert("Post Registation Successfully");
//       setName("");
//       setPassword2("");
//       setEmail("");
//       setComapny("");
//       setSelectedGender("Male");
//       // toast.current.show({
//       //   severity: "success",
//       //   summary: "Successful",
//       //   detail: "Loged in",
//       //   life: 3000,
//       // });
//       toast.current.show({
//         severity: "secondary",
//         summary: "Secondary",
//         detail: "User created",
//         life: 3000,
//       });
//     } catch (err) {
//       alert("post Registation Failed");
//     }
//   }
//   const genderValue = mapGenderToValue(selectedGender);
//   // const changeRole = () => {
//   //   if (role === "r") {
//   //     setRole("c");
//   //     // setType("candidate");
//   //     console.log("type : ", type);
//   //   } else {
//   //     setRole("r");
//   //     // setType("recruiter");
//   //     console.log("type : ", type);
//   //   }
//   // };
//   if (authMode === "signin") {
//     return (
//       <div className="Auth-form-container">
//         <Toast ref={toast} />

//         <form className="Auth-form">
//           <div className="Auth-form-content">
//             <center>
//               <img src={require("assets/img/logo-black.png")} alt="Logo" />
//             </center>
//             <h3 className="titleClr text-center">Sign In</h3>

//             <div className="text-center">
//               Not registered yet?{" "}
//               <span
//                 className="link-primary cursor-pointer"
//                 onClick={changeAuthMode}
//               >
//                 Sign Up
//               </span>
//             </div>
//             <div className="form-group mt-3">
//               <Stack spacing={3} margin={0}>
//                 <TextField
//                   variant="outlined"
//                   label="Login"
//                   id="login"
//                   value={login}
//                   onChange={(event) => {
//                     setLogin(event.target.value);
//                   }}
//                 ></TextField>
//                 <PasswordInput
//                   password={password}
//                   handlePassword={(e) => setPassword(e.target.value)}
//                 />
//               </Stack>
//             </div>
//             <div className="d-grid gap-2 mt-3">
//               <Button
//                 color="primary"
//                 variant="contained"
//                 sx={{
//                   bgcolor:
//                     theme.palette.mode === "dark" ? "#009688" : "#9cd6d1",
//                   ":hover": {
//                     bgcolor:
//                       theme.palette.mode === "dark" ? "#9cd6d1" : "#009688",
//                   },
//                 }}
//                 onClick={connexion}
//                 // onClick={functionopenpopup3}
//               >
//                 CONNEXION
//               </Button>
//             </div>

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
//               onClick={linkedinAuth}
//             >
//               linkedin
//             </Button>

//             <div className="d-flex justify-content-center mt-3">
//               <button className="btn googleBtn  me-2" onClick={linkedinAuth}>
//                 <FaGoogle /> Sign in with Google
//               </button>
//               <button className="btn fbBtn">
//                 <FaFacebook /> Sign in with Facebook
//               </button>
//             </div>
//             <p className="text-center mt-2">
//               Forgot{" "}
//               <a href="#" className="custom-gray-text">
//                 password?
//               </a>
//             </p>
//           </div>
//         </form>
//       </div>
//     );
//   }

//   return (
//     <div className="Auth-form-container">
//       <Toast ref={toast} />
//       <form className="Auth-form">
//         <div className="Auth-form-content">
//           <center>
//             <img src={require("assets/img/logo-black.png")} alt="Logo" />
//           </center>
//           <h3 className="titleClr text-center">Sign Up</h3>
//           <div className="text-center">
//             Already registered?{" "}
//             <span
//               className="link-primary cursor-pointer"
//               onClick={changeAuthMode}
//             >
//               Sign In
//             </span>
//           </div>
//           <Stack spacing={3} margin={0}>
//             <TextField
//               variant="outlined"
//               label="Name"
//               id="name"
//               value={name}
//               required={true}
//               onChange={(event) => {
//                 setName(event.target.value);
//               }}
//             ></TextField>
//             <TextField
//               variant="outlined"
//               label="Email"
//               id="email"
//               required={true}
//               value={email}
//               onChange={(event) => {
//                 setEmail(event.target.value);
//               }}
//             ></TextField>
//             {/* <TextField
//               variant="outlined"
//               label="Password"
//               id="password2"
//               value={password2}
//               onChange={(event) => {
//                 setPassword2(event.target.value);
//               }}
//             ></TextField> */}
//             <PasswordInput
//               password={password2}
//               required={true}
//               handlePassword={(e) => setPassword2(e.target.value)}
//             />
//             <Dropdown
//               value={selectedGender}
//               onChange={(e) => setSelectedGender(e.value)}
//               options={gender}
//               optionLabel="name"
//               placeholder="Select your Gender"
//               className="w-full md:w-14rem"
//               checkmark={true}
//               highlightOnSelect={false}
//             />
//             <Stack spacing={0} margin={0}>
//               <div className="row">
//                 <div className="col">
//                   <Typography
//                     fontSize={18}
//                     fontFamily={"sans-serif"}
//                     color={
//                       theme.palette.mode === "dark" ? "#009688" : "#9cd6d1"
//                     }
//                   >
//                     Are you recruter ?
//                   </Typography>
//                 </div>
//                 <div className="col">
//                   <InputSwitch
//                     // required={true}
//                     onChange={(e) => {
//                       setIsSwitchChecked(e.value);
//                       // setRole("r");
//                       isSwitchChecked
//                         ? setType("candidate")
//                         : setType("recruiter");
//                       type === "candidate" ? setRole("c") : setRole("r");
//                       console.log(type);
//                       // changeRole();
//                     }}
//                     checked={isSwitchChecked}
//                   />
//                 </div>
//               </div>
//             </Stack>
//             {isSwitchChecked ? (
//               <>
//                 {/* {setType("recruiter")}  */}
//                 <TextField
//                   variant="outlined"
//                   label="Company"
//                   id="company"
//                   required={true}
//                   value={company}
//                   onChange={(event) => {
//                     setComapny(event.target.value); // Typo corrected from setComapny to setCompany
//                   }}
//                 ></TextField>
//               </>
//             ) : (
//               ""
//               // <>
//               //   {setType("candidate")} {/* Move this outside */}
//               //   {console.log(type)}
//               // </>
//             )}
//           </Stack>
//           <div className="d-grid gap-2 mt-3 ">
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
//               onClick={registration}
//             >
//               SUBMIT
//             </Button>
//           </div>
//           <div className="d-flex justify-content-center mt-3 ">
//             <button className="btn googleBtn me-2">
//               <FaGoogle /> Sign up with Google
//             </button>
//             <button className="btn fbBtn">
//               <FaFacebook /> Sign up with Facebook
//             </button>
//           </div>
//           <p className="text-center mt-2">
//             Forgot{" "}
//             <a href="#" className="custom-gray-text">
//               password?
//             </a>
//           </p>
//         </div>
//       </form>
//     </div>
//   );
// }
import React, { useEffect, useState, useRef } from "react";
import "./login.css";
import { FaGoogle, FaFacebook, FaLinkedin } from "react-icons/fa"; // Import Google and Facebook icons
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Toast } from "primereact/toast";
import {
  Button,
  Stack,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import { InputSwitch } from "primereact/inputswitch";
import { Dropdown } from "primereact/dropdown";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { IconButton, InputAdornment } from "@mui/material";
import { connect } from "react-redux"; // Import connect from react-redux
import { setUserId } from "../../Redux/actions"; // Import your action
import { gapi } from "gapi-script";
// import { GoogleLogin } from "../../components/GoogleLogin/googleLogin";
import { GoogleLogin } from "react-google-login";
import { GoogleOAuthProvider } from "@react-oauth/google";
const PasswordInput = ({ password, handlePassword, required }) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <TextField
      type={showPassword ? "text" : "password"}
      label="Password"
      value={password}
      onChange={handlePassword}
      required={required}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleClickShowPassword}
              edge="end"
            >
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  );
};
const Login = (props) => {
  const [authMode, setAuthMode] = useState("signin");
  const theme = useTheme();
  const [login, setLogin] = useState("");
  const [role, setRole] = useState("c");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password2, setPassword2] = useState("");
  const [company, setCompany] = useState("");
  const [type, setType] = useState("");
  const [selectedGender, setSelectedGender] = useState("m");
  const [isSwitchChecked, setIsSwitchChecked] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const toast = useRef(null);

  const gender = [{ name: "Male" }, { name: "Female" }];

  const apiUrl = process.env.REACT_APP_API_URL;

  useEffect(() => {
    setType("candidate");
  }, []);

  useEffect(() => {
    localStorage.clear();
  }, []);

  useEffect(() => {
    if (window.location.href.includes("code=")) {
      console.log("The URL contains the code.");
      const urlParams = new URLSearchParams(window.location.search);
      const code = urlParams.get("code");
      fetchCallbackData(code);
    } else {
      console.log("Code not found in the URL.");
    }
  }, []);

  const changeAuthMode = () => {
    setAuthMode(authMode === "signin" ? "signup" : "signin");
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const mapGenderToValue = (selectedOption) => {
    console.log("option : ", selectedOption);
    switch (selectedOption.name) {
      case "Male":
        return "m";
      case "Female":
        return "f";
      default:
        return null;
    }
  };

  const connexion = async (event) => {
    console.log(login, password);
    try {
      const response = await axios.post(`${apiUrl}authentication/login/`, {
        email: login,
        password: password,
      });
      console.log(response.data);
      localStorage.setItem("accessToken", response.data.access_token);
      localStorage.setItem("refreshToken", response.data.refresh_token);

      const userId = getUserIdFromAccessToken();
      if (userId) {
        console.log("User ID:", userId);
        props.setUserId(userId); // Store userId in Redux
      } else {
        console.log("User ID not found or failed to decode token");
      }

      redirectToDashboard();
      setLogin("");
      setPassword("");
      toast.current.show({
        severity: "success",
        summary: "Successful",
        detail: "Logged in",
        life: 3000,
      });
    } catch (err) {
      alert("Post Registration Failed!");
    }
  };

  const clientId =
    "1065255482933-3pgtuvdlckvr8s4uo1ecko09gm2blo9s.apps.googleusercontent.com";

  // useEffect(() => {
  //   console.log('clientId is : ',clientId)
  //   function start() {
  //     gapi.client.init({
  //       clientId: clientId,
  //       scope: "",
  //     },
  //   console.log('initialized')
  //   );
  //   }
  //   // Load Google API client and call start function to initialize
  //   gapi.load("client:auth2", start);
  // },[clientId]);

  useEffect(() => {
    const loadGoogleAPI = () => {
      window.gapi.load("client", () => {
        console.log("Google API Client Loaded");
        // You can now use the gapi object to access Google APIs
      });
    };

    if (!window.gapi) {
      // Handle case where Google API client library failed to load
      console.error("Failed to load Google API client library");
      return;
    }

    loadGoogleAPI();
  }, []);

  const fetchGoogleData = async (res) => {
    try {
      const response = await axios.get(
        `${apiUrl}authentication/google/userinfo/`,
        { withCredentials: true, params: res.profileObj }
      );
      // const response = await fetch(`${apiUrl}authentication/google/userinfo/`, {
      //   headers: {
      //     "Content-type": "application/json",
      //     // Authorization: "Bearer " + localStorage.getItem("accessToken"), // Add a space after 'Bearer'
      //     params : res.profileObj
      //   },
      // });
      console.log("this is the res data  : ", response.data);
      console.log("simple log");
      localStorage.setItem("accessToken", response.data.access_token);
      localStorage.setItem("refreshToken", response.data.refresh_token);
      const userId = getUserIdFromAccessToken();
      if (userId) {
        console.log("User ID:", userId);
        props.setUserId(userId); // Store userId in Redux
      } else {
        console.log("User ID not found or failed to decode token");
      }
      redirectToDashboard();
    } catch (error) {
      console.error("Error fetching data from callback:", error);
    }
  };
  const onSuccess = (res) => {
    console.log("Login Success: currentUser:", res.profileObj);
    fetchGoogleData(res);
  };

  const onFailure = (res) => {
    console.error("Login failed: res:", res);
  };

  const linkedinAuth = async () => {
    console.log("LinkedInAuth");
    try {
      console.log(apiUrl);
      window.location.href = `https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=86o1ech9y4in4m&redirect_uri=${window.location.origin}/login&state=1234&scope=openid%20email%20profile`;
    } catch (error) {
      console.error("Error redirecting to LinkedIn authentication:", error);
    }
  };

  const fetchCallbackData = async (code) => {
    console.log("Code:", code);
    try {
      const params = {
        grant_type: "authorization_code",
        code: code,
        redirect_uri: `${apiUrl}login`,
        client_id: "86o1ech9y4in4m",
        client_secret: "WPL_AP0.jW3gypWTWCnun6rz.MTIxMTM2NzA2NA==",
      };
      const response = await axios.get(
        `${apiUrl}authentication/linkedin-callback/`,
        { params: params }
      );
      console.log("params : ", params);
      const result = response.data;
      console.log(result);
      localStorage.setItem("accessToken", response.data.access_token);
      localStorage.setItem("refreshToken", response.data.refresh_token);
      const userId = getUserIdFromAccessToken();
      if (userId) {
        console.log("User ID:", userId);
        props.setUserId(userId); // Store userId in Redux
      } else {
        console.log("User ID not found or failed to decode token");
      }
      redirectToDashboard();
    } catch (error) {
      console.error("Error fetching data from callback:", error);
    }
  };

  function getUserIdFromAccessToken() {
    const accessToken = localStorage.getItem("accessToken");
    if (!accessToken) {
      console.error("No access token found in local storage");
      return null;
    }

    try {
      const decodedToken = parseJwt(accessToken);
      const userId = decodedToken.user_id; // Adjust according to your JWT payload structure
      return userId;
    } catch (error) {
      console.error("Failed to decode access token", error);
      return null;
    }
  }

  function parseJwt(token) {
    const base64Url = token.split(".")[1];
    const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
    const jsonPayload = decodeURIComponent(
      atob(base64)
        .split("")
        .map(function (c) {
          return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
        })
        .join("")
    );
    console.log("payload : ", jsonPayload);

    return JSON.parse(jsonPayload);
  }

  const redirectToDashboard = () => {
    navigate("/admin/dashboard");
  };

  const navigate = useNavigate();

  const registration = async (event) => {
    console.log(name, type, email, password2, role, genderValue, company);
    try {
      await axios.post(`${apiUrl}authentication/signup/`, {
        type: type,
        username: name,
        email: email,
        password: password2,
        role: role,
        gender: genderValue,
        company: company,
      });

      setName("");
      setPassword2("");
      setEmail("");
      setCompany("");
      setSelectedGender("Male");
      toast.current.show({
        severity: "secondary",
        summary: "Secondary",
        detail: "User created",
        life: 3000,
      });
    } catch (err) {
      console.error("Registration failed:", err);
      alert("post Registration Failed");
    }
  };

  const genderValue = mapGenderToValue(selectedGender);

  return (
    <div className="Auth-form-container">
      <Toast ref={toast} />
      <form className="Auth-form">
        <div className="Auth-form-content">
          <center>
            <img src={require("assets/img/logo-black.png")} alt="Logo" />
          </center>
          <h3 className="titleClr text-center">
            {authMode === "signin" ? "Sign In" : "Sign Up"}
          </h3>
          <div className="text-center">
            {authMode === "signin" ? (
              <>
                Not registered yet?{" "}
                <span
                  className="link-primary cursor-pointer"
                  onClick={changeAuthMode}
                >
                  Sign Up
                </span>
              </>
            ) : (
              <>
                Already registered?{" "}
                <span
                  className="link-primary cursor-pointer"
                  onClick={changeAuthMode}
                >
                  Sign In
                </span>
              </>
            )}
          </div>
          <Stack spacing={3} margin={0}>
            {authMode === "signin" ? (
              <>
                <TextField
                  variant="outlined"
                  label="Login"
                  id="login"
                  value={login}
                  onChange={(event) => {
                    setLogin(event.target.value);
                  }}
                ></TextField>
                <TextField
                  variant="outlined"
                  type={showPassword ? "text" : "password"}
                  label="Password"
                  id="password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                />
              </>
            ) : (
              <>
                <TextField
                  variant="outlined"
                  label="Name"
                  id="name"
                  value={name}
                  required={true}
                  onChange={(event) => {
                    setName(event.target.value);
                  }}
                ></TextField>
                <TextField
                  variant="outlined"
                  label="Email"
                  id="email"
                  required={true}
                  value={email}
                  onChange={(event) => {
                    setEmail(event.target.value);
                  }}
                ></TextField>
                <TextField
                  variant="outlined"
                  type={showPassword ? "text" : "password"}
                  label="Password"
                  id="password2"
                  required={true}
                  value={password2}
                  onChange={(event) => setPassword2(event.target.value)}
                />
                <Dropdown
                  value={selectedGender}
                  onChange={(e) => setSelectedGender(e.value)}
                  options={gender}
                  optionLabel="name"
                  placeholder="Select your Gender"
                  className="w-full md:w-14rem"
                  checkmark={true}
                  highlightOnSelect={false}
                />
                {/* <Stack spacing={0} margin={0}>
                  <div className="row">
                    <div className="col">
                      <Typography
                        fontSize={18}
                        fontFamily={"sans-serif"}
                        color={
                          theme.palette.mode === "dark" ? "#009688" : "#9cd6d1"
                        }
                      >
                        Are you a recruiter?
                      </Typography>
                    </div>
                    <div className="col">
                      {/* <InputSwitch
                        onChange={(e) => {
                          setIsSwitchChecked(e.value);

                          setType(e.value ? "recruiter" : "candidate");
                          setRole(e.value ? "r" : "c");

                          isSwitchChecked
                            ? setType("candidate")
                            : setType("recruiter");
                          type === "candidate" ? setRole("r") : setRole("c");
>>>>>>> master
                        }}
                        checked={isSwitchChecked}
                      /> 
                    </div>
                  </div>
                </Stack> */}
                {isSwitchChecked && (
                  <>
                    <TextField
                      variant="outlined"
                      label="Company"
                      id="company"
                      required={true}
                      value={company}
                      onChange={(event) => {
                        setCompany(event.target.value);
                      }}
                    ></TextField>
                  </>
                )}
              </>
            )}
          </Stack>
          <div className="d-grid gap-2 mt-3 ">
            <Button
              color="primary"
              variant="contained"
              sx={{
                bgcolor: theme.palette.mode === "dark" ? "#009688" : "#9cd6d1",
                ":hover": {
                  bgcolor:
                    theme.palette.mode === "dark" ? "#9cd6d1" : "#009688",
                },
              }}
              onClick={authMode === "signin" ? connexion : registration}
            >
              {authMode === "signin" ? "CONNEXION" : "SUBMIT"}
            </Button>
          </div>
          {authMode === "signin" && (
            <div className="d-flex justify-content-center mt-3">
              {/* <GoogleLogin
                  clientId={clientId} // Replace with your Google Client ID
                  buttonText="Login"
                  onSuccess={onSuccess}
                  onFailure={onFailure}
                  cookiePolicy={"single_host_origin"}
                  isSignedIn={false}
                />

              <Button
                className="btn googleBtn me-2"
                color="primary"
                variant="contained"
                sx={{
                  bgcolor: "#EA4335",
                  ":hover": {
                    bgcolor: "#EA4335",
                  },
                }}
              >
                <FaGoogle /> Sign in with Google
              </Button> */}

              <GoogleLogin
                clientId={clientId}
                onSuccess={onSuccess}
                onFailure={onFailure}
                cookiePolicy={"single_host_origin"}
                isSignedIn={false}
                render={({ onClick }) => (
                  <Button
                    className="btn googleBtn me-2"
                    color="primary"
                    variant="contained"
                    sx={{
                      bgcolor: "#EA4335",
                      ":hover": {
                        bgcolor: "#EA4335",
                      },
                    }}
                    onClick={onClick}
                  >
                    <FaGoogle /> Sign in with Google
                  </Button>
                )}
              />

              <Button
                className="btn fbBtn"
                onClick={linkedinAuth}
                color="primary"
                variant="contained"
                sx={{
                  bgcolor: "#0762C8",
                  ":hover": {
                    bgcolor: "#0762C7",
                  },
                }}
              >
                <FaLinkedin /> Sign in with LinkedIn
              </Button>
            </div>
// =======
            //   <div className="d-flex justify-content-center mt-3">
            //     <button className="btn googleBtn  me-2">
            //       <FaGoogle /> Sign in with Google
            //     </button>
            //     <Button className="btn fbBtn" onClick={linkedinAuth} color="primary"
            //       variant="contained"
            //       sx={{
            //     bgcolor:  "#0762C8" ,
            //         ":hover": {
            //           bgcolor: "#0762C7",
            //         },
            //       }}>
            //       <FaLinkedin /> Sign in with LinkedIn
            //     </Button>
            //   </div>
            // </>
// >>>>>>> master
          )}
          <p className="text-center mt-2">
            Forgot{" "}
            <a href="#" className="custom-gray-text">
              password?
            </a>
          </p>
        </div>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => ({
  userId: state.userId,
});

const mapDispatchToProps = {
  setUserId,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
