import React, { useEffect, useState } from "react";
import LayoutMain from "../LayoutMain/LayoutMain";
import "./cities.css";
import { Link } from "react-router-dom";

export default function Cities() {
  //const urlApi = "http://localhost:3000/api/cities"
  const urlApi = "http://192.168.1.106:3000/api/cities"
  
  const [datos, setDatos] = useState([]);
  const [filtro, setFiltro] = useState("");
  
  useEffect(() => {
    fetch(urlApi)
      .then((res) => res.json())
      .then((data) => setDatos(data.response));
  }, []);

  function filtrar(){
    fetch(urlApi + "?name=" + filtro)
      .then((res) => res.json())
      .then((data) => setDatos(data.response))
  }

  function keyPressHandler(event){
    if (event.key=="Enter"){
      filtrar()
    }
  }

  return (
    <main className="pgCities">
      <div className="hero">
        <div className="search-cont">
          <input onChange={event => {setFiltro(event.target.value)}} onKeyDown={keyPressHandler} className="search" type="text" />
          <img onClick={filtrar} className="srch-img" src="./lupa.png" alt="search" />
        </div>
        <div className="cards-cont">
          {datos.length ? datos.map((ciudad) => {
            return (
              <div key={ciudad.name} className="card">
                <div className="card-header">
                  <img src={ciudad.image} alt="Castillo Libertad" />
                  <p>{ciudad.interests[0]}</p>
                </div>
                <div className="card-body">
                  <h2>{ciudad.name}</h2>
                  <h3>{ciudad.state}</h3>
                  <Link to={'/details/' + ciudad["_id"]}>Show More</Link>
                </div>
              </div>
            );
          })
          : <h2>Loading...</h2>
        }
        </div>
      </div>
    </main>
  );
}
