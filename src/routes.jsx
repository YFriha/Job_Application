import Calendar from "views/Calendar/Calendar";
import Chat from "views/Chat";
import Dashboard from "views/Dashboard.jsx";
import TableList from "views/Candidates/Tables.jsx";
import UserPage from "views/user/User.jsx";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
// import Post from "views/PostView";
import Example from "views/Posts/Post";
// import Kanban from "views/kanban";
var routes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "fas fa-university",
    component: <Dashboard />,
    layout: "/admin",
  },
  // {
  //   path: "/post",
  //   name: "POSTS",
  //   icon: "fas fa-file-alt",
  //   component: <Example />,
  //   layout: "/admin",
  // },
  {
    path: "/post/PostDetails/*",
    name: "POSTS",
    icon: "fas fa-file-alt",
    component: <Example />,
    layout: "/admin",
  },
  {
    path: "/tables",
    name: "Candidate List",
    icon: "fas fa-users",
    component: <TableList />,
    layout: "/admin",
  },
  {
    path: "/user-page",
    name: "User Profile",
    icon: "fas fa-user-alt",
    component: <UserPage />,
    layout: "/admin",
  },
  {
    path: "/Chat",
    name: "Chat",
    icon: "fas fa-comment",
    component: <Chat />,
    layout: "/admin",
  },
  {
    path: "/calendar",
    name: "Calendar",
    icon: "fas fa-calendar-alt",
    component: <Calendar />,
    layout: "/admin",
  },
  // {
  //   path: "/notifications",
  //   name: "Notifications",
  //   icon: "fas fa-bell",
  //   component: <Notifications />,
  //   layout: "/admin",
  // },
];

export default routes;
