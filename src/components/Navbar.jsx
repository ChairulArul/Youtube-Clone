import React, { useState } from "react";
import styled from "styled-components";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { SearchOutlined } from "@mui/icons-material";
import { Link, useNavigate } from "react-router-dom";

const Container = styled.div`
  position: sticky;
  top: 0;
  background-color: ${({ theme }) => theme.bgLighter};
  height: 56px;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  padding: 0px 20px;
  justify-content: flex-end;
  position: relative;
`;

const Search = styled.div`
  position: absolute;
  left: 0px;
  right: 0px;
  margin: auto;
  width: 40%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
  color: ${({ theme }) => theme.text};
`;

const Input = styled.input`
  border: none;
  background-color: transparent !important;
  color: ${({ theme }) => theme.text};
`;

const Button = styled.button`
  color: ${({ theme }) => theme.text};
  padding: 5px 15px;
  background-color: transparent !important;
  border: 1px solid #3ea6ff;
  color: #3ea6ff;
  border-radius: 3px;
  font-weight: 500;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 5px;
`;
const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState(""); // Menyimpan query pencarian
  const navigate = useNavigate(); // Hook untuk navigasi

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearch = () => {
    if (searchQuery) {
      // Navigasi ke halaman hasil pencarian dan menyertakan query di URL
      navigate(`/search?query=${searchQuery}`);
    }
  };

  return (
    <Container>
      <Wrapper>
        <Search>
          <Input
            placeholder="Search"
            value={searchQuery}
            onChange={handleSearchChange}
          />
          <SearchOutlined onClick={handleSearch} />
        </Search>
        <Link to="signin" style={{ textDecoration: "none" }}>
          <Button>
            <AccountCircleIcon />
            Sign in
          </Button>
        </Link>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
