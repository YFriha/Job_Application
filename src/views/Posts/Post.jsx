// import React, {useEffect, useState} from "react";
// import CRUDTable, {
//   Fields,
//   Field,
//   CreateForm,
//   UpdateForm,
//   DeleteForm,
// } from "react-crud-table";
// import axios from 'axios';

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faUserEdit, faTrashCan } from "@fortawesome/free-solid-svg-icons";
// // Component's Base CSS
// import "./post.css";

// const DescriptionRenderer = ({ field }) => <textarea {...field} />;
// // const RequirementRenderer = ({ field }) => <textarea {...field} />;

// let posts = [
//   {
//     id: "1",
//     title: "Software Engineer",
//     post: "Remote",
//     description: "Developing software applications for various platforms",
//     requirements: [
//       "Experience with JavaScript, HTML, CSS",
//       "Strong problem-solving skills",
//     ],
//     deadline: "2024-04-30",
//   },
//   {
//     id: "2",
//     title: "Marketing Manager",
//     post: "New York City",
//     description: "Creating and implementing marketing strategies",
//     requirements: [
//       "Bachelor's degree in Marketing or related field",
//       "Experience in digital marketing",
//     ],
//     deadline: "2024-05-05",
//   },
//   {
//     id: "3",
//     title: "Graphic Designer",
//     post: "Los Angeles",
//     description: "Designing visual content for print and digital media",
//     requirements: ["Bachelor's degree in Graphic Design or related field"],
//     deadline: "2024-04-25",
//   },
//   {
//     id: "4",
//     title: "Data Analyst",
//     post: "Chicago",
//     description:
//       "Analyzing data to provide insights and support decision-making",
//     requirements: [
//       "Bachelor's degree in Statistics, Mathematics, or related field",
//     ],
//     deadline: "2024-05-01",
//   },
//   {
//     id: "5",
//     title: "Customer Service Representative",
//     post: "Miami",
//     description: "Assisting customers with inquiries, concerns, and requests",
//     requirements: ["High school diploma or equivalent"],
//     deadline: "2024-04-28",
//   },
//   {
//     id: "6",
//     title: "Accountant",
//     post: "San Francisco",
//     description: "Managing financial records and preparing reports",
//     requirements: ["CPA certification preferred"],
//     deadline: "2024-05-10",
//   },
//   {
//     id: "7",
//     title: "Human Resources Manager",
//     post: "Washington, D.C.",
//     description: "Overseeing recruitment, training, and employee relations",
//     requirements: ["SHRM certification preferred"],
//     deadline: "2024-05-02",
//   },
//   {
//     id: "8",
//     title: "Sales Representative",
//     post: "Dallas",
//     description: "Generating leads and closing sales deals",
//     requirements: ["Proven sales experience"],
//     deadline: "2024-04-27",
//   },
//   {
//     id: "9",
//     title: "Web Developer",
//     post: "Seattle",
//     description: "Building and maintaining websites and web applications",
//     requirements: [
//       "Bachelor's degree in Computer Science or related field",
//       "Proficiency in HTML, CSS, JavaScript",
//     ],
//     deadline: "2024-05-03",
//   },
//   {
//     id: "10",
//     title: "Content Writer",
//     post: "Boston",
//     description:
//       "Creating engaging content for websites, blogs, and social media",
//     requirements: [
//       "Bachelor's degree in English, Journalism, or related field",
//       "Excellent writing and editing skills",
//       "Experience with SEO and content marketing",
//     ],
//     deadline: "2024-04-29",
//   },
//   // Add more job objects as needed
// ];

// // console.log(posts);

// const SORTERS = {
//   NUMBER_ASCENDING: (mapper) => (a, b) => mapper(a) - mapper(b),
//   NUMBER_DESCENDING: (mapper) => (a, b) => mapper(b) - mapper(a),
//   STRING_ASCENDING: (mapper) => (a, b) => mapper(a).localeCompare(mapper(b)),
//   STRING_DESCENDING: (mapper) => (a, b) => mapper(b).localeCompare(mapper(a)),
// };
// //------------------------------------------

// //---------------------------------------------
// const getSorter = (data) => {
//   const mapper = (x) => x[data.field];
//   let sorter = SORTERS.STRING_ASCENDING(mapper);

//   if (data.field === "id") {
//     sorter =
//       data.direction === "ascending"
//         ? SORTERS.NUMBER_ASCENDING(mapper)
//         : SORTERS.NUMBER_DESCENDING(mapper);
//   } else {
//     sorter =
//       data.direction === "ascending"
//         ? SORTERS.STRING_ASCENDING(mapper)
//         : SORTERS.STRING_DESCENDING(mapper);
//   }

//   return sorter;
// };

// let count = posts.length;
// const service = {
//   fetchItems: (payload) => {
//     let result = Array.from(posts);
//     result = result.sort(getSorter(payload.sort));
//     return Promise.resolve(result);
//   },
//   create: (post) => {
//     count += 1;
//     posts.push({
//       ...post,
//       id: count,
//     });
//     return Promise.resolve(post);
//   },
//   update: (data) => {
//     const post = posts.find((t) => t.id === data.id);
//     post.post = data.post;
//     post.description = data.description;
//     return Promise.resolve(post);
//   },
//   delete: (data) => {
//     const post = posts.find((t) => t.id === data.id);
//     posts = posts.filter((t) => t.id !== post.id);
//     return Promise.resolve(post);
//   },
// };

// const styles = {
//   container: { margin: "auto", width: "fit-content" },
// };

// export default function Example() {
//   const [data,setData]=useState('');
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch('http://127.0.0.1:8000/candidates/');
//         const result = await response.json();
//         console.log(result);
//         setData(result);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };

//     fetchData();
//   }, []);
//   //=======================================================

//   return (
//     <div className="content">
//       <CRUDTable
//         // caption="posts"
//         fetchItems={(payload) => service.fetchItems(payload)}
//       >
//         <Fields>
//           <Field className="col-1" name="id" label="Id" hideInCreateForm />
//           <Field name="title" label="Title" placeholder="Title" />

//           <Field
//             name="description"
//             label="Description"
//             render={DescriptionRenderer}
//           />
//           <Field name="deadline" label="Deadline" placeholder="deadline" />
//         </Fields>
//         <CreateForm
//         // className="position-relative position-absolute top-0 end-0"
//           title="Post Creation"
//           message="Create a new Post!"
//           trigger="Create Job Post"
//           onSubmit={(post) => service.create(post)}
//           submitText="Create"
//           validate={(values) => {
//             const errors = {};
//             if (!values.post) {
//               errors.post = "Please provide post's title";
//             }

//             if (!values.description) {
//               errors.description = "Please provide post's description";
//             }

//             return errors;
//           }}
//         />

//         <UpdateForm
//           title="Post Update Process"
//           message="Update Post"
//           trigger={<FontAwesomeIcon icon={faUserEdit} />}
//           onSubmit={(post) => service.update(post)}
//           submitText="Update"
//           validate={(values) => {
//             const errors = {};

//             if (!values.post) {
//               errors.post = "Please provide post's title";
//             }

//             if (!values.description) {
//               errors.description = "Please provide post's description";
//             }

//             return errors;
//           }}
//         />
//        <DeleteForm
//           title="post Delete Process"
//           message="Are you sure you want to delete the post?"
//           trigger={<FontAwesomeIcon icon={faTrashCan} />}
//           onSubmit={(post) => service.delete(post)}
//           submitText="Delete"
//           validate={(values) => {
//             const errors = {};
//             if (!values.id) {
//               errors.id = "Please provide id";
//             }
//             return errors;
//           }}
//         />
//       </CRUDTable>
//     </div>
//   );
// }
//===========================================================================================================
// import React, { useMemo, useState, useEffect } from 'react';
// import {
//   MaterialReactTable,
//   useMaterialReactTable,
// } from 'material-react-table';
// import { Alert, CircularProgress, Stack } from '@mui/material';
// import AddIcon from '@mui/icons-material/Add';
// import MinusIcon from '@mui/icons-material/Remove';
// import {
//   QueryClient,
//   QueryClientProvider,
//   keepPreviousData,
//   useQuery,
// } from '@tanstack/react-query'; //note: this is TanStack React Query V5

// const DetailPanel = ({ row }) => {
//   const [candidates, setCandidates] = useState([]);
//   useEffect(() => {
//     const fetchCandidate = async () => {
//       try {
//         const response = await fetch('http://127.0.0.1:8000/candidates/');
//         const data = await response.json();
//         setCandidates(data);
//       } catch (error) {
//         console.error('Error fetching candidates:', error);
//       }
//     };

//     fetchCandidate();
//   }, []);
//   const {
//     data: userInfo,
//     isLoading,
//     isError,
//   } = useFetchUserInfo(
//     {
//       phoneNumber: row.id, //the row id is set to the user's phone number
//     },
//     {
//       enabled: row.getIsExpanded(),
//     },
//   );
//   if (isLoading) return <CircularProgress />;
//   if (isError) return <Alert severity="error">Error Loading User Info</Alert>;

//   // const { json  } = userInfo ?? {};
//   // console.log('objecct',json);
// //   async function fetchCandidate (){
// //     const response = await fetch('http://127.0.0.1:8000/candidates/');
// //     const json = await response.json();
// //     console.log(json);
// //     // SetMycandidates(json);
// //     return json;
// //  }
// // //  var cand= fetchCandidate();
// //  fetchCandidate().then((cand) => {
// //   console.log(cand)});

//  return (
//     <Stack gap="0.5rem" minHeight="00px">
//       <div>
//       {candidates.map((candidate) => (
//           <li key={candidate.id}>
//             {candidate.first_name} {candidate.last_name}
//           </li>
//         ))}      </div>
//       {/* <div>
//         <b>Favorite Song:</b> {favoriteSong}
//       </div>
//       <div>
//         <b>Quote:</b> {quote}
//       </div> */}
//     </Stack>
//   );
// };

// const Example = () => {
//   //manage our own state for stuff we want to pass to the API
//   const [columnFilters, setColumnFilters] = useState([]);
//   const [globalFilter, setGlobalFilter] = useState('');
//   const [sorting, setSorting] = useState([]);
//   const [pagination, setPagination] = useState({
//     pageIndex: 0,
//     pageSize: 5,
//   });

//   const {
//     data: { data = [
//       {
//             id: "1",
//             title: "Software Engineer",
//             post: "Remote",
//             description: "Developing software applications for various platforms",
//             requirements: [
//               "Experience with JavaScript, HTML, CSS",
//               "Strong problem-solving skills",
//             ],
//             deadline: "2024-04-30",
//           },
//           {
//             id: "2",
//             title: "Marketing Manager",
//             post: "New York City",
//             description: "Creating and implementing marketing strategies",
//             requirements: [
//               "Bachelor's degree in Marketing or related field",
//               "Experience in digital marketing",
//             ],
//             deadline: "2024-05-05",
//           },
//     ], meta } = {},
//     isError,
//     isRefetching,
//     isLoading,
//   } = useFetchUsers({
//     columnFilters,
//     globalFilter,
//     pagination,
//     sorting,
//   });

//   const columns = useMemo(
//     //column definitions...
//     () => [
//       {
//         accessorKey: 'title',
//         header: 'title',
//       },
//       {
//         accessorKey: 'description',
//         header: 'description',
//       },
//       {
//         accessorKey: 'requirement',
//         header: 'requirement',
//       },
//       {
//         accessorKey: 'deadline',
//         header: 'deadline',
//       },

//     ],
//     [],
//     //end
//   );

//   const table = useMaterialReactTable({
//     columns,
//     data,
//     getRowId: (row) => row.phoneNumber,
//     manualFiltering: true, //turn off built-in client-side filtering
//     manualPagination: true, //turn off built-in client-side pagination
//     manualSorting: true, //turn off built-in client-side sorting
//     muiExpandButtonProps: ({ row }) => ({
//       children: row.getIsExpanded() ? <MinusIcon /> : <AddIcon />,
//     }),
//     muiToolbarAlertBannerProps: isError
//       ? {
//           color: 'error',
//           children: 'Error loading data',
//         }
//       : undefined,
//     onColumnFiltersChange: setColumnFilters,
//     onGlobalFilterChange: setGlobalFilter,
//     onPaginationChange: setPagination,
//     onSortingChange: setSorting,
//     renderDetailPanel: ({ row }) => <DetailPanel row={row} />,
//     rowCount: meta?.totalRowCount ?? 0,
//     state: {
//       columnFilters,
//       globalFilter,
//       isLoading,
//       pagination,
//       showAlertBanner: isError,
//       showProgressBars: isRefetching,
//       sorting,
//     },
//   });

//   return <MaterialReactTable table={table} />;
// };

// const queryClient = new QueryClient();

// const ExampleWithReactQueryProvider = () => (
//   //App.tsx or AppProviders file. Don't just wrap this component with QueryClientProvider! Wrap your whole App!
//   <QueryClientProvider client={queryClient}>
//     <Example />
//   </QueryClientProvider>
// );

// export default ExampleWithReactQueryProvider;

// //fetch user hook
// const useFetchUsers = ({
//   columnFilters,
//   globalFilter,
//   pagination,
//   sorting,
// }) => {
//   return useQuery({
//     queryKey: [
//       // users, //give a unique key for this query
//       columnFilters, //refetch when columnFilters changes
//       globalFilter, //refetch when globalFilter changes
//       pagination.pageIndex, //refetch when pagination.pageIndex changes
//       pagination.pageSize, //refetch when pagination.pageSize changes
//       sorting, //refetch when sorting changes
//     ],
//     queryFn: async () => {
//       const fetchURL = new URL(
//         '/api/data',

//       );

//       //read our state and pass it to the API as query params
//       fetchURL.searchParams.set(
//         'start',
//         `${pagination.pageIndex * pagination.pageSize}`,
//       );
//       fetchURL.searchParams.set('size', `${pagination.pageSize}`);
//       fetchURL.searchParams.set('filters', JSON.stringify(columnFilters ?? []));
//       fetchURL.searchParams.set('globalFilter', globalFilter ?? '');
//       fetchURL.searchParams.set('sorting', JSON.stringify(sorting ?? []));

//       //use whatever fetch library you want, fetch, axios, etc
//       const response = await fetch('http://127.0.0.1:8000/candidates/');
//       const json = await response.json();

//       return json;
//     },
//     placeholderData: keepPreviousData, //don't go to 0 rows when refetching or paginating to next page
//   });
// };

// //fetch more user info hook
// const useFetchUserInfo = (params, options) => {
//   return useQuery({
//     enabled: options.enabled, //only fetch when the detail panel is opened
//     staleTime: 60 * 1000, //don't refetch for 60 seconds
//     queryKey: ["user", params.phoneNumber], //give a unique key for this query for each user fetch
//     queryFn: async () => {
//       //use whatever fetch library you want, fetch, axios, etc
//       const response = await fetch('http://127.0.0.1:8000/candidates/');
//       const json = await response.json();
//       console.log(json);
//       // SetMycandidates(json);
//       return json;
//     },
//   });
// };
//=============================================================================================================
//
//==============================================================================================================
import ImageUploadButton from "../ImageUploadButton";
import axios from "axios";
import CardPost from "./CardPost";
import MyArrayInput from "../MyArrayInput";
import InputMask from "react-input-mask";

// import selectedImage from "./ImageUploadButton";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  Stack,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import { useEffect } from "react";
import { refresh } from "../../refresh";
// import yassir from '../assets/img/';
import { useState } from "react";
import React from "react";

import { Message } from "primereact/message";
import { useNavigate } from "react-router-dom";

import { connect } from "react-redux"; // Import connect from react-redux
import { setUserId } from "../../Redux/actions"; // Import your action

// import ImageUploadButton from "./ImageUploadButton";
// import { generateRandomPassword } from "./GenerateRandomPassword";
const PostPage = () => {
  const [postImage, setPostImage] = useState("");

  const [postTitle, setPostTitle] = useState("");
  const [postDescription, setPostDescription] = useState("");
  const [postRequirement, setPostRequirement] = useState([]);
  const [postDeadline, setPostDeadline] = useState("");
  const [postCompany, setPostCompany] = useState("");
  const [postCompanyArray, setPostCompanyArray] = useState();
  const [arrayOfStrings, setArrayOfStrings] = useState([]);
  const [posts, setPosts] = useState([]);
  const [refreshToken, setRefreshToken] = useState("");
  const [accessToken, setAccessToken] = useState("");
  // const [DataArray, setDataArray] = useState(true);
  const apiUrl = process.env.REACT_APP_API_URL;
  const isTextFieldEmpty = (value) => {
    return value === "";
  };

  
  const userId = getUserIdFromAccessToken();
  useEffect(() => {
    (async () => await Load())();
  }, []);
  const navigate = useNavigate();
  async function Load() {
    const response = await fetch(`${apiUrl}/posts/list/${userId}/`, {
      headers: {
        "Content-type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("accessToken"), // Add a space after 'Bearer'
      },
    });
    console.log("response : ", response);
    if (response.status === 401) {
      console.log("Unauthorized. Redirecting to login page...");
      navigate("/login");
      return; // or throw new Error('Unauthorized'); depending on your requirement
    }
    const json = await response.json();
    setPosts(json);
    setPostCompanyArray(json.company);
    return json;
  }
  async function save(event) {
    toggleDialog3();
    if(postDeadline.trim() === ''){
      isEmpty = true;
    }
    
    console.log(arrayOfStrings);
    try {
      console.log("the user id is : ", userId);
      await axios.post(`${apiUrl}posts/create/`, {
        image: postImage,
        title: postTitle,
        description: postDescription,
        requirements: arrayOfStrings,
        deadline: postDeadline,
        recruiter: userId,
      });
      alert("Post Registation Successfully");
      setPostTitle("");
      setPostDescription("");
      setPostRequirement("");
      setPostDeadline("");
      setPostCompany("");
      setArrayOfStrings([]);
      closepopup();
      Load();
    } catch (err) {
      alert("post Registation Failed");
    }
  }
  const handleImageUpload = (postImage) => {
    setPostImage(postImage);
    console.log(postImage);
  };
  const deletePostById = async (postId) => {
    try {
      // Send a DELETE request to the API endpoint with the post's ID
      await axios.delete(`${apiUrl}/posts/${postId}/delete/`);

      // If the request is successful, the post has been deleted
      console.log(`Post with ID ${postId} has been deleted.`);
      Load();
    } catch (error) {
      // Handle any errors that occur during the deletion process
      console.error(`Error deleting post with ID ${postId}: ${error.message}`);
    }
  };

  // async function updatePost(updatedData) {
  //   console.log("voila le nom du post updated : " + updatedData.postTitle);
  //   try {
  //     const response = await axios.put(
  //       `http://localhost:8080/posts`,
  //       updatedData
  //     );

  //     if (response.status === 200) {
  //       // Handle a successful update (e.g., show a success message)
  //       console.log(`Post with ID has been updated.`);
  //       // Reload the post data if needed
  //       Load();
  //     } else {
  //       // Handle errors (e.g., show an error message)
  //       console.error(`Error updating post with ID : ${response.statusText}`);
  //     }
  //   } catch (error) {
  //     // Handle any network errors or exceptions
  //     console.error(`Error updating post: ${error.message}`);
  //   }
  // }
  async function updatePost(updatedData) {
    console.log("test 2", updatedData);
    try {
      const response = await axios.put(
        `${apiUrl}/posts/${updatedData.postid}/update/`,
        updatedData
      );
      if (response.status === 200) {
        // Handle a successful update (e.g., show a success message)
        console.log(`Post with ID has been updated.`);
        // Reload the post data if needed
        Load();
      } else {
        // Handle errors (e.g., show an error message)
        console.error(`Error updating post with ID : ${response.statusText}`);
      }
    } catch (error) {
      // Handle any network errors or exceptions
      console.error(`Error updating post: ${error.message}`);
    }
  }
  const theme = useTheme();

  const [open, openchange] = useState(false);
  const [open2, openchange2] = useState(false);
  const [open3, openchange3] = useState(false);
  //----------------------------------------------------------------
  const functionopenpopup = () => {
    openchange(true);
  };

  const closepopup = () => {
    openchange(!visible);
  };

  const functionopenpopup2 = () => {
    toggleDialog();
    openchange2(true);
  };
  const closepopup2 = () => {
    openchange2(false);
  };

  const functionopenpopup3 = () => {
    save();
    toggleDialog2();
    openchange3(true);
  };

  const closepopup3 = () => {
    openchange3(false);
  };
  const [visible] = React.useState(true);
  const toggleDialog = () => {
    openchange(!visible);
  };
  const toggleDialog2 = () => {
    openchange2(!visible);
  };
  const toggleDialog3 = () => {
    openchange3(!visible);
  };
  const [filter, setFilter] = useState("");
  // const filteredCards = posts.filter(post => post.company ===filter);
  // console.log("filter by Company  : ",filteredCards)
  const filteredCards = posts.filter((post) => {
    const job = post.title.toLowerCase();
    const filterLower = filter.toLowerCase();

    // Check if the company name starts with the filter string
    return job.startsWith(filterLower);
  });
  console.log(filteredCards);

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
  const isEmpty = false;
  return (
    <div
      style={{
        flexDirection: "column",
      }}
      className="d-flex flex-column content "
    >
      {/* <img src={yassir} className="card-image img-responsive" /> */}

      <div>
        <Stack direction={"row"} padding={2}>
          <Box flexGrow={3} borderRadius={8}></Box>
          <TextField
            style={{ marginRight: "30px" }}
            variant="standard"
            type="text"
            placeholder="Filter by Job post"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          />
          <Dialog open={open} onClose={closepopup} fullWidth maxWidth="sm">
            {" "}
            <DialogContent>
              <Stack spacing={2.5} margin={2}>
                <Typography
                  fontSize={25}
                  fontFamily={"sans-serif"}
                  color={theme.palette.mode === "dark" ? "#009688" : "#9cd6d1"}
                >
                  Add post
                </Typography>
                <TextField
                  variant="outlined"
                  label="Post Title"
                  id="postTitle"
                  value={postTitle}
                  onChange={(event) => {
                    setPostTitle(event.target.value);
                  }}
                  sx={{
                    borderColor: isTextFieldEmpty(postTitle)
                      ? undefined
                      : "red",
                  }}
                ></TextField>
                <TextField
                  variant="outlined"
                  label="Post Description"
                  id="postDescription"
                  value={postDescription}
                  onChange={(event) => {
                    setPostDescription(event.target.value);
                  }}
                ></TextField>
                {/* <TextField
                  variant="outlined"
                  label="Requirements"
                  id="postReq"
                  value={postRequirement}
                  onChange={(event) => {
                    setPostRequirement(event.target.value);
                  }}
                ></TextField> */}
                <MyArrayInput
                  value={arrayOfStrings}
                  onChange={setArrayOfStrings}
                />
                {/* <TextField
                  variant="outlined"
                  label="Deadline"
                  id="postDeadline"
                  value={postDeadline}
                  onChange={(event) => {
                    setPostDeadline(event.target.value);
                  }}
                ></TextField> */}
                <InputMask
                  mask="9999-99-99"
                  value={postDeadline}
                  onChange={(event) => {
                    setPostDeadline(event.target.value);
                  }}
                  maskChar=" "
                >
                  {(inputProps) => (
                    <TextField
                      {...inputProps}
                      variant="outlined"
                      label="Deadline"
                      id="postDeadline"
                      fullWidth
                      error={isEmpty}
                      helperText={isEmpty ? "This field is required" : ""}
                    />
                  )}
                </InputMask>
              </Stack>
              <Stack direction="row" alignItems="center" spacing={2}>
                <ImageUploadButton onImageUpload={handleImageUpload} />
              </Stack>
            </DialogContent>
            <DialogActions>
              <Button
                color="primary"
                variant="contained"
                sx={{
                  bgcolor:
                    theme.palette.mode === "dark" ? "#009688" : "#9cd6d1",
                  ":hover": {
                    bgcolor:
                      theme.palette.mode === "dark" ? "#9cd6d1" : "#009688",
                  },
                }}
                onClick={() => {
                  console.log(
                    postTitle,
                    postDescription,
                    arrayOfStrings.length,
                    postDeadline,
                    postCompany
                  );
                  if (
                    postTitle === "" ||
                    arrayOfStrings.length === 0 ||
                    arrayOfStrings.some((item) => item === "")
                  ) {
                    <Message severity="error" text="Error Message" />;
                    window.alert("Veillez remplir les champs obligatoires!");
                  } else {
                    save();
                  }
                }}
              >
                ADD POST
              </Button>{" "}
            </DialogActions>
          </Dialog>
          {/* <Dialog open={open2} onClose={closepopup2} fullWidth maxWidth="sm">
            <DialogContent>
              <Stack spacing={2.5} margin={2}>
                <Typography
                  fontSize={25}
                  fontFamily={"sans-serif"}
                  color={theme.palette.mode === "dark" ? "#009688" : "#9cd6d1"}
                >
                  Add post
                </Typography>
                <text>Additional informations</text>

                <TextField
                  variant="outlined"
                  label="Position"
                  id="postPost"
                  value={postPost}
                  onChange={(event) => {
                    setPostPost(event.target.value);
                  }}
                ></TextField>
                <TextField
                  variant="outlined"
                  label="Number"
                  id="postValue"
                  value={postValue}
                  onChange={(event) => {
                    setPostValue(event.target.value);
                  }}
                ></TextField>
                <TextField
                  variant="outlined"
                  label="Phone"
                  id="postPhone"
                  value={postPhone}
                  onChange={(event) => {
                    setPostPhone(event.target.value);
                  }}
                ></TextField>
                <TextField
                  variant="outlined"
                  label="Email"
                  id="postEmail"
                  value={postEmail}
                  onChange={(event) => {
                    setPostEmail(event.target.value);
                  }}
                ></TextField>

                <Stack direction="row" alignItems="center" spacing={2}></Stack>
              </Stack>
            </DialogContent> */}

          {/* <DialogActions>
              <Button
                color="primary"
                variant="contained"
                sx={{
                  bgcolor:
                    theme.palette.mode === "dark" ? "#009688" : "#9cd6d1",
                  ":hover": {
                    bgcolor:
                      theme.palette.mode === "dark" ? "#9cd6d1" : "#009688",
                  },
                }}
                onClick={functionopenpopup3}
              >
                Next
              </Button>
            </DialogActions>
          </Dialog> */}
          {/* <Dialog
            // fullScreen
            open={open3}
            onClose={closepopup3}
            fullWidth
            maxWidth="sm"
          >
            {/* <DialogContent>
              <Stack spacing={2.5} margin={2}>
                <Typography
                  fontSize={25}
                  fontFamily={"sans-serif"}
                  color={theme.palette.mode === "dark" ? "#009688" : "#9cd6d1"}
                >
                  Add post
                </Typography>
                <text>Additional informations</text>
                <p className="lead">
                  Login : {postTitle}.{postDescription}@intelltrac.com{" "}
                </p>
                <p className="lead">Password : {randomPassword} </p>
                <Stack direction="row" alignItems="center" spacing={2}></Stack>
              </Stack>
            </DialogContent> */}

          {/* <DialogActions>
              <Button
                color="primary"
                variant="contained"
                sx={{
                  bgcolor:
                    theme.palette.mode === "dark" ? "#009688" : "#9cd6d1",
                  ":hover": {
                    bgcolor:
                      theme.palette.mode === "dark" ? "#9cd6d1" : "#009688",
                  },
                }}
                onClick={save}
              >
                Terminer
              </Button>
            </DialogActions> 
          </Dialog> */}
          <Stack>
            <Button
              variant="contained"
              onClick={functionopenpopup}
              sx={{
                bgcolor: theme.palette.mode === "dark" ? "#009688" : "#9cd6d1",
                ":hover": {
                  bgcolor:
                    theme.palette.mode === "dark" ? "#9cd6d1" : "#009688",
                },
              }}
            >
              Add new Post
            </Button>
          </Stack>
        </Stack>
        <div className="app">
          {filteredCards.map((post) => (
            // console.log("requirements :  ", post.image),
            <div className="my-food" key={post.postId}>
              <CardPost
                postid={post.id}
                imageSrc={post.image}
                title={post.title}
                description={post.description}
                requirement={post.requirements}
                deadline={post.deadline}
                company={post.company}
                onDeletePost={deletePostById}
                updatePost={updatePost}
                handleImageUpload={handleImageUpload}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  userId: state.userId,
});

const mapDispatchToProps = {
  setUserId,
};

export default connect(mapStateToProps, mapDispatchToProps)(PostPage);
