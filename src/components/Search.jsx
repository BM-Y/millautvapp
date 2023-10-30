

import { useState } from 'react'
import { Display } from './Display.jsx'

export function Search(){


const[query, setQuery]=useState('')
const [results, setResults]=useState([])
const handleChange = (event) => {

    setQuery(event.target.value)
    fetch ('https://api.tvmaze.com/search/shows?q='+query)
    .then((reponse)=>reponse.json())
    .then(data => setResults(data))


}
    return (
        <>
        <input onChange={handleChange}></input>

        <Display found={results}/>
        
        </>
  
    )
}