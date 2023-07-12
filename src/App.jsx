import './App.css'
import axios from 'axios';
import { useState, useEffect } from 'react';
import Character from './components/Character';
//import InputControlled from './components/InputControlled';

function App() {
 
 /*
  - traer una ubicación 
    consumir el endpoint  de las ubicaciones para que traiga una ubicacion aleatoria y mostar el nombre de dicha ubicacion
 */ 
  // generar un numero ramdom antes de la petición
  const [rickandmorty, setRickandmorty] = useState({})
  const [value, setValue] = useState('')
  useEffect(() =>{

      //numero random
      const randomId = Math.floor((Math.random()*126)+1)
      axios
          .get(`https://rickandmortyapi.com/api/location/${randomId}`)
          .then(resp => {
            console.log(resp.data)
            setRickandmorty(resp.data)
          })
          .catch(error => console.error(error))
  },[])

  // const Search = () =>{
  //   axios
  //         .get(`https://rickandmortyapi.com/api/location/${value}`)
  //         .then(resp => {
  //           console.log(resp.data)
  //           setRickandmorty(resp.data)
  //         })
  //         .catch(error => console.error(error))
  // }
/**
 * Cuando un boton dito submit es clikeado dentro de un formulario
 * activa un evento llamado submit del formulario
 *  
 */
  const submit = e =>{
    e.preventDefault()
    axios
          .get(`https://rickandmortyapi.com/api/location/${value}`)
          .then(resp => {
            console.log(resp.data)
            setRickandmorty(resp.data)
          })
          .catch(error => console.error(error))
  }

// usaremos .slice(inicio, fin) para fraccionar el arreglo para tomarlo por parte y paginar
/*
firstIndex => donde inicia
lastIndex => donde termina
Cantidad de elemento por pagina
pagina actual 

*/
const [currentPage, setCurrentPage] = useState(1)
const rickandmortyPerPage = 10
const lastIndex = rickandmortyPerPage * currentPage
const firstIndex = lastIndex - rickandmortyPerPage
const totalPages = Math.ceil(rickandmorty.residents?.length / rickandmortyPerPage)
const rickandmortyPaginated = rickandmorty.residents?.slice(firstIndex,lastIndex)
// se debe generar un arrglo con totalpage
const pages = []
for (let i = 1; i<= totalPages; i++){
  pages.push(i)
}
  return (
    <>
      {/* <InputControlled></InputControlled> */}
      <div className='search'>
        
         <form onSubmit={submit}>
                  <label htmlFor=""> Numero Id </label>
                  <input 
                      type="text" 
                      value={value}
                      placeholder="Ingrese el identificadorr"
                      onChange={e => setValue(e.target.value)}
                      />
                      <button className='button-buscar' type='submit'>Buscar</button>
          </form>
          <div className='coantainer-planet'>
            <h1>{rickandmorty.name}</h1>
          </div>
        
        </div>
        {/* <button onClick={Search}>ENTER</button> */}
        <section>
        
        <div className='container'>
               
                {
                  rickandmortyPaginated?.map(resident=>(
                    <Character
                    key = {resident}
                    url = {resident}
                    />
                  ))
                }
          
        </div>
         
        </section>

        <div className='pag'>
          <button
            onClick={()=> setCurrentPage(currentPage -1)}
            disabled ={currentPage ===1}
            >
              ANTERIOR
          </button>
            {
              pages.map(num =>(
                <button className='button-pag'
                key={num}
                onClick={()=> setCurrentPage(num)}>
                  {num}
                </button>
              ))
            }
          <button
          onClick={()=> setCurrentPage(currentPage +1)}
          disabled ={currentPage===totalPages}
          >
            SIGUIENTE
          </button>
        </div>
       
        

    </>
  );
}
export default App;

/**
 crear un componente Character

 consumir la url
 */