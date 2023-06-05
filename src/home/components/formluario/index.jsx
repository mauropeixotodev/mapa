import React from "react";
import {
  Backdrop,
  Box,
  Modal,
  Fade,
  TextField,
  Grid,
  Button,
  Alert,
} from "@mui/material";
import PropTypes from "prop-types";
import { HomeContexto } from "../../contexto";

const Formulario = ({ submit }) => {
  const { openFormularioCadastro, handleCloseFormulario, setErro, erro } =
    React.useContext(HomeContexto);
  const latRef = React.useRef();
  const lngRef = React.useRef();
  const tituloRef = React.useRef();

  const handleSalvar = (titulo, lat, lng) => {
    const latitudeRegex = /^-?([0-8]?[0-9]|90)\.\d+$/;
    const longitudeRegex = /^-?((1[0-7]|[0-9])?\d(\.\d+)?|180(\.0+)?)$/;
    if (latitudeRegex.test(lat) && longitudeRegex.test(lng)) {
      console.log("teste");
      submit(titulo, lat, lng);
      handleCloseFormulario();
      return;
    }
    setErro(true);
  };

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={openFormularioCadastro}
        onClose={handleCloseFormulario}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={openFormularioCadastro}>
          <Box
            sx={style}
            component="form"
            onSubmit={(e) => {
              e.preventDefault();
              handleSalvar(
                tituloRef.current.value,
                latRef.current.value,
                lngRef.current.value
              );
            }}
          >
            <Grid container spacing={1} sx={{ width: "100%" }}>
              <Grid item container spacing={1} sx={{ width: "100%" }}>
                <Grid item xs={12} md={12}>
                  <TextField
                    inputProps={{ ref: tituloRef }}
                    required
                    id="outlined-basic"
                    label="Titulo"
                    variant="outlined"
                    sx={{ width: "100%" }}
                  />
                </Grid>
              </Grid>
              <Grid item container spacing={1} sx={{ width: "100%" }}>
                <Grid item xs={12} md={6}>
                  <TextField
                    inputProps={{ ref: latRef }}
                    required
                    id="outlined-basic"
                    label="Latitude"
                    variant="outlined"
                    sx={{ width: "100%" }}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    inputProps={{ ref: lngRef }}
                    required
                    id="outlined-basic"
                    label="Longitude"
                    variant="outlined"
                    sx={{ width: "100%" }}
                  />
                </Grid>
                {erro && (
                  <Grid
                    item
                    xs={12}
                    md={12}
                    sx={{ display: "flex", justifyContent: "center" }}
                  >
                    <Alert sx={{ width: "100%" }} severity="error">
                      Erro: Coordenada invalida!
                    </Alert>
                  </Grid>
                )}
                <Grid
                  item
                  xs={12}
                  md={12}
                  sx={{ display: "flex", justifyContent: "center" }}
                >
                  <Button
                    type="submit"
                    variant="contained"
                    color="success"
                    sx={{ width: "100%", height: "50px" }}
                  >
                    Salvar
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};

const style = {
  position: "absolute",
  top: "30%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: { xs: "80%", md: "400px" },
  bgcolor: "background.paper",
  boxShadow: 24,
  borderRadius: "10px",
  p: 4,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};

Formulario.propTypes = {
  submit: PropTypes.func.isRequired,
};

export default Formulario;
