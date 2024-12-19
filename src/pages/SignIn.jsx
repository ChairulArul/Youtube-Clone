import { useState } from "react";
import React from "react";
import styled from "styled-components";
import axios from "axios";
import { useNavigate } from "react-router-dom";

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
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #ffffff;
  border: 1px solid #d3d3d3;
  border-radius: 10px;
  padding: 40px 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  background-color: ${({ theme }) => theme.bg};
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

const SubTitle = styled.h2`
  font-size: 14px;
  color: #606060;
  font-weight: 400;
  margin-bottom: 20px;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #d3d3d3;
  border-radius: 5px;
  font-size: 14px;
  outline: none;
  background-color: ${({ theme }) => theme.bg};
  color: ${({ theme }) => theme.text};
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
  margin-bottom: 15px;
`;

const More = styled.div`
  font-size: 12px;
  color: #606060;
  margin-top: 10px;
`;

const Links = styled.div`
  display: flex;
  gap: 15px;
  justify-content: center;
  margin-top: 20px;
  font-size: 12px;
`;

const Link = styled.div`
  color: #1a73e8;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

const SignUpButton = styled.button`
  width: 100%;
  padding: 10px;
  font-size: 14px;
  font-weight: bold;
  color: #1a73e8;
  background-color: transparent;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 5px;
  &:hover {
    text-decoration: underline;
  }
`;

const Span = styled.span`
  text-align: center;
  font-size: 15px;
  color: #606060;
  margin-top: 5px;
  font-weight: 900;
`;

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate(); // Inisialisasi navigate

  const handleLogin = async () => {
    setError(""); // Reset error

    if (!email.trim() || !password.trim()) {
      setError("Email and password are required.");
      return;
    }

    try {
      const response = await axios.post("http://localhost:5000/api/login", {
        email,
        password,
      });

      if (response.status === 200) {
        alert(`Login successfully, Hello ${email}`); // Alert jika berhasil login
        console.log("Login success:", response.data);
      }
    } catch (err) {
      console.error("Login failed:", err);
      if (err.response) {
        setError(err.response.data.error);
      } else {
        setError("An unexpected error occurred.");
      }
    }
  };

  const handleSignUp = () => {
    navigate("/signup"); // Arahkan ke halaman signup
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
        <Title>Sign In</Title>
        <SubTitle>to continue to YouTube</SubTitle>
        <Input
          placeholder="Email or phone"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button onClick={handleLogin}>Login</Button>
        {error && <p style={{ color: "red", fontSize: "12px" }}>{error}</p>}
        <Span>or</Span>
        <SignUpButton onClick={handleSignUp}>Create account</SignUpButton>
        <More>
          Not your computer? Use Guest mode to sign in privately.{" "}
          <Link>Learn more</Link>
        </More>
      </Wrapper>
      <Links>
        <Link>Help</Link>
        <Link>Privacy</Link>
        <Link>Terms</Link>
      </Links>
    </Container>
  );
};

export default SignIn;
