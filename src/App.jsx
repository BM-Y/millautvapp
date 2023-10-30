import { useState } from 'react'
import './App.css'
import { Search } from './components/Search'

function App() {

  const [champs, setChamps] = useState([])



  return (
    <>
  <h1>Millau TV app</h1>

  <Search />
    </>
  )
}

export default App
