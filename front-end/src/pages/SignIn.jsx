import React, { useState } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: ${({ theme }) => theme.bg || "#f9f9f9"};
`;

const Wrapper = styled.div`
  width: 360px;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.bg || "#f9f9f9"};
  align-items: center;
  border: 1px solid #d3d3d3;
  border-radius: 10px;
  padding: 40px 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const Logo = styled.img`
  height: 30px;
  margin-right: 10px;
`;

const LogoText = styled.span`
  font-family: "Roboto", sans-serif;
  font-size: 22px;
  font-weight: bold;
  color: #606060;
`;

const Title = styled.h1`
  font-size: 22px;
  font-weight: bold;
  margin-bottom: 20px;
  color: #606060;
`;

const SubTitle = styled.h2`
  font-size: 14px;
  color: #606060;
  margin-bottom: 20px;
`;

const Input = styled.input`
  color: ${({ theme }) => theme.text};
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  background-color: ${({ theme }) => theme.bg || "#f9f9f9"};
  border: 1px solid #d3d3d3;
  border-radius: 5px;
`;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #1a73e8;
  color: white;
  font-size: 14px;
  font-weight: bold;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #155bb5;
  }
`;

const Message = styled.p`
  margin-top: 10px;
  color: ${({ success }) => (success ? "green" : "red")};
`;

const SignUpLink = styled.div`
  font-size: 14px;
  margin-top: 10px;
  cursor: pointer;
  color: ${({ theme }) => theme.text};
  &:hover {
    text-decoration: none;
  }
`;

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await axios.post("http://localhost:3000/api/login", {
        email,
        password,
      });

      if (response.status === 200) {
        setMessage(response.data.message);
        localStorage.setItem("user", JSON.stringify(response.data.user));
        localStorage.setItem("isLoggedIn", "true");
        navigate("/home");
      } else {
        setMessage(response.data.message);
      }
    } catch (error) {
      if (error.response) {
        setMessage(error.response.data.message);
      } else {
        setMessage("Terjadi kesalahan pada server.");
      }
    }
  };

  return (
    <Container>
      <Wrapper>
        <LogoContainer>
          <Logo src="https://upload.wikimedia.org/wikipedia/commons/e/ef/Youtube_logo.png" />
          <LogoText>YouTube</LogoText>
        </LogoContainer>
        <Title>Sign In</Title>
        <SubTitle>to continue to YouTube</SubTitle>
        <Input
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button onClick={handleLogin}>Next</Button>
        {message && (
          <Message success={message === "Login berhasil"}>{message}</Message>
        )}
        <SignUpLink>
          <Link to="/signup">Create account</Link>
        </SignUpLink>
      </Wrapper>
    </Container>
  );
};

export default SignIn;
