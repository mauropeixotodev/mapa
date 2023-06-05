# Projeto Mapa

O projeto "Mapa" é um aplicativo React que permite adicionar e remover marcadores em um mapa interativo. Para instalar corretamente as dependências, é necessário executar o comando `npm install --legacy-peer-deps`, pois a última versão do React pode conflitar com a versão da API do Google Maps.

## Funcionalidades

O aplicativo "Mapa" possui as seguintes funcionalidades:

- Visualização de um mapa interativo.
- Adição de marcadores no mapa.
- Remoção de marcadores do mapa.

## Instalação

Siga as etapas abaixo para executar a instalação do projeto:

1. Certifique-se de ter o Node.js instalado em sua máquina. Você pode baixar o Node.js em [nodejs.org](https://nodejs.org).

2. Abra o terminal ou prompt de comando e navegue até a pasta raiz do projeto "Mapa".

3. Execute o seguinte comando para instalar corretamente as dependências:

```bash
npm install --legacy-peer-deps
```

Esse comando instalará todas as dependências necessárias, garantindo que a versão do React não entre em conflito com a versão da API do Google Maps.

## Uso
 
 Abra o arquivo `.env` e adicione a chave da API na seguinte variável de ambiente:

   ```plaintext
   REACT_APP_LINK_API=sua-chave-da-api
   ```

   Certifique-se de substituir `sua-chave-da-api` pela chave real da API que você está usando.

Após a conclusão da instalação, você pode executar o projeto usando o seguinte comando:

```bash
npm start
```

Isso iniciará o servidor de desenvolvimento e abrirá o aplicativo em seu navegador padrão. Você poderá interagir com o mapa, adicionar marcadores clicando no mapa e removê-los conforme necessário.

# Componente Mapa

O componente `Mapa` é responsável por renderizar um mapa interativo do Google Maps em seu aplicativo React. Ele utiliza a biblioteca `@react-google-maps/api` para integrar a API do Google Maps.

## Instalação

Certifique-se de que o Node.js esteja instalado em seu ambiente de desenvolvimento. Em seguida, siga as etapas abaixo para instalar as dependências necessárias:

1. Navegue até a pasta raiz do seu projeto React.

2. Execute o seguinte comando para instalar o pacote `@react-google-maps/api`:

```bash
npm install @react-google-maps/api
```

## Uso

Para utilizar o componente `Mapa` em seu projeto, siga as instruções abaixo:

1. Importe o componente `Mapa` em seu arquivo de componente:

```javascript
import React from "react";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import { HomeContexto } from "../../contexto";
import Marcador from "../marcador";

const Mapa = () => {
  // ...código do componente
}

export default Mapa;
```

2. No corpo do componente, utilize o hook `useJsApiLoader` para carregar a API do Google Maps. Certifique-se de fornecer uma chave de API válida no parâmetro `googleMapsApiKey`:

```javascript
const { isLoaded } = useJsApiLoader({
  id: "google-map-script",
  googleMapsApiKey: "SUA_API_KEY_DO_GOOGLE_MAPS",
});
```

Substitua `SUA_API_KEY_DO_GOOGLE_MAPS` pela sua chave de API do Google Maps.

3. Renderize o componente `Mapa` dentro do componente desejado, definindo as configurações desejadas para o mapa:

```javascript
return isLoaded ? (
  <>
    <GoogleMap
      mapContainerStyle={{ width: "100%", height: "100%" }}
      center={{ lat: -23.582593, lng: -46.563949 }}
      zoom={4}
    >
      <>
        {marcadores.map((marcador, index) => {
          return <Marcador key={index} position={marcador} />;
        })}
      </>
    </GoogleMap>
  </>
) : (
  <></>
);
```

Certifique-se de ajustar as propriedades `mapContainerStyle`, `center` e `zoom` de acordo com suas necessidades.

4. O componente `Mapa` pode receber informações de marcadores através do contexto `HomeContexto`. Certifique-se de fornecer os dados de marcadores necessários para o componente.

5. Importe o componente `Marcador` e utilize-o para renderizar os marcadores no mapa. Certifique-se de passar a posição de cada marcador através da propriedade `position`.

```javascript
import Marcador from "../marcador";

// ...

return (
  // ...

  <GoogleMap>
    <>
      {marcadores.map((marcador, index) => {
        return <Marcador key={index} position={marcador} />;
      })}
    </>
  </GoogleMap>

  // ...
);
```

Certifique-se de ajustar o caminho de importação do componente `Marcador` de acordo com a estrutura do seu projeto.

6. Agora você pode utilizar o componente `Mapa` em seu aplicativo React para exibir um mapa interativo do Google Maps com marcadores.

## Exemplo Completo

Aqui está um exemplo completo de como utilizar

 o componente `Mapa` em um projeto React:

```javascript
import React from "react";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import { HomeContexto } from "../../contexto";
import Marcador from "../marcador";

const Mapa = () => {
  const { marcadores } = React.useContext(HomeContexto);
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "SUA_API_KEY_DO_GOOGLE_MAPS",
  });

  return isLoaded ? (
    <>
      <GoogleMap
        mapContainerStyle={{ width: "100%", height: "100%" }}
        center={{ lat: -23.582593, lng: -46.563949 }}
        zoom={4}
      >
        <>
          {marcadores.map((marcador, index) => {
            return <Marcador key={index} position={marcador} />;
          })}
        </>
      </GoogleMap>
    </>
  ) : (
    <></>
  );
};

export default Mapa;
```

Lembre-se de substituir `SUA_API_KEY_DO_GOOGLE_MAPS` pela sua própria chave de API do Google Maps.

# Componente Marcador

O componente `Marcador` é responsável por renderizar um marcador no mapa do Google Maps utilizando a biblioteca `@react-google-maps/api`.

## Instalação

Certifique-se de que o Node.js esteja instalado em seu ambiente de desenvolvimento. Em seguida, siga as etapas abaixo para instalar as dependências necessárias:

1. Navegue até a pasta raiz do seu projeto React.

2. Execute o seguinte comando para instalar o pacote `@react-google-maps/api`:

```bash
npm install @react-google-maps/api
```

## Uso

Para utilizar o componente `Marcador` em conjunto com o componente `Mapa`, siga as instruções abaixo:

1. Importe o componente `Marcador` em seu arquivo de componente:

```javascript
import React from "react";
import { Marker } from "@react-google-maps/api";
import "./style.css";
import PropTypes from 'prop-types';

const Marcador = ({ position }) => {
  return (
    <Marker
      position={position}
      draggable={false}
      options={{ label: { text: position.text, className: "Mark" } }}
    />
  );
};

Marcador.propTypes = {
  position: PropTypes.shape({
    lat: PropTypes.number.isRequired,
    lng: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
  }).isRequired,
};

export default Marcador;
```

2. O componente `Marcador` recebe uma propriedade `position`, que contém as coordenadas de latitude e longitude do marcador, juntamente com um texto de label associado.

Certifique-se de ajustar o caminho de importação do arquivo de estilo (`"./style.css"`) de acordo com a estrutura do seu projeto.

3. Utilize o componente `Marcador` dentro do componente `Mapa` para renderizar os marcadores no mapa. Passe as informações de posição e texto do marcador através da propriedade `position`.

```javascript
import Marcador from "../marcador";

// ...

return (
  <GoogleMap>
    <>
      {marcadores.map((marcador, index) => {
        return <Marcador key={index} position={marcador} />;
      })}
    </>
  </GoogleMap>
);
```

Certifique-se de ajustar o caminho de importação do componente `Marcador` de acordo com a estrutura do seu projeto.

4. Agora você pode utilizar o componente `Marcador` para adicionar marcadores personalizados ao mapa do Google Maps.

## Estilo personalizado

Para aplicar estilos personalizados aos marcadores, você pode definir as regras de estilo no arquivo CSS correspondente (`style.css`).

Certifique-se de ajustar o nome do arquivo CSS e o seletor de classe (`".Mark"`) de acordo com sua conveniência.

```css
.Mark {
  /* Suas regras de estilo aqui */
}
```

## Exemplo Completo

Aqui está um exemplo completo de como utilizar o componente `Marcador` em conjunto com o componente `Mapa`:

```javascript
import React from "react";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import { HomeContexto } from "../../contexto";
import Marcador from "../marcador";

const Mapa = () => {
  const { marcadores } = React.useContext(HomeContexto);
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "SUA_API_KEY_DO_GOOGLE_MAPS",
  });



  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={{ width: "100%", height: "100%" }}
      center={{ lat: -23.582593, lng: -46.563949 }}
      zoom={4}
    >
      <>
        {marcadores.map((marcador, index) => {
          return <Marcador key={index} position={marcador} />;
        })}
      </>
    </GoogleMap>
  ) : (
    <></>
  );
};

export default Mapa;
```

Certifique-se de substituir `SUA_API_KEY_DO_GOOGLE_MAPS` pela sua própria chave de API do Google Maps.

Espero que este guia tenha sido útil para você utilizar o componente `Marcador` em seu projeto React. Sinta-se à vontade para personalizar e adaptar de acordo com suas necessidades específicas.

# Componente Menu

O componente `Menu` é responsável por renderizar um menu de navegação inferior (bottom navigation) utilizando a biblioteca Material-UI (`@mui/material`).

## Instalação

Certifique-se de que o Node.js esteja instalado em seu ambiente de desenvolvimento. Em seguida, siga as etapas abaixo para instalar as dependências necessárias:

1. Navegue até a pasta raiz do seu projeto React.

2. Execute o seguinte comando para instalar o pacote `@mui/material`:

```bash
npm install @mui/material
```

## Uso

Para utilizar o componente `Menu` em seu projeto React, siga as instruções abaixo:

1. Importe os componentes necessários e o contexto `HomeContexto` em seu arquivo de componente:

```javascript
import React from "react";
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import PublicIcon from '@mui/icons-material/Public';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { HomeContexto } from "../../contexto";
```

Certifique-se de ajustar o caminho de importação dos componentes e do contexto de acordo com a estrutura do seu projeto.

2. Dentro do componente `Menu`, utilize o hook `useContext` para obter as propriedades e funções do contexto `HomeContexto`:

```javascript
const Menu = () => {
  const { handleOpenModal, menu, setMenu } = React.useContext(HomeContexto);

  // Restante do código
};
```

Certifique-se de ajustar o nome do contexto (`HomeContexto`) de acordo com o contexto utilizado em seu projeto.

3. Renderize o menu de navegação inferior utilizando os componentes `Box`, `BottomNavigation` e `BottomNavigationAction`:

```javascript
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
```

Certifique-se de ajustar as propriedades (`label`, `value`, `icon`) e os handlers de eventos (`onChange`, `onClick`) de acordo com suas necessidades.

4. Agora você pode utilizar o componente `Menu` para exibir um menu de navegação inferior em seu projeto React.

## Exemplo Completo

Aqui está um exemplo completo de como utilizar o componente `Menu` em seu projeto:

```javascript
import React from "react";
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import PublicIcon from '@mui/icons-material/Public';
import LocationOnIcon from '@mui/icons-material/LocationOn';
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
```

Certifique-se de ajustar o caminho de importação dos componentes e do contexto de acordo com a estrutura do seu projeto.

Espero que este guia tenha sido útil para utilizar o componente `Menu` em seu projeto React. Sinta-se à vontade para personalizar e adaptar de acordo com suas necessidades específicas.

# Componente Modal

O componente `Modal` é responsável por exibir um diálogo modal em tela inteira contendo uma lista de marcadores, um formulário para adicionar novos marcadores e opções para fechar o modal e excluir marcadores existentes. Esse componente utiliza a biblioteca Material-UI (`@mui/material`) para os componentes visuais.

## Instalação

Certifique-se de que o Node.js esteja instalado em seu ambiente de desenvolvimento. Em seguida, siga as etapas abaixo para instalar as dependências necessárias:

1. Navegue até a pasta raiz do seu projeto React.

2. Execute o seguinte comando para instalar o pacote `@mui/material`:

```bash
npm install @mui/material
```

## Uso

Para utilizar o componente `Modal` em seu projeto React, siga as instruções abaixo:

1. Importe os componentes necessários e o contexto `HomeContexto` em seu arquivo de componente:

```javascript
import * as React from "react";
import { Button, Dialog, ListItemText, ListItem, List, AppBar, Toolbar, Typography, Slide, Tooltip, IconButton} from "@mui/material";
import { Close, Delete } from "@mui/icons-material";
import Formulario from "../formluario";
import { HomeContexto } from "../../contexto";
```

Certifique-se de ajustar o caminho de importação dos componentes e do contexto de acordo com a estrutura do seu projeto.

2. Dentro do componente `Modal`, utilize o hook `useContext` para obter as propriedades e funções do contexto `HomeContexto`:

```javascript
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

  // Restante do código
};
```

Certifique-se de ajustar o nome do contexto (`HomeContexto`) de acordo com o contexto utilizado em seu projeto.

3. Renderize o formulário para adicionar novos marcadores utilizando o componente `Formulario`:

```javascript
<Formulario submit={adicionarMarcador} />
```

Certifique-se de ajustar a propriedade `submit` de acordo com a função que será executada ao enviar o formulário.

4. Renderize o diálogo modal utilizando o componente `Dialog`:

```javascript
<Dialog
  fullScreen
  open={openModal}
  onClose={handleCloseModal}
  TransitionComponent={Transition}
>
  {/* Conteúdo do modal */}
</Dialog>
```

Certifique-se de ajustar as propriedades `open` e `onClose` de acordo com as variáveis e funções do contexto `HomeContexto`. A propriedade `TransitionComponent` define o componente de transição utilizado para exibir o modal.

5. Dentro do conteúdo do modal, renderize a barra de aplicativo (`AppBar`) com um título, um botão de fechar e um botão de adicionar novo marcador:

```javascript
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
```

Certifique-se de ajustar as funções `handleChangeMenuToMapa`, `handleCloseModal` e `handleOpenFormulario` de acordo com as funções do contexto `HomeContexto`.

6. Renderize a lista de marcadores utilizando o componente `List`:

```javascript
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
```

Certifique-se de ajustar a variável `marcadores` e as funções `excluirMarcador` de acordo com as variáveis e funções do contexto `HomeContexto`.

7. Exporte o componente `Modal` como padrão:

```javascript
export default Modal;
```

Certifique-se de ajustar o nome do componente (`Modal`) de acordo com o nome utilizado em seu projeto.

## Exemplo completo

Aqui está o código completo do componente `Modal` com todas as instruções acima aplicadas:

```javascript
import * as React from "react";
import { Button, Dialog, ListItemText, ListItem, List, AppBar, Toolbar, Typography, Slide, Tooltip, IconButton} from "@mui/material";
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
```

Certifique-se de ajustar os caminhos de importação dos componentes e do contexto, bem como as variáveis e funções do contexto, de acordo com a estrutura e a nomenclatura utilizada em seu projeto.

# Componente Formulário

O componente `Formulario` é responsável por exibir um formulário para adicionar novos marcadores no mapa. Ele recebe uma função `submit` como propriedade, que será chamada quando o formulário for submetido com sucesso.

## Uso

```jsx
import Formulario from "./Formulario";

const App = () => {
  const handleSubmit = (titulo, lat, lng) => {
    // Lógica para adicionar o marcador no mapa
    console.log("Marcador adicionado:", titulo, lat, lng);
  };

  return (
    <div>
      <h1>Meu App</h1>
      <Formulario submit={handleSubmit} />
    </div>
  );
};

export default App;
```

## Props

O componente `Formulario` aceita as seguintes propriedades:

- `submit` (função, obrigatório): Função a ser chamada quando o formulário for submetido com sucesso. Recebe três parâmetros: `titulo` (string), `lat` (string) e `lng` (string), que correspondem ao título do marcador, latitude e longitude, respectivamente.

## Exemplo de Uso

```jsx
import React, { useState } from "react";
import {
  Backdrop,
  Box,
  Modal,
  Fade,
  TextField,
  Grid,
  Button,
  Alert
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
      submit(titulo, lat, lng);
      handleCloseFormulario();
    } else {
      setErro(true);
    }
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
                <Grid item xs={12} md={6

}>
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
                      Erro: Coordenada inválida!
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
```

Neste exemplo, o componente `Formulario` é utilizado dentro de um componente chamado `App`. Ele recebe uma função `handleSubmit` como propriedade, que é chamada quando o formulário é submetido com sucesso. A função recebe três parâmetros: `titulo`, `lat` e `lng`, que correspondem ao título do marcador, latitude e longitude, respectivamente. Quando o formulário é submetido, a função `handleSubmit` é chamada com os valores preenchidos no formulário.

Certifique-se de importar corretamente os componentes e estilos necessários do Material-UI para que o componente `Formulario` funcione corretamente.

# Contexto HomeContexto

O contexto `HomeContexto` é responsável por gerenciar o estado e as funcionalidades relacionadas à página Home. Ele utiliza a API de contexto do React para prover os dados e funções necessárias para os componentes filhos.

## Uso

```jsx
import HomeProvider, { HomeContexto } from "./HomeProvider";

const App = () => {
  return (
    <HomeProvider>
      {/* Componentes da sua aplicação */}
    </HomeProvider>
  );
};

export default App;
```

## Props

O componente `HomeProvider` aceita as seguintes propriedades:

- `children` (node, obrigatório): Componentes filhos que terão acesso ao contexto.

## Funcionalidades

O contexto `HomeContexto` provê as seguintes funcionalidades através do valor fornecido:

- `openModal` (boolean): Estado que indica se o modal está aberto ou fechado.
- `handleOpenModal` (função): Função para abrir o modal.
- `handleCloseModal` (função): Função para fechar o modal.
- `openFormularioCadastro` (boolean): Estado que indica se o formulário de cadastro está aberto ou fechado.
- `handleOpenFormulario` (função): Função para abrir o formulário de cadastro.
- `handleCloseFormulario` (função): Função para fechar o formulário de cadastro.
- `marcadores` (array): Lista de marcadores.
- `adicionarMarcador` (função): Função para adicionar um novo marcador à lista.
- `excluirMarcador` (função): Função para excluir um marcador da lista.
- `menu` (string): Estado que indica o menu atual selecionado.
- `handleChangeMenuToMapa` (função): Função para alterar o menu para a opção "mapa".
- `setMenu` (função): Função para atualizar o estado do menu.
- `erro` (boolean): Estado que indica se ocorreu um erro.
- `setErro` (função): Função para atualizar o estado de erro.

Certifique-se de envolver os componentes que precisam acessar o contexto dentro do componente `HomeProvider` para que tenham acesso aos valores e funcionalidades fornecidos pelo contexto.