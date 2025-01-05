import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  color: ${({ theme }) => theme.text};
  background-color: ${({ theme }) => theme.bg};
`;

const Wrapper = styled.div`
  width: 360px;
  color: ${({ theme }) => theme.text};
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #d3d3d3;
  border-radius: 10px;
  padding: 40px 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
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
  font-weight: bolder;
  color: #606060;
`;

const Title = styled.h1`
  font-size: 22px;
  font-weight: bold;
  margin-bottom: 20px;
  color: #606060;
`;

const Input = styled.input`
  color: ${({ theme }) => theme.text};
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #d3d3d3;
  background-color: ${({ theme }) => theme.bg || "#f9f9f9"};
  border-radius: 5px;
  font-size: 14px;
  outline: none;
  &:focus {
    border-color: #1a73e8;
    box-shadow: 0 0 3px rgba(26, 115, 232, 0.5);
  }
`;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  font-size: 14px;
  font-weight: bold;
  color: #ffffff;
  background-color: #1a73e8;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
  &:hover {
    background-color: #155bb5;
  }
  margin-top: 15px;
`;

const BackLink = styled.div`
  margin-top: 20px;
  font-size: 14px;
  color: #1a73e8;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

const Message = styled.div`
  margin-top: 15px;
  font-size: 14px;
  color: ${({ isError }) => (isError ? "red" : "green")};
`;

export const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [isError, setIsError] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleSignUp = async () => {
    if (!name || !email || !password) {
      setMessage("All fields are required.");
      setIsError(true);
      return;
    }

    try {
      // Kirim request ke backend
      const response = await axios.post("http://localhost:3000/register", {
        name,
        email,
        password,
      });

      if (response.status === 200 && response.data.success) {
        setMessage("Sign Up Successful!");
        setIsError(false);
        setIsPopupOpen(true);
        console.log("Pop-up set to true");
      } else {
        setMessage(response.data.message || "An error occurred.");
        setIsError(true);
      }
    } catch (error) {
      if (error.response) {
        setMessage(
          error.response.data.message || "Server error. Please try again later."
        );
      } else {
        setMessage("Server error. Please try again later.");
      }
      setIsError(true);
    }
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false); // Menutup pop-up
  };

  return (
    <Container>
      <Wrapper>
        <LogoContainer>
          <Logo
            src="https://upload.wikimedia.org/wikipedia/commons/e/ef/Youtube_logo.png"
            alt="YouTube Logo"
          />
          <LogoText>YouTube</LogoText>
        </LogoContainer>
        <Title>Create Account</Title>
        <Input
          placeholder="Input your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          placeholder="Input your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button onClick={handleSignUp}>Sign Up</Button>
        {message && <Message isError={isError}>{message}</Message>}
        <BackLink onClick={() => window.history.back()}>
          Back to Sign In
        </BackLink>
      </Wrapper>

      {isPopupOpen && (
        <div
          style={{
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            backgroundColor: "#fff",
            padding: "20px",
            borderRadius: "10px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            zIndex: 9999,
          }}
        >
          <h2>Sign Up Successful!</h2>
          <button
            onClick={handleClosePopup}
            style={{
              padding: "5px 15px",
              backgroundColor: "#1a73e8",
              color: "#fff",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Close
          </button>
        </div>
      )}
    </Container>
  );
};

export default SignUp;
