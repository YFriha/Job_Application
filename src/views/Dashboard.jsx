import React from "react";

import { Line, Pie } from "react-chartjs-2";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BiWindowOpen, BiTask, BiVideo, BiSolidMessageAltDetail } from "react-icons/bi";
import { IconContext } from 'react-icons';
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  Row,
  Col,
} from "reactstrap";
// import { Bar } from './Bar'; // If Bar is a named export from './Bar.js'
import { Bar } from 'react-chartjs-2';

// core components
import {
  dashboard24HoursPerformanceChart,
  dashboardEmailStatisticsChart,
  applytrate,
} from "variables/charts.js";

function Dashboard() {
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'My First dataset',
        backgroundColor: 'rgba(255,99,132,0.2)',
        borderColor: 'rgba(255,99,132,1)',
        borderWidth: 1,
        // stack: 3,
        hoverBackgroundColor: 'rgba(255,99,132,0.4)',
        hoverBorderColor: 'rgba(255,99,132,1)',
        data: [65, 59, 80, 81, 56, 55, 40]
      },
      {
        label: 'My second dataset',
        backgroundColor: 'rgba(155,231,91,0.2)',
        borderColor: 'rgba(255,99,132,1)',
        borderWidth: 1,
        // stack: 1,
        hoverBackgroundColor: 'rgba(255,99,132,0.4)',
        hoverBorderColor: 'rgba(255,99,132,1)',
        data: [45, 79, 10, 41, 16, 85, 20]
      
      },
      {
        label: 'My second dataset',
        backgroundColor: 'rgba(155,231,91,0.2)',
        borderColor: 'rgba(255,99,132,1)',
        borderWidth: 1,
        // stack: 1,
        hoverBackgroundColor: 'rgba(255,99,132,0.4)',
        hoverBorderColor: 'rgba(255,99,132,1)',
        data: [45, 79, 10, 41, 16, 85, 20]
      }
    ]
  };
  const options={
    responsive: true,
    legend: {
        display: false,
    },
    type:'bar',
    // scales: {
    //     xAxes: [{
    //         stacked: true
    //     }],
    //     yAxes: [{
    //         stacked: true
    //     }]
    // }
}
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
                        value={{ color: 'FF9800', size: '50px' }}
                      >
                      <i className="c" >
                      <BiWindowOpen />
                      </i>
                      </IconContext.Provider>
                      {/* <i className="bi bi-calendar-date"/> */}
                    </div>
                  </Col>
                  <Col md="8" xs="7">
                    <div className="numbers">
                      <p className="card-category">Posts</p>
                      <CardTitle tag="p">14</CardTitle>
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
                        value={{ color: '219C90', size: '50px' }}
                      >
                    <BiTask />
                    </IconContext.Provider>
                    </div>
                  </Col>
                  <Col md="8" xs="7">
                    <div className="numbers">
                      <p className="card-category">Applicant</p>
                      <CardTitle tag="p">34</CardTitle>
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
                        value={{ color: 'FF6868', size: '50px' }}
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
                        value={{ color: '50C4ED', size: '50px' }}
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
              </CardHeader>
              <CardBody>
                <Line
                  data={applytrate.data}
                  options={applytrate.options}
                  width={400}
                  height={100}
                />
              </CardBody>
              <CardFooter>
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
              </CardFooter>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Dashboard;
