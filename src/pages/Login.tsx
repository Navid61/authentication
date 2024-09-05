import React from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import styled from "styled-components";
import Button from "react-bootstrap/Button";

import "bootstrap/dist/css/bootstrap.min.css";


const LoginPageFrame = styled.div`
  width: 95vw;
  height: 95vh;
  display: flex;
  flex-direction: row;
  justify-content: end;
  align-items: center;
  margin: 0 auto;
  background-color: #a34343;
`;

const CustomContainer = styled(Container)`
  width: 20vw;
  height: 75vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 40px;
  margin: auto 30px;
  background-color: #ffad60;
`;

const CustomFormControl = styled(Form.Control)`
  width: 10px;
`;

const ActContainer = styled(Container)`
width:100%;
display:grid;
grid-template-rows:repeat(2, 1fr);

`;


const Login: React.FC = () => {
  return (
    <LoginPageFrame>
      <CustomContainer>
        <InputGroup
          as="div"
          className="mb-3"
          style={{ width: "15vw", margin: "0  auto" }}
        >
          <CustomFormControl
            aria-label="Default"
            aria-describedby="inputGroup-sizing-default"
            placeholder="Enter your email"
            type="email"
          />
        </InputGroup>
        <InputGroup
          as="div"
          className="mb-3"
          style={{ width: "15vw", margin: "0  auto" }}
        >
          <CustomFormControl
            aria-label="Default"
            aria-describedby="inputGroup-sizing-default"
            placeholder="Enter your password"
            type="password"
          />
        </InputGroup>
        <ActContainer>
            
       <Button size={"sm"} style={{width:'5vw', margin:'0 65%'}}>
        Login
       </Button>

        <Form.Check type={"checkbox"} label={"Remember password"} style={{width:'10vw', margin:'0 25px'}} />
        </ActContainer>
      </CustomContainer>
    </LoginPageFrame>
  );
};

export default Login;
