import React from 'react'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom';

function BookShow() {
  const { movieName } = useParams();
  const [formData, setFormData] = useState({
    email: '',
    moviename: '',
    name: '',
    address1: '',
    address2: '',
    city: '',
    state: '',
    zip: '',
  });
  let navigate = useNavigate()
  useEffect(() => {
    if (movieName) {
      setFormData((prevData) => ({
        ...prevData,
        moviename: movieName,
      }));
    }
  }, [movieName]);

  const handleSubmit = (e) => {
    e.preventDefault();
    sessionStorage.setItem('formData', JSON.stringify(formData));
    alert(" Booking confirm Thank you ")
    navigate('./ShowList')
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  return (
    <div>
      <Form method="post" onSubmit={handleSubmit}>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Movie Name</Form.Label>
            <Form.Control type="text" placeholder="Movie Name" name="moviename" value={formData.moviename} onChange={handleInputChange}readOnly required />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Name" name="name" value={formData.name} onChange={handleInputChange} required />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter email" name="email" value={formData.email} onChange={handleInputChange} required />
          </Form.Group>
        </Row>

        <Form.Group className="mb-3" controlId="formGridAddress1">
          <Form.Label>Address</Form.Label>
          <Form.Control placeholder="1234 Main St" name="address1" value={formData.address1} onChange={handleInputChange} required />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGridAddress2">
          <Form.Label>Address 2</Form.Label>
          <Form.Control placeholder="Apartment, studio, or floor" name="address2" value={formData.address2} onChange={handleInputChange} required />
        </Form.Group>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridCity" name="city" value={formData.city} onChange={handleInputChange} required >
            <Form.Label>City</Form.Label>
            <Form.Control />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridState" name="state" value={formData.state} onChange={handleInputChange} required >
            <Form.Label>State</Form.Label>
            <Form.Control />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridZip" name="zip" value={formData.zip} onChange={handleInputChange} required >
            <Form.Label>Zip</Form.Label>
            <Form.Control />
          </Form.Group>
        </Row>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  )
}

export default BookShow
