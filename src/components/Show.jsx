




import { useEffect, useState } from "react"
import{ useParams} from "react-router-dom"


export function  Show (){

    const [details, setDetails]=useState([])
     const params = useParams()
        

    useEffect(()=>{

     fetch('https://api.tvmaze.com/shows/'+params.id+'embed=cast')

     .then((reponse)=>reponse.json())
     .then(data => setResults(data))


     },[])


}