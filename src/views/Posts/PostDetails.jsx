import { useParams } from "react-router-dom";
import { Box, Paper, Typography } from "@mui/material";
import { Description } from "@mui/icons-material";
import Sidebar from "components/Sidebar/Sidebar";
import routes from "routes";
import React, { useState } from "react";
import PerfectScrollbar from "perfect-scrollbar";
import ToggleSwitch from "components/ToggleSwitch/ToggleSwitch";
import { ControlledBoard } from "../Candidates/board";
import DataTable from "../Candidates/DataTable";


const candidates = [
  {
    id: 1,
    first_name: "Yassir",
    last_name: "Friha",
    email: "yassir.friha@example.com",
    phone: "(424) 8787997",
    image: "https://picsum.photos/400",
    step: "Phone Screening",
    city: "Los Angeles",
    address: "2 Vermont Junction",
  },
  {
    id: 2,
    first_name: "Oussama",
    last_name: "Akaabour",
    email: "Ou.akaabour@example.com",
    phone: "(424) 8787997",
    image: "https://picsum.photos/400",
    step: "Phone Screening",
    city: "Los Angeles",
    address: "2 Vermont Junction",
  },
  {
    id: 3,
    first_name: "younes",
    last_name: "Ouajil",
    email: "ouajil.younes@example.com",
    phone: "(424) 8787997",
    image: "https://picsum.photos/400",
    step: "Phone Screening",
    city: "Los Angeles",
    address: "2 Vermont Junction",
  },]

export default function PostDetails() {
  const [data, setData] = useState([]);

  const { postid,imageSrc, title, description, requirement, deadline } =
    useParams();
  const [isSwitchChecked, setIsSwitchChecked] = useState(false);

  const mainPanel = React.useRef();
  var ps;
  const handleSwitchChange = (isChecked) => {
    setIsSwitchChecked(isChecked);
  };

  React.useEffect(() => {
    if (navigator.platform.indexOf("Win") > -1) {
      ps = new PerfectScrollbar(mainPanel.current);
      document.body.classList.toggle("perfect-scrollbar-on");
    }Load();
    return function cleanup() {
      if (navigator.platform.indexOf("Win") > -1) {
        ps.destroy();
        document.body.classList.toggle("perfect-scrollbar-on");
      }
    };
  
  },[]);

  // const [filter, setFilter] = useState("");
  // const [filtredCand, setFiltredCand] = useState([]);
  // const filteredCards = filteredCand.filter((cand) => {
  //   const candid = cand.title.toLowerCase();
  //   const filterLower = filter.toLowerCase();

  //   return job.startsWith(filterLower);
  // });
  // console.log(filteredCards);

  async function Load() {
    console.log("postId : ",postid);
    const response = await fetch(`http://127.0.0.1:8000/posts/${postid}/findCandidate/`);
    const json = await response.json();
    setData(json);
    // setFiltredCand(json)
    console.log('those are our objects : ',json) 
    return json;
  }
  const [backgroundColor, setBackgroundColor] = useState("black");
  const [activeColor, setActiveColor] = useState("info");

  return (
    <>
      <Sidebar
        routes={routes}
        bgColor={backgroundColor}
        activeColor={activeColor}
      />
      <div className="main-panel" ref={mainPanel}>
        <div className="content">
          <div className="container bootstrap snippets bootdey">
            <div className="panel-body inf-content"></div>
            <Typography
              align="center"
              paddingBottom="30px"
              sx={{ fontSize: 30, color: "#9cd6d1" }}
              variant="body1"
            >
              {title}
            </Typography>

            <div
              className="row shadow-lg p-3 mb-5 rounded float-sm-left"
              style={{
                border: " #cecece",
                backgroundColor: "#ffffff",
              }}
            >
              <div
                style={{
                  marginRight: "60px",
                }}
                className="col-md-4"
              >
                <img
                  alt=""
                  style={{ width: "600px" }}
                  className="img-circle img-thumbnail isTooltip"
                  src={imageSrc}
                  data-original-title="Usuario"
                />
              </div>
              <div className="col-md-6">
                <div className="table-responsive">
                  <table className="table table-user-information">
                    <tbody>
                      <tr>
                        <td
                          style={{
                            backgroundColor: "#ffffff",
                            color: "black",
                          }}
                        >
                          <p>Description</p>
                        </td>
                        <td
                          style={{
                            color: "#9f9f9f",
                          }}
                        >
                          {description}
                        </td>
                      </tr>
                      <tr>
                        <td
                          style={{
                            backgroundColor: "#ffffff",
                            color: "black",
                          }}
                        >
                          <p>Requirement</p>
                        </td>
                        <td
                          style={{
                            backgroundColor: "#ffffff",
                            color: "#9f9f9f",
                          }}
                        >
                          {requirement}
                        </td>
                      </tr>
                      <tr>
                        <td
                          style={{
                            backgroundColor: "#ffffff",
                            color: "black",
                          }}
                        >
                          <p>Deadline</p>
                        </td>
                        <td
                          style={{
                            backgroundColor: "#ffffff",
                            color: "#9f9f9f",
                          }}
                        >
                          {deadline}
                        </td>
                      </tr>
                      {/* <tr>
                        <td
                          style={{
                            backgroundColor: "#ffffff",
                            color: "black",
                          }}
                        >
                          <p>Company</p>
                        </td>
                        <td
                          style={{
                            backgroundColor: "#ffffff",
                            color: "#9f9f9f",
                          }}
                        >
                          {company}
                        </td>
                      </tr> */}
                    </tbody>
                  </table>
                </div>
                
              </div>
            </div>
            {/* <h1>card detals</h1> */}
            <div className="content">
      <div className="sticky-lg-top">
        <ToggleSwitch onChange={handleSwitchChange} checked={isSwitchChecked} />
      </div>
      {isSwitchChecked ? (
        <ControlledBoard candidates={data} />
      ) : (
        <DataTable candidates={data} />
      )}
    </div>
          </div>
        </div>
      </div>
      
    </>
  );
}
