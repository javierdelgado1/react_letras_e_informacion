import React, { Fragment, useState, useEffect } from "react";
import Formulario from "./components/formulario";
import Cancion from "./components/Cancion";
import Info from "./components/Info";


import axios from "axios";
function App() {
  const [busquedaletra, guardarBusquedaLetra] = useState({
      artista: 'Maná',
      cancion: 'Labios compartidos'
  });
  const [letra, guardarLetra] = useState("");
  const [info, guardarInfo] = useState("");
  const [loading, guardarLoading] = useState(false);
  const consultarApiLetra = async () => {
    guardarLoading(true);

    try {
      const { artista, cancion } = busquedaletra;
      const url = `https://api.lyrics.ovh/v1/${artista}/${cancion}`;
  
      const url2 = `https://www.theaudiodb.com/api/v1/json/1/search.php?s=${artista}`;
      const [letra, informacion] = await Promise.all([axios(url), axios(url2)]);
      console.log(letra)
      guardarLetra(letra.data.lyrics);
      guardarInfo(informacion.data.artists[0])
      guardarLoading(false);
      
    } catch (error) {
      console.error(error)
    }
    guardarBusquedaLetra({})
  };
  useEffect(() => {
    if (Object.keys(busquedaletra).length === 0) return;
    consultarApiLetra();
  }, [busquedaletra, info]);




  return (
    <Fragment>
      <Formulario guardarBusquedaLetra={guardarBusquedaLetra}  loading={loading}/>

      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6">
          <Info info={info}></Info>
          </div>

          <div className="col-md-6">
            <Cancion letra={letra}/>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
