import React, {useState} from "react";

const Formulario = ({guardarBusquedaLetra, loading}) => {
    const [busqueda, guardarBusqueda] = useState({
        artista: 'Maná',
        cancion: 'Labios compartidos'
    })
    
    const [error, guardarError ] = useState(false)
    const onChange= e =>{
        guardarBusqueda({
            ...busqueda,
            [e.target.name] : e.target.value
        })
    }

    const {artista, cancion} = busqueda;

    const buscarInformacion = e =>{
        e.preventDefault();        
        if(artista.trim() ==='' || cancion.trim() ===''){
            guardarError(true);
            return ;
        }
        guardarBusquedaLetra(busqueda)     

    }
    // if(artista.trim() ==='' || cancion.trim() ===''){
    //     guardarError(true);
    //     return ;
    // }
    // guardarBusquedaLetra(busqueda)
  return (
    <div className="bg-info">
      <div className="container">
      {error ? (<p className="alert alert-danger text-center">Todos los campos son obligatorios</p>) : (null)}
        <div className="row">
          <form className="col card text-white bg-transparent mb-5 pt-5 pb-2" onSubmit={buscarInformacion}>
            <fieldset>
              <legend className="text-center">Buscador Letras canciones</legend>

              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <label>Artista</label>
                    <input
                      type="text"
                      className="form-control"
                      name="artista"
                      placeholder="Nombre artista"
                      onChange={onChange}
                      value={artista}
                    ></input>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label>Cancion</label>
                    <input
                      type="text"
                      className="form-control"
                      name="cancion"
                      placeholder="Nombre cancion"
                      onChange={onChange}
                      value={cancion}
                    ></input>
                  </div>
                </div>
              </div>

              <button type="submit" className="btn btn-primary float-right" disabled={loading}>
                {loading && (
                  <i
                    className="fa fa-refresh fa-spin"
                    style={{ marginRight: "5px" }}
                  />
                )}
                {loading && <span>Cargando</span>}
                {!loading && <span>Buscar</span>}              
              </button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Formulario;
