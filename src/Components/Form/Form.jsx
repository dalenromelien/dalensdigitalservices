import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Container, Row, Col } from "react-bootstrap";
import { useSubscribeMutation } from "../../slices/mailChimpApiSlice";
import { toast } from "react-toastify";
import "./Form.css";

function MyForm() {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [siteType, setSiteType] = useState("");
  const [businessDescription, setBusinessDescription] = useState("");

  const [subscribe, { isLoading }] = useSubscribeMutation();

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  const handleSiteTypeChange = (event) => {
    setSiteType(event.target.value);
  };

  const handleBusinessDescriptionChange = (event) => {
    setBusinessDescription(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Perform form submission logic here
    console.log({
      email,
      firstName,
      lastName,
      siteType,
      businessDescription,
    });
    try {
      const response = await subscribe({
        email,
        firstName,
        lastName,
        siteType,
        bizDesc: businessDescription,
      });

      toast.success("Subscribed!");
      console.log(response);
    } catch (error) {
      toast.error(error?.data?.message || error.error);
      console.log(error);
    }
    // Reset form fields
    setEmail("");
    setFirstName("");
    setLastName("");
    setSiteType("");
    setBusinessDescription("");
  };

  return (
    <Container className="form">
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="email" className="form-group">
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={handleEmailChange}
          />
        </Form.Group>

        <Row>
          <Col>
            <Form.Group controlId="firstName" className="form-group">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="First name"
                value={firstName}
                onChange={handleFirstNameChange}
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="lastName" className="form-group">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Last name"
                value={lastName}
                onChange={handleLastNameChange}
              />
            </Form.Group>
          </Col>
        </Row>

        <Form.Group controlId="siteType" className="form-group">
          <Form.Label>What kind of site do you need?</Form.Label>
          <Form.Check
            type="radio"
            label="Portfolio"
            value="Portfolio"
            checked={siteType === "Portfolio"}
            onChange={handleSiteTypeChange}
            id="portfolio"
          />
          <Form.Check
            type="radio"
            label="E-Commerce"
            value="E-Commerce"
            checked={siteType === "E-Commerce"}
            onChange={handleSiteTypeChange}
            id="ecommerce"
          />
          <Form.Check
            type="radio"
            label="Landing Page"
            value="Landing"
            checked={siteType === "Landing"}
            onChange={handleSiteTypeChange}
            id="landing"
          />
          <Form.Check
            type="radio"
            label="Blog"
            value="Blog"
            checked={siteType === "Blog"}
            onChange={handleSiteTypeChange}
            id="blog"
          />
          <Form.Check
            type="radio"
            label="Other"
            value="Other"
            checked={siteType === "Other"}
            onChange={handleSiteTypeChange}
            id="other"
          />
        </Form.Group>

        <Form.Group controlId="businessDescription" className="form-group">
          <Form.Label>Describe your business</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Describe your business"
            value={businessDescription}
            onChange={handleBusinessDescriptionChange}
          />
        </Form.Group>

        <Button variant="primary" type="submit" className="submit-button">
          {isLoading ? "Loading" : "Submit"}
        </Button>
      </Form>
    </Container>
  );
}

export default MyForm;
