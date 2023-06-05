import React from "react";
import { Box, BottomNavigation, BottomNavigationAction } from "@mui/material";
import PublicIcon from "@mui/icons-material/Public";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { HomeContexto } from "../../contexto";

const Menu = () => {
  const { handleOpenModal, menu, setMenu } = React.useContext(HomeContexto);

  return (
    <Box sx={{ width: "100%" }}>
      <BottomNavigation
        showLabels
        value={menu}
        onChange={(event, newValue) => {
          setMenu(newValue);
        }}
      >
        <BottomNavigationAction
          label="Mapa"
          value="mapa"
          icon={<PublicIcon />}
        />
        <BottomNavigationAction
          label="Marcadores"
          value="marcadores"
          onClick={handleOpenModal}
          icon={<LocationOnIcon />}
        />
      </BottomNavigation>
    </Box>
  );
};
export default Menu;
