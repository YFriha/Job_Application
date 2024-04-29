import React, { useEffect } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import SearchBar from "./SearchBar";
import MyCard from "./Card";
import "./home.css";
import { useState } from "react";
import MyCardDetails from "./CardDetails"
function Home() {
  const apiUrl = process.env.REACT_APP_API_URL;

  const [allJobs, setAllJobs] = useState([]);
  const Load = async () => {
    const response = await fetch(`${apiUrl}/candidates/all_jobs/`);
    const json = await response.json();
    console.log(json);
    setAllJobs(json);
    return json;
  };
  useEffect(() => {
    Load();
    console.log(allJobs);
  }, []);

  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">
            {" "}
            <img src={require("assets/img/lo.png")} alt="Logo" />
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">About us</Nav.Link>
            {/* <Nav.Link href="#pricing">Pricing</Nav.Link>  */}
          </Nav>
        </Container>
      </Navbar>
      <SearchBar />
      <div className="row home">
        <div className="col-8 myCard">
          <div className="mycard-scroll">
            {allJobs.map((job, index) => (
              <MyCard
                title={job.title}
                subtitle={job.deadline}
                text={job.description}
                image={job.image}
              />
            ))}

            {/* <MyCard
              title={"Dev front-end"}
              subtitle={"React developpement"}
              text={
                "=ction : Informatique - Développement"
              }
            /> */}
          </div>
        </div>
        <div className="col-4">
          <div className="mycard-scrolll">
            <MyCardDetails
              title={"Dev front-end2"}
              subtitle={"React developpement"}
              text={
                "Minimum 1 an d expérience en développement webCompétence avérée en VueJS ou React Rejoignez-nous pour contribuer à des projets excitants. Postulez dès maintenant et faites partie de l'équipe GoViral Domaine : Informatique / Multimédia / Internet Fonction : Informatique - Développement"
              }
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
