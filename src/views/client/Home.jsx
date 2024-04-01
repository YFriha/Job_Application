import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import SearchBar from "./SearchBar";
import MyCard from "./Card";


function Home() {
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
      <MyCard title={'Dev front-end'} subtitle={'React developpement'} text={"Minimum 1 an d expérience en développement webCompétence avérée en VueJS ou React Rejoignez-nous pour contribuer à des projets excitants. Postulez dès maintenant et faites partie de l'équipe GoViral Domaine : Informatique / Multimédia / Internet Fonction : Informatique - Développement"}/>
    </>
  );
}

export default Home;
