import { useState } from 'react'
import './App.css'
import useFetchFornite from './useFetchFornite'
import logoFornite from './assets/logofornite5.png'
import iconlupa from './assets/search.png'

function App() {
  const url1 = 'https://fortnite-api.com/v2/stats/br/v2?name=Eagyzz&image=all'

  const [url, setUrl] = useState(url1)

  function buscarJugador() {
    var input = document.getElementById('input-busqueda');

    // Verificar si el input es null o undefined
    if (input) {
        // Obtener el valor del input
        
        var valor = input.value;
        console.log(valor)
        var url2 = `https://fortnite-api.com/v2/stats/br/v2?name=${valor}&image=all`
        setUrl(url2)
    } else {
        alert('Inserta un Personaje de Disney')
    }
    
  }

  const { data } = useFetchFornite(url)

  return (
    <>
      <div className='encabezado'>
        <div className='contenidoBuscador'>
          <img src={logoFornite} width={180} height={100} alt="" />
          <div className='contentInput'>
            <img className='iconoBuscar' src={iconlupa} alt="" />
            <input type="text" id='input-busqueda' name='busqueda' placeholder='Buscar por nombre de jugador' />
          </div>
          
          <button type='button' className='btnBuscar' onClick={buscarJugador}>Buscar</button>
        </div> 
      </div>

      <div className='contenidoPrincipal'>
        <>
        <h1 className='titulo'>ESTADÍSTICAS DE JUGADOR</h1>
          {data?.map((jugador) => (
              <div key={jugador.account.id} className='card'>
                <h1>{jugador.account.name}</h1>
                <h2>TODAS LAS PLATAFORMAS</h2>
                <div className='contentCard'>
                  <div className="izquierda">
                    <div className='overall'>
                      <div className='bannerOverall'>
                        <div className='efecBannerOverall'>OVERALL</div>
                      </div>
                      <div className='contentOverall'>
                        <div className='rowOverall1'>
                          <div className='rowDatos'>
                            <div>
                              <p className='datos'>{jugador.stats.all.overall.wins}</p>
                              <p className='descripcionDatos'>WINS</p>
                            </div>
                            <div>
                              <p className='datos'>{jugador.stats.all.overall.winRate}</p>
                              <p className='descripcionDatos'>WIN %</p>
                            </div>
                            <div>
                              <p className='datos'>{jugador.stats.all.overall.kd}</p>
                              <p className='descripcionDatos'>K/D</p>
                            </div>
                            <div>
                              <p className='datos'>{jugador.stats.all.overall.killsPerMatch}</p>
                              <p className='descripcionDatos'>KPM</p>
                            </div>
                          </div>
                        </div>
                        <div className="rowOverall2">
                          <div className='rowDatos'>
                            <div>
                              <p className='datos'>{jugador.stats.all.overall.matches}</p>
                              <p className='descripcionDatos'>MATCHES</p>
                            </div>
                            <div>
                              <p className='datos'>{jugador.stats.all.overall.kills}</p>
                              <p className='descripcionDatos'>KILLS</p>
                            </div>
                            <div>
                              <p className='datos'>{jugador.stats.all.overall.deaths}</p>
                              <p className='descripcionDatos'>DEATHS</p>
                            </div>
                          </div> 
                        </div>
                        <div>
                      </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="derecha">
                    <div className='solo'>
                      <div className='bannerSolo'>
                        <div className='efecBannerSolo'>SOLO</div>
                      </div>
                      <div className='contentSolo'>
                        <div className="rowDatos">
                          <div>
                            <p className='datos'>{jugador.stats.all.solo.wins}</p>
                            <p className='descripcionDatos'>Matches</p>
                          </div>
                          <div>
                            <p className='datos'>{jugador.stats.all.solo.winRate}</p>
                            <p className='descripcionDatos'>WINS</p>
                          </div>
                          <div>
                            <p className='datos'>{jugador.stats.all.solo.kd}</p>
                            <p className='descripcionDatos'>WINS%</p>
                          </div>
                          <div>
                            <p className='datos'>{jugador.stats.all.solo.killsPerMatch}</p>
                            <p className='descripcionDatos'>KILLS</p>
                          </div>
                          <div>
                            <p className='datos'>{jugador.stats.all.solo.killsPerMatch}</p>
                            <p className='descripcionDatos'>DEATHS</p>
                          </div>
                          <div>
                            <p className='datos'>{jugador.stats.all.solo.killsPerMatch}</p>
                            <p className='descripcionDatos'>K/D</p>
                          </div>
                          <div>
                            <p className='datos'>{jugador.stats.all.solo.killsPerMatch}</p>
                            <p className='descripcionDatos'>KPM</p>
                          </div>
                        </div>
                      </div>
                      
                    </div>
                    <div className="duo">
                      <div className='bannerDuo'>
                        <div className='efecBannerDuo'>DUO</div>
                      </div>
                      <div className='contentDuo'>
                        <div className="rowDatos">
                          <div>
                            <p className='datos'>{jugador.stats.all.duo.wins}</p>
                            <p className='descripcionDatos'>Matches</p>
                          </div>
                          <div>
                            <p className='datos'>{jugador.stats.all.duo.winRate}</p>
                            <p className='descripcionDatos'>WINS</p>
                          </div>
                          <div>
                            <p className='datos'>{jugador.stats.all.duo.kd}</p>
                            <p className='descripcionDatos'>WINS%</p>
                          </div>
                          <div>
                            <p className='datos'>{jugador.stats.all.duo.killsPerMatch}</p>
                            <p className='descripcionDatos'>KILLS</p>
                          </div>
                          <div>
                            <p className='datos'>{jugador.stats.all.duo.killsPerMatch}</p>
                            <p className='descripcionDatos'>DEATHS</p>
                          </div>
                          <div>
                            <p className='datos'>{jugador.stats.all.duo.killsPerMatch}</p>
                            <p className='descripcionDatos'>K/D</p>
                          </div>
                          <div>
                            <p className='datos'>{jugador.stats.all.duo.killsPerMatch}</p>
                            <p className='descripcionDatos'>KPM</p>
                          </div>
                        </div>
                      </div>

                    </div>
                    <div className="squad">
                      <div className='bannerSquad'>
                        <div className='efecBannerSquad'>SQUAD</div>
                      </div>
                      <div className='contentSquad'>
                        <div className="rowDatos">
                          <div>
                            <p className='datos'>{jugador.stats.all.squad.wins}</p>
                            <p className='descripcionDatos'>Matches</p>
                          </div>
                          <div>
                            <p className='datos'>{jugador.stats.all.squad.winRate}</p>
                            <p className='descripcionDatos'>WINS</p>
                          </div>
                          <div>
                            <p className='datos'>{jugador.stats.all.squad.kd}</p>
                            <p className='descripcionDatos'>WINS%</p>
                          </div>
                          <div>
                            <p className='datos'>{jugador.stats.all.squad.killsPerMatch}</p>
                            <p className='descripcionDatos'>KILLS</p>
                          </div>
                          <div>
                            <p className='datos'>{jugador.stats.all.squad.killsPerMatch}</p>
                            <p className='descripcionDatos'>DEATHS</p>
                          </div>
                          <div>
                            <p className='datos'>{jugador.stats.all.squad.killsPerMatch}</p>
                            <p className='descripcionDatos'>K/D</p>
                          </div>
                          <div>
                            <p className='datos'>{jugador.stats.all.squad.killsPerMatch}</p>
                            <p className='descripcionDatos'>KPM</p>
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>
                  
                </div>
              </div>
          ))
        }
        </>
      </div>
    </>
  )
}

export default App
