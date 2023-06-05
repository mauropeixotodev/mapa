import React from "react";
import PropTypes from "prop-types";
export const HomeContexto = React.createContext();
HomeContexto.displayName = "HomeContexto";

export default function HomeProvider({ children }) {
  const [menu, setMenu] = React.useState("mapa");
  const [openModal, setOpenModal] = React.useState(false);
  const [erro, setErro] = React.useState(false);
  const [openFormularioCadastro, setOpenFormularioCadastro] =
    React.useState(false);
  const [marcadores, setMarcadores] = React.useState([]);

  const adicionarMarcador = (titulo, lat, lng) => {
    setMarcadores([
      ...marcadores,
      { text: titulo, lat: parseFloat(lat), lng: parseFloat(lng) },
    ]);
  };

  const excluirMarcador = (index) => {
    marcadores.splice(index, 1);
    setMarcadores([...marcadores]);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };
  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseFormulario = () => {
    setOpenFormularioCadastro(false);
    erro ? setErro(false) : null;
  };
  const handleOpenFormulario = () => {
    setOpenFormularioCadastro(true);
  };
  const handleChangeMenuToMapa = () => {
    setMenu("mapa");
  };

  return (
    <HomeContexto.Provider
      value={{
        openModal,
        handleCloseModal,
        handleOpenModal,
        openFormularioCadastro,
        handleCloseFormulario,
        handleOpenFormulario,
        marcadores,
        adicionarMarcador,
        excluirMarcador,
        menu,
        handleChangeMenuToMapa,
        setMenu,
        erro,
        setErro,
      }}
    >
      {children}
    </HomeContexto.Provider>
  );
}

HomeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
