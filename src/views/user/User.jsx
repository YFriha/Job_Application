import React from "react";
import { useState, useEffect } from "react";
// reactstrap components
import axios from "axios";
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  FormGroup,
  Form,
  Input,
  Row,
  Col,
} from "reactstrap";
const apiUrl = process.env.REACT_APP_API_URL;

function User() {
  const [recruiter, setRecruiter] = useState([]);
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [name, setName] = useState("");
  const [userName, setUserName] = useState("");
  async function loadRecruiter() {
    try {
      const response = await fetch(`${apiUrl}/recruiters/1/find/`);
      const json = await response.json();
      setRecruiter(json);
      console.log(json);
      setCompany(json.company);
      setEmail(json.email);
      setFirstName(json.first_name);
      setLastName(json.last_name);
      setAddress(json.address);
      setCity(json.city);
      setCountry(json.country);
      setPostalCode(json.postal_code);
      setName(`${json.first_name} ${json.last_name}`);
      setUserName(`${firstName}${lastName}`);
    } catch (error) {
      console.error("Error loading recruiter:", error);
    }
  }

  useEffect(() => {
    loadRecruiter();
  }, []);

  async function updateRecruiter(updatedData) {
    console.log("test 2", updatedData);
    try {
      const response = await axios.patch(
        `${apiUrl}recruiters/1/update/`,
        updatedData
      );
      if (response.status === 200) {
        // Handle a successful update (e.g., show a success message)
        console.log(`Post with ID has been updated.`);
        // Reload the post data if needed
        loadRecruiter();
      } else {
        // Handle errors (e.g., show an error message)
        console.error(`Error updating post with ID : ${response.statusText}`);
      }
    } catch (error) {
      // Handle any network errors or exceptions
      console.error(`Error updating post: ${error.message}`);
    }
  }
  function handleUpdateRecruiter() {
    console.log("test11");
    const updateData = {
      company: company,
      email: email,
      first_name: firstName,
      last_name: lastName,
      address : address,
      city : city,
      country : country,
      postal_code : postalCode
    };

    updateRecruiter(updateData);
  }
  return (
    <>
      <div className="content">
        <Row>
          <Col md="4">
            <Card className="card-user">
              <div className="image">
                <img alt="..." src={require("assets/img/damir-bosnjak.jpg")} />
              </div>
              <CardBody>
                <div className="author">
                  <a href="#pablo" onClick={(e) => e.preventDefault()}>
                    <img
                      alt="..."
                      className="avatar border-gray"
                      src={require("assets/img/yassir.jpg")}
                    />
                    <h5 className="title">{name}</h5>
                  </a>
                  <p className="description">@{userName}</p>
                </div>
              </CardBody>
              {/* <CardFooter>
                <hr />
                <div className="button-container">
                  <Row>
                    <Col className="ml-auto" lg="3" md="6" xs="6">
                      <h5>
                        12 <br />
                        <small>Files</small>
                      </h5>
                    </Col>
                    <Col className="ml-auto mr-auto" lg="4" md="6" xs="6">
                      <h5>
                        2GB <br />
                        <small>Used</small>
                      </h5>
                    </Col>
                    <Col className="mr-auto" lg="3">
                      <h5>
                        24,6$ <br />
                        <small>Spent</small>
                      </h5>
                    </Col>
                  </Row>
                </div>
              </CardFooter> */}
            </Card>
          </Col>
          <Col md="8">
            <Card className="card-user">
              <CardHeader>
                <CardTitle tag="h5">Edit Profile</CardTitle>
              </CardHeader>
              <CardBody>
                <Form>
                  <Row>
                    <Col className="pr-1" md="6">
                      <FormGroup>
                        <label>Company</label>
                        <Input
                          // defaultValue={company}
                          // disabled
                          value={company}
                          onChange={(event) => {
                            setCompany(event.target.value);
                          }}
                          placeholder="Company"
                          type="text"
                        />
                      </FormGroup>
                    </Col>

                    <Col className="pl-1" md="6">
                      <FormGroup>
                        <label htmlFor="exampleInputEmail1">
                          Email address
                        </label>
                        <Input
                          placeholder="Email"
                          type="email"
                          Value={email}
                          onChange={(event) => {
                            setEmail(event.target.value);
                          }}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-1" md="6">
                      <FormGroup>
                        <label>First Name</label>
                        <Input
                          Value={firstName}
                          onChange={(event) => {
                            setFirstName(event.target.value);
                          }}
                          placeholder="First Name "
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                    <Col className="pl-1" md="6">
                      <FormGroup>
                        <label>Last Name</label>
                        <Input
                          Value={lastName}
                          onChange={(event) => {
                            setLastName(event.target.value);
                          }}
                          placeholder="Last Name"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="12">
                      <FormGroup>
                        <label>Address</label>
                        <Input
                          Value={address}
                          onChange={(event) => {
                            setAddress(event.target.value);
                          }}
                          placeholder="Home Address"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-1" md="4">
                      <FormGroup>
                        <label>City</label>
                        <Input
                          Value={city}
                          onChange={(event) => {
                            setCity(event.target.value);
                          }}
                          placeholder="City"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                    <Col className="px-1" md="4">
                      <FormGroup>
                        <label>Country</label>
                        <Input
                          Value={country}
                          onChange={(event) => {
                            setCountry(event.target.value);
                          }}
                          placeholder="Country"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                    <Col className="pl-1" md="4">
                      <FormGroup>
                        <label>Postal Code</label>
                        <Input
                          Value={postalCode}
                          onChange={(event) => {
                            setPostalCode(event.target.value);
                          }}
                          placeholder="ZIP Code"
                          type="number"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row></Row>
                  <Row>
                    <div className="update ml-auto mr-auto">
                      <Button
                        onClick={handleUpdateRecruiter}
                        className="btn-round"
                        color="primary"
                        // type="submit"
                      >
                        Update Profile
                      </Button>
                    </div>
                  </Row>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default User;
