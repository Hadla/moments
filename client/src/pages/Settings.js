import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Button, Form } from 'react-bootstrap/';
import Sidebar from '../components/Sidebar';
import FormInput from '../components/FormInput';

const Settings = (props) => {
  const [values, setValues] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  })
  const inputs = [
    {
      id: 1,
      name: "fullName",
      label: "Full name",
      placeholder: "Enter full name",
      type: "text"
    },
    {
      id: 2,
      name: "email",
      label: "Email address",
      placeholder: "Enter email address",
      type: "email",
      infoText: "We'll never share your email with anyone else."
    },
    {
      id: 3,
      name: "password",
      label: "Password",
      placeholder: "Enter new password",
      type: "password"
    },
    {
      id: 4,
      name: "confirmPassword",
      label: "Confirm new password",
      placeholder: "Confirm new password",
      type: "password"
    },
  ];
  const handleSubmit = (e) => {
    e.preventDefault();
  }
  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value })
  }
  //*** DONT CALL SET STATE INSIDE IF USEEFFECT
  // useEffect(() => {
  //   if (props.userInfo !== null) {
  //     setValues({ 
  //       fullName: props.userInfo.name,
  //       email: props.userInfo.email,
  //      })
  //   }
  // })

  return (
    <div className='page-container'>
      <Sidebar />
      <div className='page-content'>
        <Form onSubmit={handleSubmit}>
          {inputs.map(input => <FormInput
            {...input}
            key={input.id}
            value={values[input.name]}
            onChange={onChange}
          />)}


          <Button type="submit">Sumbit</Button>
        </Form>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return { userInfo: state.userInfo || null };
};

export default connect(mapStateToProps, null)(Settings);








{/* <Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
  <Form.Label>Email address</Form.Label>
  <Form.Control type="email" placeholder="Enter email" />
  <Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text>
  </Form.Group>
  
  <Form.Group className="mb-3" controlId="formBasicPassword">
  <Form.Label>Password</Form.Label>
  <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
  <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  
  <Button variant="primary" type="submit">Submit</Button>
</Form> */}

