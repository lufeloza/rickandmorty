import axios from 'axios';
import { useState, useEffect } from "react"

const Character = ({url})=> {

    /**
     
     */

    const [character, setCharacter] = useState({})
    
    useEffect(() =>{
  
          axios
            .get(url) 
            .then(resp => {
              console.log(resp.data)
              setCharacter(resp.data)
            })
            .catch(error => console.error(error))
    },[])

    return(
     
    
      <div   className='container-info'>
            <div className='container-img'>
              <img src={character.image} alt="" />
            </div>
         
            <div className='container-info_description'>
              <div className='container-name'>
                <h2>{character.name}</h2>
              </div>
              <div className='container-description'>
                <div className='container-description_inf'>Status: <h2>{character.status}</h2></div>
                <div className='container-description_inf'>Species: <h2>{character.species}</h2></div>
                <div className='container-description_inf'>Origin: <h2>{character.origin?.name}</h2></div>
              </div>
              
            </div>
       </div>
       
    
    )

}

export default Character