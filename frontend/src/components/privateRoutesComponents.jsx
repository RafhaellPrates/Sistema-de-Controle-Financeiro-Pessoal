
import { useEffect, useState } from "react"
import { Navigate } from "react-router"
import { api } from "../services/api"

export default function PrivateRoute({children}){

  const [ user ,setUser ] = useState(null)

  useEffect(()=>{

    api()
    .then(dados => setUser(dados))
    .catch(()=> setUser(false))

  },[])

  if(user === false ){
    return <Navigate to={'/login'}/>

  } else if( user === null){
    return (<div> Carregando... </div>)

  } else {
    return children
  }
}