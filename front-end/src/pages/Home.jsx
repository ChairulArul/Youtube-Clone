import React, { useEffect } from "react";
import styled from "styled-components";
import Swal from "sweetalert2";
import Card from "../components/Card";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 20px;
`;

const Home = () => {
  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");

    // Mengecek apakah pengguna baru saja login
    if (isLoggedIn === "true") {
      Swal.fire({
        title: "Berhasil Masuk",
        text: "Halo, selamat datang di YouTube Clone!",
        icon: "success",
        position: "center",
        confirmButtonText: "OK",
        showConfirmButton: true,
        backdrop: true,
      });

      // Reset isLoggedIn flag setelah menampilkan alert
      localStorage.removeItem("isLoggedIn");
    }
  }, []);

  return (
    <Container>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </Container>
  );
};

export default Home;
