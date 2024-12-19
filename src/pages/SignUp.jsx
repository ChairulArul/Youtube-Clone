import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios"; // Import axios untuk mengirim data ke server

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: ${({ theme }) => theme.bg};
  color: ${({ theme }) => theme.text};
`;

const Wrapper = styled.div`
  width: 360px;
  padding: 40px 20px;
  background-color: ${({ theme }) => theme.bg};
  border: 1px solid #d3d3d3;
  border-radius: 10px;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  color: ${({ theme }) => theme.text};
`;

const Title = styled.h1`
  font-size: 22px;
  font-weight: bold;
  color: ${({ theme }) => theme.text};
  margin-bottom: 20px;
`;

const SubTitle = styled.p`
  font-size: 14px;
  color: ${({ theme }) => theme.text};
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

const SignInButton = styled.button`
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

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // Validasi email dengan regex
  const validateEmail = (email) => {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return regex.test(email);
  };

  const handleRegister = async () => {
    setError(""); // Reset error

    if (!name.trim() || !email.trim() || !password.trim()) {
      setError("All fields are required.");
      return;
    }

    if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    try {
      // Kirim data ke backend
      const response = await axios.post("http://localhost:5000/api/register", {
        name,
        email,
        password,
      });

      if (response.status === 201) {
        alert("Registration successful!");
        console.log("User registered:", response.data);
        // Bisa arahkan pengguna ke halaman lain setelah berhasil registrasi
      }
    } catch (err) {
      console.error("Registration failed:", err);
      setError("An error occurred during registration.");
    }
  };

  return (
    <Container>
      <Wrapper>
        <Title>Create Your Account</Title>
        <SubTitle>to continue to YouTube</SubTitle>
        <Input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          type="email"
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
        {error && <p style={{ color: "red", fontSize: "12px" }}>{error}</p>}
        <Button onClick={handleRegister}>Sign Up</Button>
        <SubTitle>Already have an account?</SubTitle>
        <SignInButton>Sign In</SignInButton>
      </Wrapper>
    </Container>
  );
};

export default Register;
