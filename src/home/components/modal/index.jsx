import * as React from "react";
import {
  Button,
  Dialog,
  ListItemText,
  ListItem,
  List,
  AppBar,
  Toolbar,
  Typography,
  Slide,
  Tooltip,
  IconButton,
} from "@mui/material";
import { Close, Delete } from "@mui/icons-material";
import Formulario from "../formluario";
import { HomeContexto } from "../../contexto";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const Modal = () => {
  const {
    openModal,
    handleCloseModal,
    handleOpenFormulario,
    excluirMarcador,
    adicionarMarcador,
    marcadores,
    handleChangeMenuToMapa,
  } = React.useContext(HomeContexto);

  return (
    <div>
      <Formulario submit={adicionarMarcador} />
      <Dialog
        fullScreen
        open={openModal}
        onClose={handleCloseModal}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: "relative" }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={() => {
                handleChangeMenuToMapa();
                handleCloseModal();
              }}
              aria-label="close"
            >
              <Close />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              Marcadores
            </Typography>
            <Button autoFocus color="inherit" onClick={handleOpenFormulario}>
              Adicionar
            </Button>
          </Toolbar>
        </AppBar>
        <List>
          {marcadores.map((marcador, index) => {
            return (
              <ListItem key={index}>
                <ListItemText
                  primary={marcador.text}
                  secondary={
                    "Latitude: " + marcador.lat + ", Longitude: " + marcador.lng
                  }
                />
                <Tooltip title="Delete">
                  <Button
                    onClick={() => {
                      excluirMarcador(index);
                    }}
                  >
                    <Delete />
                  </Button>
                </Tooltip>
              </ListItem>
            );
          })}
        </List>
      </Dialog>
    </div>
  );
};
export default Modal;
