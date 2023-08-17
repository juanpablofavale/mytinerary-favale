import React, { useEffect, useState } from "react";
import LayoutMain from "../LayoutMain/LayoutMain";
import "./cities.css";
import { Link } from "react-router-dom";

export default function Cities() {
  const [datos, setDatos] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/cities")
      .then((res) => res.json())
      .then((data) => setDatos(data.response));
  }, []);

  function keyPressHandler(event){
    if (event.key=="Enter"){
      alert("ENTER")
      //Disparar el filtro
    }
  }

  return (
    <main className="pgCities">
      <div className="hero">
        <div className="srch-img">
          <input onKeyDown={keyPressHandler} className="search" type="text" />
        </div>
        <div className="cards-cont">
          {datos.map((ciudad) => {
            return (
              <div key={ciudad.name} className="card">
                <div className="card-header">
                  <img src={ciudad.image} alt="Castillo Libertad" />
                  <p>{ciudad.interests[0]}</p>
                </div>
                <div className="card-body">
                  <h2>{ciudad.name}</h2>
                  <h3>{ciudad.state}</h3>
                  <Link to={'/cities/details/' + ciudad["_id"]}>Show More</Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}
