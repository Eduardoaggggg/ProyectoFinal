import { useState, useEffect } from "react"
 
export default function useFetchFornite(url) {
  const [data, setData] = useState(null)
  //Fetch para buscar eventos proximos en Mexico
  const getJugador = async() => {
    const headers = new Headers({
      "Authorization": "058b7b09-7514-4476-9146-276e8ecd0621"
    });

    await fetch(url, {
      headers: headers
    })
      .then((response) => response.json())
      .then(function (data){
        
        var jugador = []
        var info = data.data
        jugador.push(info)
        console.log(jugador)
        localStorage.setItem("jugador", JSON.stringify(jugador))
        setData(jugador)
        
      })
      .catch((error) => {
        console.log(error)
        var jugador = JSON.parse(localStorage.getItem("jugador"))
        setData(jugador)
      })
  }

  useEffect( () => {
    getJugador()
  }, [url])

  return {data}
}  