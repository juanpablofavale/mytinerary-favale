import React, { useEffect, useRef, useState } from "react";
import "./cities.css";
import CardCity from "../../components/CardCity/CardCity";
import { useDispatch, useSelector } from "react-redux";
import { setIndexAndCounterSync, getAllCitiesAsync, setFilterSync } from "../../redux/actions/citiesActions";
import ButtonBar from "../../components/ButtonBar/ButtonBar";

export default function Cities() {
  document.title = "MyTinerary - Cities"

  const {cities, loading, filter, index, count} = useSelector(store => store.citiesReducer)
  const search = useRef()
  const selectCount = useRef()
  const dispatch = useDispatch()

  const cityNotFound = {
    name: "City Not Found",
    image:"./notFound.png",
    interests: [],
    state: "",
    _id: "0"
  }

  const pages = [
    {
      value: 0,
      caption:"All Cities"
    },
    {
      value: 1,
      caption:"One City"
    },
    {
      value: 2,
      caption:"Two Cities"
    },
    {
      value: 5,
      caption:"Five Cities"
    },
    {
      value: 10,
      caption:"Ten Cities"
    },
  ]

  useEffect(() => {
    search.current.value=filter
    selectCount.current.value = count
    if(!cities.response || filter==""){
      obtenerCities()
    }
  },[])
  
  function obtenerCities(queries = "?count=" + count + "&pg=" + index){
    dispatch(getAllCitiesAsync(queries))
  }

  function filtrar(){
    dispatch(setFilterSync(search.current.value))
    let query = "?name=" + search.current.value
    dispatch(getAllCitiesAsync(query))
    dispatch(setIndexAndCounterSync({index: 0, count: 0}))
  }
  
  function borrarFiltro(){
    search.current.value = ''
    dispatch(setFilterSync(''))
    dispatch(getAllCitiesAsync())
  }

  function keyPressHandler(event){
    if (event.key=="Enter"){
      filtrar()
    }else if (event.key=="Escape" || (event.key=="Backspace" && search.current.value=="")){
      borrarFiltro()
    }
  }
  
  function selectHandler(evnt){
    dispatch(setIndexAndCounterSync({index: 0, count:evnt.target.value}))
    let queries = "?count=" + evnt.target.value + "&pg=" + 0
    obtenerCities(queries)
  }
  
  function selectAndShow(ind){
    dispatch(setIndexAndCounterSync({index: ind, count: count}))
    let queries = "?count=" + count + "&pg=" + ind
    obtenerCities(queries)
  }

  if (loading) <h2>Loading...</h2>

  return (
    <main className="pgCities">
      <div className="hero">
        <div className="search-cont">
          {
            filter && <p onClick={borrarFiltro}>X</p>
          }
          <input ref={search} placeholder="Search" onKeyUp={keyPressHandler} className="search" type="text"/>
          <img onClick={filtrar} className="srch-img" src="./lupa.png" alt="search" />
        </div>
        {!filter &&
          <div className="divCpp">
            <label htmlFor="cpp">Cities per Pages</label>
            <select ref={selectCount} id="cpp" onInput={selectHandler} className="select" name="">
              {
                pages.map((opt, index) => <option key={index} value={opt.value}>{opt.caption}</option>)
              }
            </select>
          </div>
        }        
        <div className="cards-cont">
          {cities.response?.length ? cities.response.map((ciudad) => <CardCity key={ciudad._id} ciudad={ciudad}/>)
          : <CardCity ciudad={cityNotFound} clearFilter={borrarFiltro}/>
        }
        </div>
        {!filter && count != 0 &&
          <ButtonBar pausar={()=>{}} set={selectAndShow} datos={cities} index={index}/>
        }
      </div>
    </main>
  );
}