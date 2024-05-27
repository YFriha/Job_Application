import React, { useEffect, useState } from "react";
import { Line, Pie, Bar } from "react-chartjs-2";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  BiWindowOpen,
  BiTask,
  BiVideo,
  BiSolidMessageAltDetail,
} from "react-icons/bi";
import { IconContext } from "react-icons";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  Row,
  Col,
} from "reactstrap";
import { Chart } from "primereact/chart";

// core components
import {
  dashboard24HoursPerformanceChart,
  dashboardEmailStatisticsChart,
} from "variables/charts.js";

import { Button } from "primereact/button";
import { useNavigate } from "react-router-dom";

import { connect } from "react-redux"; // Import connect from react-redux
import { setUserId } from "../Redux/actions"; // Import your action
function Dashboard() {

  const currentDate = new Date();
  const lastFiveMonthsLabels = [];
  for (let i = 6; i >= 0; i--) {
    const date = new Date(currentDate);
    date.setMonth(date.getMonth() - i);
    const monthName = date.toLocaleDateString("en-US", { month: "long" });
    lastFiveMonthsLabels.push(monthName);
  }
  console.log(lastFiveMonthsLabels);
  const apiUrl = process.env.REACT_APP_API_URL;
  const [posts, setPosts] = useState(0);
  const [applicants, setApplicants] = useState(0);
  const [genderData, setGenderData] = useState([]);
  const [dataLine, setDataLine] = useState({
    labels: lastFiveMonthsLabels,
    datasets: [
      {
        label: "Male",
        data: [],
        fill: false,
        borderColor: "rgb(75, 192, 192)",
        tension: 0.1,
        pointRadius: 5,
        pointBackgroundColor: "rgb(75, 192, 192)",
      },
      {
        label: "Female",
        data: [],
        fill: false,
        borderColor: "rgb(175, 152, 185)",
        tension: 0.1,
        pointRadius: 5,
        pointBackgroundColor: "rgb(175, 152, 185)",
      },
    ],
  });

  const [postsData, setPostsData] = useState([]);

  useEffect(() => {
    const storedAccessToken = localStorage.getItem("accessToken");
    if (!storedAccessToken ||storedAccessToken==='undefined' ) {
      redirectToLogin()
    }
  }, []);

  const redirectToLogin = () => {
        navigate("/login");
      };
  useEffect(() => {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue("--text-color");
    const textColorSecondary = documentStyle.getPropertyValue(
      "--text-color-secondary"
    );
    const surfaceBorder = documentStyle.getPropertyValue("--surface-border");
    const data = {
      labels: lastFiveMonthsLabels,
      datasets: [
        {
          label: "My First dataset",
          backgroundColor: documentStyle.getPropertyValue("--blue-500"),
          borderColor: documentStyle.getPropertyValue("--blue-500"),
          data: [65, 59, 80, 81, 56, 55, 40],
        },
        {
          label: "My Second dataset",
          backgroundColor: documentStyle.getPropertyValue("--pink-500"),
          borderColor: documentStyle.getPropertyValue("--pink-500"),
          data: [28, 48, 40, 19, 86, 27, 90],
        },
      ],
    };
    const options = {
      maintainAspectRatio: false,
      aspectRatio: 0.8,
      plugins: {
        legend: {
          labels: {
            fontColor: textColor,
          },
        },
      },
      scales: {
        x: {
          ticks: {
            color: textColorSecondary,
            font: {
              weight: 500,
            },
          },
          grid: {
            display: false,
            drawBorder: false,
          },
        },
        y: {
          ticks: {
            color: textColorSecondary,
          },
          grid: {
            color: surfaceBorder,
            drawBorder: false,
          },
        },
      },
    };

  }, []);

  const transformData = (data) => {
    const transformedData = [];
    for (const month in data) {
      const monthData = data[month];
      let maleCount = 0;
      let femaleCount = 0;
      for (const postId in monthData) {
        const post = monthData[postId];
        maleCount += post["male"] || 0;
        femaleCount += post["female"] || 0;
      }
      transformedData.push({ month, male: maleCount, female: femaleCount });
    }
    return transformedData;
  };

  const transformedGenderData = transformData(genderData);
  console.log("Data transformed ", transformedGenderData);
  const navigate = useNavigate();
  useEffect(() => {
    (async () => {
      await LoadApplications();
      await LoadGenderChart();
      await LoadPostsChart();
    })();
  }, []);
  const LoadApplications = async () => {
    const response = await fetch(
      `${apiUrl}recruiters/${userId}/total_application_and_post/`,
      {
        headers: {
          "Content-type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("accessToken"), 
        },
      }
    );
    console.log("response : ", response);
    if (response.status === 401) {
      console.log("Unauthorized. Redirecting to login page...");
      navigate("/login");
      // Stop execution of the function after redirecting
      return; // or throw new Error('Unauthorized'); depending on your requirement
    }
    const json = await response.json();
    setPosts(json.total_posts);
    setApplicants(json.total_applications);
    console.log("posts : ", json);
    return json;
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
    console.log('payload : ', jsonPayload)

    return JSON.parse(jsonPayload);
  }
  const LoadGenderChart = async () => {
    try {
      const response = await fetch(
        `${apiUrl}recruiters/${userId}/candidates_by_gender_per_recruiter/`,
        {
          headers: {
            "Content-type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("accessToken"), // Add a space after 'Bearer'
          },
        }
      );
      console.log("response : ", response);
      if (response.status === 401) {
        console.log("Unauthorized. Redirecting to login page...");
        navigate("/login");
        // Stop execution of the function after redirecting
        return; // or throw new Error('Unauthorized'); depending on your requirement
      }
      const json = await response.json();
      console.log("gender data:", json);
      setGenderData(json);
      const updatedDataLine = {
        ...dataLine,
        datasets: [
          {
            ...dataLine.datasets[0],
            data: transformedGenderData.map(
              (monthData) => monthData["male"] || 0
            ),
          },
          {
            ...dataLine.datasets[1],
            data: transformedGenderData.map(
              (monthData) => monthData["female"] || 0
            ),
          },
        ],
      };
      setDataLine(updatedDataLine);
      return json;
    } catch (error) {
      console.error("Error fetching gender data:", error);
    }
  };

  const userId = getUserIdFromAccessToken();
  const LoadPostsChart = async () => {
    try {
      const response = await fetch(
        `${apiUrl}recruiters/${userId}/candidates_applied_to_RHposts/`,
        {
          headers: {
            "Content-type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("accessToken"), // Add a space after 'Bearer'
          },
        }
      );
      console.log("response --->>: ", userId);
      if (response.status === 401) {
        console.log("Unauthorized. Redirecting to login page...");
        navigate("/login");
        // Stop execution of the function after redirecting
        return; // or throw new Error('Unauthorized'); depending on your requirement
      };
      const json = await response.json();
      console.log("candidates_applied_to_RHposts :", json);
      setPostsData(json);
      return json;
    } catch (error) {
      console.error("Error fetching gender data:", error);
    }
  };

  // const dataLine = {
  //   labels: ["January", "February", "March", "April", "May", "June", "July"],
  //   datasets: [
  //     {
  //       label: "Male",
  //       data: [],
  //       fill: false,
  //       borderColor: "rgb(75, 192, 192)",
  //       tension: 0.1,
  //       pointRadius: 5, // Adjust point size here
  //       pointBackgroundColor: "rgb(75, 192, 192)", // Adjust point color here
  //     },
  //     {
  //       label: "Feale",
  //       data: [],
  //       fill: false,
  //       borderColor: "rgb(175, 152, 185)",
  //       tension: 0.1,
  //       pointRadius: 5, // Adjust point size here
  //       pointBackgroundColor: "rgb(75, 192, 192)", // Adjust point color here
  //     },
  //   ],
  // };

  const data = {
    labels: lastFiveMonthsLabels,
    datasets: [
      {
        label: "My First dataset",
        backgroundColor: "rgba(255,99,132,0.2)",
        borderColor: "rgba(255,99,132,1)",
        borderWidth: 1,
        // stack: 3,
        hoverBackgroundColor: "rgba(255,99,132,0.4)",
        hoverBorderColor: "rgba(255,99,132,1)",
        data: [65, 59, 80, 81, 56, 55, 40],
      },
      {
        label: "My second dataset",
        backgroundColor: "rgba(155,231,91,0.2)",
        borderColor: "rgba(255,99,132,1)",
        borderWidth: 1,
        // stack: 1,
        hoverBackgroundColor: "rgba(255,99,132,0.4)",
        hoverBorderColor: "rgba(255,99,132,1)",
        data: [45, 79, 10, 41, 16, 85, 20],
      },
      {
        label: "My second dataset",
        backgroundColor: "rgba(155,231,91,0.2)",
        borderColor: "rgba(255,99,132,1)",
        borderWidth: 1,
        // stack: 1,
        hoverBackgroundColor: "rgba(255,99,132,0.4)",
        hoverBorderColor: "rgba(255,99,132,1)",
        data: [45, 79, 10, 41, 16, 85, 20],
      },
    ],
  };
  const options = {
    responsive: true,
    legend: {
      display: false,
    },
    type: "bar",
  };

  const transformData2 = (data) => {
    const transformedData = [];
    for (const month in data) {
      console.log("this is the month : ", month);
      const monthData = data[month];
      console.log("this is the monthData : ", monthData);

      for (const postId in monthData) {
        console.log("this is the postId ", postId);
        const post = monthData[postId];
        console.log("this is the post ", post);
        const postIndex = transformedData.findIndex(
          (item) => item.id === postId
        );
        console.log("this is the postIndex ", postIndex);
        if (postIndex !== -1) {
          // If the post already exists in transformedData, update its count for the current month
          transformedData[postIndex][month] = post["total_candidates"] || 0;
        } else {
          // If the post doesn't exist in transformedData, create a new entry
          const newPost = {
            id: postId,
            [month]: post["total_candidates"] || 0,
          };
          transformedData.push(newPost);
        }
      }
    }
    return transformedData;
  };

  const transformedPostsData = transformData2(postsData);
  console.log("transformedPostsData : ", transformedPostsData);

  const chartData2 = {
    labels: lastFiveMonthsLabels,
    datasets: transformedPostsData.map((post) => ({
      label: `Post ${post.id}`,
      data: Object.values(post).slice(1), // Exclude the id property
      // backgroundColor: randomColor(), // You can use a function to generate random colors
      borderWidth: 1,
    })),
  };
  const chartOptions2 = {
    // scales: {
    //   x: {
    //     stacked: true, // Stack bars horizontally
    //   },
    //   y: {
    //     stacked: true, // Stack bars vertically
    //   },
    // },
    // plugins: {
    //   legend: {
    //     display: true, // Display legend
    //     position: 'top', // Position legend on top
    //   },
    //   title: {
    //     display: true,
    //     text: 'Candidates Applied to Posts by Month', // Chart title
    //     font: {
    //       size: 5,
    //     },
    //   },
    // },
    maintainAspectRatio: true, // Allow chart to resize
    labels: lastFiveMonthsLabels,
  };

  useEffect(() => {
    LoadPostsChart().then(transformData2);
  }, []);

  return (
    <>
      <div className="content">
        <Row>
          <Col lg="3" md="6" sm="6">
            <Card className="card-stats">
              <CardBody>
                <Row>
                  <Col md="4" xs="5">
                    <div className="icon-big text-center icon-warning">
                      <IconContext.Provider
                        value={{ color: "FF9800", size: "50px" }}
                      >
                        <i className="c">
                          <BiWindowOpen />
                        </i>
                      </IconContext.Provider>
                      {/* <i className="bi bi-calendar-date"/> */}
                    </div>
                  </Col>
                  <Col md="8" xs="7">
                    <div className="numbers">
                      <p className="card-category">Posts</p>
                      <CardTitle tag="p">{posts}</CardTitle>
                      {/* <i className="bi bi-calendar-date" /> */}
                      {/* <i className="bi bi-calendar-date-fill"/> */}
                      <p />
                    </div>
                  </Col>
                </Row>
              </CardBody>
              <CardFooter>
                <hr />
                {/* <div className="stats">
                  <i className="fas fa-sync-alt" /> Update Now
                </div> */}
              </CardFooter>
            </Card>
          </Col>
          <Col lg="3" md="6" sm="6">
            <Card className="card-stats">
              <CardBody>
                <Row>
                  <Col md="4" xs="5">
                    <div className="icon-big text-center icon-warning">
                      <IconContext.Provider
                        value={{ color: "219C90", size: "50px" }}
                      >
                        <BiTask />
                      </IconContext.Provider>
                    </div>
                  </Col>
                  <Col md="8" xs="7">
                    <div className="numbers">
                      <p className="card-category">Applicant</p>
                      <CardTitle tag="p">{applicants}</CardTitle>
                      <p />
                    </div>
                  </Col>
                </Row>
              </CardBody>
              <CardFooter>
                <hr />
                {/* <div className="stats">
                  <i className="far fa-calendar" /> Last day
                </div> */}
              </CardFooter>
            </Card>
          </Col>
          <Col lg="3" md="6" sm="6">
            <Card className="card-stats">
              <CardBody>
                <Row>
                  <Col md="4" xs="5">
                    <div className="icon-big text-center icon-warning">
                      <IconContext.Provider
                        value={{ color: "FF6868", size: "50px" }}
                      >
                        <BiVideo />
                      </IconContext.Provider>
                    </div>
                  </Col>
                  <Col md="8" xs="7">
                    <div className="numbers">
                      <p className="card-category">Interview</p>
                      <CardTitle tag="p">10</CardTitle>
                      <p />
                    </div>
                  </Col>
                </Row>
              </CardBody>
              <CardFooter>
                <hr />
              </CardFooter>
            </Card>
          </Col>
          <Col lg="3" md="6" sm="6">
            <Card className="card-stats">
              <CardBody>
                <Row>
                  <Col md="4" xs="5">
                    <div className="icon-big text-center icon-warning">
                      <IconContext.Provider
                        value={{ color: "50C4ED", size: "50px" }}
                      >
                        <BiSolidMessageAltDetail />
                      </IconContext.Provider>
                    </div>
                  </Col>
                  <Col md="8" xs="7">
                    <div className="numbers">
                      <p className="card-category">Messages</p>
                      <CardTitle tag="p">5</CardTitle>
                      <p />
                    </div>
                  </Col>
                </Row>
              </CardBody>
              <CardFooter>
                <hr />
              </CardFooter>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col md="12">
            <Card>
              <CardHeader>
                <CardTitle tag="h5">Application's candidates</CardTitle>
                <p className="card-category">24 Hours performance</p>
              </CardHeader>
              <CardBody>
                <Line
                  data={dashboard24HoursPerformanceChart.data}
                  options={dashboard24HoursPerformanceChart.options}
                  width={400}
                  height={100}
                />
              </CardBody>
              <CardFooter>
                <hr />
                <div className="stats">
                  <i className="fa fa-history" /> Updated 3 minutes ago
                </div>
              </CardFooter>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col md="4">
            <Card>
              <CardHeader>
                <CardTitle tag="h5">Email Statistics</CardTitle>
                <p className="card-category">Last Campaign Performance</p>
              </CardHeader>
              <CardBody style={{ height: "266px" }}>
                <Pie
                  data={dashboardEmailStatisticsChart.data}
                  options={dashboardEmailStatisticsChart.options}
                />
              </CardBody>
              <CardFooter>
                <div className="legend">
                  <i className="fa fa-circle text-primary" /> Opened{" "}
                  <i className="fa fa-circle text-warning" /> Read{" "}
                  <i className="fa fa-circle text-danger" /> Deleted{" "}
                  <i className="fa fa-circle text-gray" /> Unopened
                </div>
                <hr />
                <div className="stats">
                  <i className="fa fa-calendar" /> Number of emails sent
                </div>
              </CardFooter>
            </Card>
          </Col>
          <Col md="8">
            <Card className="card-chart">
              <CardHeader>
                <CardTitle tag="h5">Application Rate(MA/FE)</CardTitle>
                <p className="card-category">Line Chart with Points</p>
                <Button
                  variant="contained"
                  onClick={LoadGenderChart}
                  sx={{
                    bgcolor: "#9cd6d1",
                  }}
                >
                  Refresh
                </Button>
              </CardHeader>
              <CardBody>
                <Line
                  data={dataLine}
                  options={options}
                  width={400}
                  height={100}
                />
              </CardBody>

              {/* <CardFooter>
                <div className="chart-legend">
                  <i className="fa fa-circle text-info" /> MALE{" "}
                  <i className="fa fa-circle text-warning" /> FEMALE
                </div>
                <hr /><Bar
                data={data}
                width={null}
                height={null}
                options={options}
            />
              </CardFooter> */}
              {/* <h1>Line Chart with Points</h1>
                <LineChartWithPoints data={dataLine} />
               */}
            </Card>
          </Col>
        </Row>
        <Row>
          <Col md="12">
            <Card>
              <CardHeader>
                <Button
                  variant="contained"
                  onClick={LoadPostsChart}
                  sx={{
                    bgcolor: "#9cd6d1",
                  }}
                >
                  Refresh
                </Button>
                <CardTitle tag="h5">Application's candidates</CardTitle>
                <p className="card-category">24 Hours performance</p>
              </CardHeader>
              <CardBody>
                <Chart type="bar" data={chartData2} options={chartOptions2} />
              </CardBody>
              <CardFooter></CardFooter>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

const mapStateToProps = (state) => ({
  userId: state.userId,
});

const mapDispatchToProps = {
  setUserId,
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
