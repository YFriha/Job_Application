// import { useMemo, useState } from 'react';
// import {
//   MaterialReactTable,
//   // createRow,
//   useMaterialReactTable,
// } from 'material-react-table';
// import {
//   Box,
//   Button,
//   CircularProgress,
//   IconButton,
//   Tooltip,
//   Typography,
// } from '@mui/material';
// import {
//   QueryClient,
//   QueryClientProvider,
//   useMutation,
//   useQuery,
//   useQueryClient,
// } from '@tanstack/react-query';
// import { fakeData, usStates } from './makeData';
// import DeleteIcon from '@mui/icons-material/Delete';


// let posts = [
//     {
//       id: "1",
//       title: "Software Engineer",
//       post: "Remote",
//       description: "Developing software applications for various platforms",
//       requirements: [
//         "Experience with JavaScript, HTML, CSS",
//         "Strong problem-solving skills",
//       ],
//       deadline: "2024-04-30",
//     },
//     {
//       id: "2",
//       title: "Marketing Manager",
//       post: "New York City",
//       description: "Creating and implementing marketing strategies",
//       requirements: [
//         "Bachelor's degree in Marketing or related field",
//         "Experience in digital marketing",
//       ],
//       deadline: "2024-05-05",
//     },
//     {
//       id: "3",
//       title: "Graphic Designer",
//       post: "Los Angeles",
//       description: "Designing visual content for print and digital media",
//       requirements: ["Bachelor's degree in Graphic Design or related field"],
//       deadline: "2024-04-25",
//     },
//     {
//       id: "4",
//       title: "Data Analyst",
//       post: "Chicago",
//       description:
//         "Analyzing data to provide insights and support decision-making",
//       requirements: [
//         "Bachelor's degree in Statistics, Mathematics, or related field",
//       ],
//       deadline: "2024-05-01",
//     },
//     {
//       id: "5",
//       title: "Customer Service Representative",
//       post: "Miami",
//       description: "Assisting customers with inquiries, concerns, and requests",
//       requirements: ["High school diploma or equivalent"],
//       deadline: "2024-04-28",
//     },
//     {
//       id: "6",
//       title: "Accountant",
//       post: "San Francisco",
//       description: "Managing financial records and preparing reports",
//       requirements: ["CPA certification preferred"],
//       deadline: "2024-05-10",
//     },
//     {
//       id: "7",
//       title: "Human Resources Manager",
//       post: "Washington, D.C.",
//       description: "Overseeing recruitment, training, and employee relations",
//       requirements: ["SHRM certification preferred"],
//       deadline: "2024-05-02",
//     },
//     {
//       id: "8",
//       title: "Sales Representative",
//       post: "Dallas",
//       description: "Generating leads and closing sales deals",
//       requirements: ["Proven sales experience"],
//       deadline: "2024-04-27",
//     },
//     {
//       id: "9",
//       title: "Web Developer",
//       post: "Seattle",
//       description: "Building and maintaining websites and web applications",
//       requirements: [
//         "Bachelor's degree in Computer Science or related field",
//         "Proficiency in HTML, CSS, JavaScript",
//       ],
//       deadline: "2024-05-03",
//     },
//     {
//       id: "10",
//       title: "Content Writer",
//       post: "Boston",
//       description:
//         "Creating engaging content for websites, blogs, and social media",
//       requirements: [
//         "Bachelor's degree in English, Journalism, or related field",
//         "Excellent writing and editing skills",
//         "Experience with SEO and content marketing",
//       ],
//       deadline: "2024-04-29",
//     },
//     // Add more job objects as needed
//   ];
// // const Example = () => {
// //     const [validationErrors, setValidationErrors] = useState({});
// //     const [posts, setPosts] = useState([posts]);
// //     const columns = useMemo(
// //       () => [{accessorKey: 'id',header: 'Id',enableEditing: false,size: 80,},
// //         {accessorKey: 'title', header: 'Title',muiEditTextFieldProps: ({ cell, row }) => ({
// //             type: 'text',required: true,error: !!validationErrors?.[cell.id],helperText: validationErrors?.[cell.id],
// //             onBlur: (event) => {const validationError = !validateRequired(event.currentTarget.value)
// //                 ? 'Required': undefined;setValidationErrors({...validationErrors,
// //                 [cell.id]: validationError,});setPosts({ ...posts, [row.id]: row.original });
// //             },}),},],[posts, validationErrors],);const { mutateAsync: createUser, isPending: isCreatingUser } =
// //     useCreateUser();const {data: fetchedUsers = [],
// //     isError: isLoadingUsersError,
// //     isFetching: isFetchingUsers,
// //     isLoading: isLoadingUsers,
// //   } = useGetUsers();
// //   const { mutateAsync: updateUsers, isPending: isUpdatingUsers } =
// //     useUpdateUsers();
// //   const { mutateAsync: deleteUser, isPending: isDeletingUser } =
// //     useDeleteUser();
// //   const handleCreateUser = async ({ values, table }) => {
// //     const newValidationErrors = validateUser(values);
// //     if (Object.values(newValidationErrors).some((error) => error)) {
// //       setValidationErrors(newValidationErrors);
// //       return;
// //     }
// //     setValidationErrors({});
// //     await createUser(values);
// //     table.setCreatingRow(null);
// //   };
// //   const handleSaveUsers = async () => {
// //     if (Object.values(validationErrors).some((error) => !!error)) return;
// //     await updateUsers(Object.values(editedUsers));
// //     setEditedUsers({});
// //   };
// //   const openDeleteConfirmModal = (row) => {
// //     if (window.confirm('Are you sure you want to delete this user?')) {
// //       deleteUser(row.original.id);
// //     }
// //   };
// //   const table = useMaterialReactTable({
// //     columns,
// //     data: posts,
// //     createDisplayMode: 'row', 
// //     editDisplayMode: 'cell',
// //     enableCellActions: true,
// //     enableClickToCopy: 'context-menu',
// //     enableColumnPinning: true,
// //     enableEditing: true,
// //     enableRowActions: true,
// //     getRowId: (row) => row.id,
// //     muiToolbarAlertBannerProps: isLoadingUsersError
// //       ? {
// //           color: 'error',
// //           children: 'Error loading data',
// //         }
// //       : undefined,
// //     muiTableContainerProps: {
// //       sx: {
// //         minHeight: '500px',
// //       },
// //     },
// //     onCreatingRowCancel: () => setValidationErrors({}),
// //     onCreatingRowSave: handleCreateUser,
// //     renderRowActions: ({ row }) => (
// //       <Box sx={{ display: 'flex', gap: '1rem' }}>
// //         <Tooltip title="Delete">
// //           <IconButton color="error" onClick={() => openDeleteConfirmModal(row)}>
// //             <DeleteIcon />
// //           </IconButton>
// //         </Tooltip>
// //       </Box>
// //     ),
// //     renderBottomToolbarCustomActions: () => (
// //       <Box sx={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
// //         <Button
// //           color="success"
// //           variant="contained"
// //           onClick={handleSaveUsers}
// //           disabled={
// //             Object.keys(editedUsers).length === 0 ||
// //             Object.values(validationErrors).some((error) => !!error)
// //           }
// //         >
// //           {isUpdatingUsers ? <CircularProgress size={25} /> : 'Save'}
// //         </Button>
// //         {Object.values(validationErrors).some((error) => !!error) && (
// //           <Typography color="error">Fix errors before submitting</Typography>
// //         )}
// //       </Box>
// //     ),
// //     renderTopToolbarCustomActions: ({ table }) => (
// //       <Button
// //         variant="contained"
// //         onClick={() => {
// //           table.setCreatingRow(true);
// //         }}
// //       >
// //         Create New User
// //       </Button>
// //     ),
// //     state: {
// //       isLoading: isLoadingUsers,
// //       isSaving: isCreatingUser || isUpdatingUsers || isDeletingUser,
// //       showAlertBanner: isLoadingUsersError,
// //       showProgressBars: isFetchingUsers,
// //     },
// //   });
// //   return <MaterialReactTable table={table} />;
// // };

// // //CREATE hook (post new user to api)
// // function useCreateUser() {
// //   const queryClient = useQueryClient();
// //   return useMutation({
// //     mutationFn: async (user) => {
// //       //send api update request here
// //       await new Promise((resolve) => setTimeout(resolve, 1000)); //fake api call
// //       return Promise.resolve();
// //     },
// //     //client side optimistic update
// //     onMutate: (newUserInfo) => {
// //       queryClient.setQueryData(['users'], (prevUsers) => [
// //         ...prevUsers,
// //         {
// //           ...newUserInfo,
// //           id: (Math.random() + 1).toString(36).substring(7),
// //         },
// //       ]);
// //     },
// //     // onSettled: () => queryClient.invalidateQueries({ queryKey: ['users'] }), //refetch users after mutation, disabled for demo
// //   });
// // }

// //READ hook (get users from api)
// function useGetUsers() {
//   return useQuery({
//     queryKey: ['users'],
//     queryFn: async () => {
//       //send api request here
//       await new Promise((resolve) => setTimeout(resolve, 1000)); //fake api call
//       return Promise.resolve(fakeData);
//     },
//     refetchOnWindowFocus: false,
//   });
// }

// //UPDATE hook (put user in api)
// function useUpdateUsers() {
//   const queryClient = useQueryClient();
//   return useMutation({
//     mutationFn: async (users) => {
//       //send api update request here
//       await new Promise((resolve) => setTimeout(resolve, 1000)); //fake api call
//       return Promise.resolve();
//     },
//     //client side optimistic update
//     onMutate: (newUsers) => {
//       queryClient.setQueryData(['users'], (prevUsers) =>
//         prevUsers?.map((user) => {
//           const newUser = newUsers.find((u) => u.id === user.id);
//           return newUser ? newUser : user;
//         }),
//       );
//     },
//     // onSettled: () => queryClient.invalidateQueries({ queryKey: ['users'] }), //refetch users after mutation, disabled for demo
//   });
// }

// //DELETE hook (delete user in api)
// function useDeleteUser() {
//   const queryClient = useQueryClient();
//   return useMutation({
//     mutationFn: async (userId) => {
//       //send api update request here
//       await new Promise((resolve) => setTimeout(resolve, 1000)); //fake api call
//       return Promise.resolve();
//     },
//     //client side optimistic update
//     onMutate: (userId) => {
//       queryClient.setQueryData(['users'], (prevUsers) =>
//         prevUsers?.filter((user) => user.id !== userId),
//       );
//     },
//     // onSettled: () => queryClient.invalidateQueries({ queryKey: ['users'] }), //refetch users after mutation, disabled for demo
//   });
// }

// const queryClient = new QueryClient();

// const ExampleWithProviders = () => (
//   //Put this with your other react-query providers near root of your app
//   <QueryClientProvider client={queryClient}>
//     <Example />
//   </QueryClientProvider>
// );

// export default ExampleWithProviders;

// const validateRequired = (value) => !!value.length;
// const validateEmail = (email) =>
//   !!email.length &&
//   email
//     .toLowerCase()
//     .match(
//       /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
//     );

// function validateUser(user) {
//   return {
//     firstName: !validateRequired(user.firstName)
//       ? 'First Name is Required'
//       : '',
//     lastName: !validateRequired(user.lastName) ? 'Last Name is Required' : '',
//     email: !validateEmail(user.email) ? 'Incorrect Email Format' : '',
//   };
// }
