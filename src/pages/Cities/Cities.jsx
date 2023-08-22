import React, { useEffect, useState } from "react";
import LayoutMain from "../LayoutMain/LayoutMain";
import "./cities.css";
import { Link } from "react-router-dom";
import CardCity from "../../components/CardCity/CardCity";

export default function Cities() {
  document.title = "MyTinerary - Cities"
  //const urlApi = "http://localhost:3000/api/cities"
  const urlApi = "http://190.97.40.223:3000/api/cities?count=5&pg=0"
  
  const [datos, setDatos] = useState("Loading");
  const [filtro, setFiltro] = useState("");
  
  const cityNotFound = {
    name: "City Not Found",
    image:"./notFound.png",
    interests: [],
    state: "",
    _id: "0"
  }

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

  useEffect(()=>{
    if (filtro.length==0) filtrar()
  },[filtro])

  function borrarFiltro(){
    setFiltro("")
  }

  function keyPressHandler(event){
    if (event.key=="Enter"){
      filtrar()
    }else if (event.key=="Escape"){
      borrarFiltro()
    }
  }

  return (
    <main className="pgCities">
      <div className="hero">
        <div className="search-cont">
          {filtro ? 
            <p onClick={borrarFiltro}>X</p>
          :
            <></>
          }
          <input placeholder="Search" onChange={event => {setFiltro(event.target.value)}} onKeyDown={keyPressHandler} className="search" type="text" value={filtro} />
          <img onClick={filtrar} className="srch-img" src="./lupa.png" alt="search" />
        </div>
        <div className="cards-cont">
          { datos=="Loading" ?
            <h2>Loading...</h2>
          :
          datos.length ? datos.map((ciudad) => <CardCity key={ciudad._id} ciudad={ciudad}/>)
          : <CardCity ciudad={cityNotFound} set={setFiltro}/>
        }
        </div>
      </div>
    </main>
  );
}
