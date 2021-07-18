import React, { useState,useEffect } from 'react';
import axios from "axios"
import Header from "./components/Header"
import Search from "./components/Search"
import "./App.css"
import CharactersGrid from './components/charactersGrid';

function App() {
const [items, setItems] = useState([])
const [isLoading, setIsLoading] = useState(true)
const [query, setQuery] = useState("")

useEffect(() => {
  const fetchItems = async ()=>{
    const result = await axios (`https://rickandmortyapi.com/api/character?name=${query}`)
    
    setItems(result.data.results)
    setIsLoading(false)
  }
  fetchItems();
}, [query])



  return (
    <div className="container">
  <Header/>
  <Search getQuery={(q)=>setQuery(q)}/>
  <CharactersGrid items={items} isLoading={isLoading}/>
  </div>
  );
}

export default App;
