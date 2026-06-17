
import './App.css'
import { useEffect } from 'react'
import { api } from './services/api'

function App() {
  useEffect(()=>{
    api()
    .then((dado)=>{console.log(dado)})
    .catch((err)=>{console.log(err)})
  }, [])

  return <p>ola </p>
}

export default App
