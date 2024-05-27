import React, { useEffect, useState } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import SearchBar from "./SearchBar";
import MyCard from "./Card";
import "./home.css";
import MyCardDetails from "./CardDetails";
import pulseLogo from 'assets/img/PULSE-digital-logo.png'; // Adjust the path according to your project structure
import DevOpsLoop from 'assets/img/DevOpsLoop.png'; // Adjust the path according to your project structure

function Home() {
  const apiUrl = process.env.REACT_APP_API_URL;

  const [allJobs, setAllJobs] = useState([]);
  const [selectedJob, setSelectedJob] = useState(null);

  const Load = async () => {
    const response = await fetch(`${apiUrl}/posts/list/`);
    const json = await response.json();
    console.log(json);
    setAllJobs(json);
    return json;
  };

  useEffect(() => {
    Load();
    console.log(allJobs);
  }, []);

  const handleCardClick = (job) => {
    setSelectedJob(job);
  };

  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark"  >
        <Container >
          <Navbar.Brand href="#home">
            {" "}
            <img src={require("assets/img/lo.png")} alt="Logo" />
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#">Home</Nav.Link>
            <Nav.Link href="#">Saved Posts</Nav.Link>
            <Nav.Link href="#">Apllied Posts</Nav.Link>  
            <Nav.Link href="#">About us</Nav.Link>
            <Nav.Link href="#">Contact us</Nav.Link>
            <Nav.Link href="/login">Sign in</Nav.Link>
            <Nav className="ms-auto">
              <Nav.Link href="/login">your name</Nav.Link>
            </Nav>

          </Nav>
        </Container>
      </Navbar>
      <SearchBar  />
      <div className="row home">
        <div className="col-5 myCard">
          <div className="mycard-scroll">
            {allJobs.map((job, index) => (
              <div key={index} onClick={() => handleCardClick(job)}>
                <MyCard
                  title={job.title}
                  deadline={job.deadline}
                  description={job.description}
                  image={job.image}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="col-5">
          <div className="mycard-scrolll">
            {selectedJob ? (
              <MyCardDetails
                title={selectedJob.title}
                description={selectedJob.description}
                requirements={selectedJob.requirements}
                localisation={selectedJob.localisation}
                mode={selectedJob.mode}
                deadline={selectedJob.deadline}
                image={selectedJob.image}
              />
              
            ) : (
              <MyCardDetails
                title="{selectedJob.title}"
                description="{selectedJob.description}"
                requirements="{selectedJob.requirements}"
                localisation="{selectedJob.localisation}"
                mode="{selectedJob.mode}"
                deadline="{selectedJob.deadline}"
                image={DevOpsLoop}
              />
            )}
           
            
          </div>

         
          
        </div>
      </div>
    </>
  );
}

export default Home;
