import React, { Fragment } from "react";

const Info = ({ info }) => {
  if (Object.keys(info).length === 0) return null;

  const {strArtistThumb, strGenre, strBiographyES} = info
  return (
    <Fragment>
      <div className="card border-light">
        <div className="card-header bg-primary text-light font-weight-bold">Informacion artista</div>

        <div className="card-body">
            <img src={info.strArtistThumb} alt="Logo artista"></img>
            <p className="card-text">Genero: {strGenre}</p>
            <h2 className="card-text">Biografia:</h2>
            <p className="card-text"> {strBiographyES}</p>


        </div>

      </div>

    </Fragment>
  );
};

export default Info;
