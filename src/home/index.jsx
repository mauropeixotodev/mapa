import React from "react";
import Menu from "./components/menu/index.jsx";
import Box from "@mui/material/Box";
import Mapa from "./components/mapa/index.jsx";
import Modal from "./components/modal/index.jsx";
import HomeProvider from "./contexto/index.jsx";

const Home = () => {
  return (
    <>
      <HomeProvider>
        <Box sx={{ width: "100vw", height: "100vh" }}>
          <Box sx={{ width: "100%", height: "8%" }}>
            <Menu />
          </Box>
          <Box sx={{ width: "100%", height: "92%" }}>
            <Modal />
            <Mapa />
          </Box>
        </Box>
      </HomeProvider>
    </>
  );
};
export default Home;
