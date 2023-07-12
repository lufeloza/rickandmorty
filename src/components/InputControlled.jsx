import { useState } from "react"

const InputControlled = ()=> {

/*
    -focus se selecciona el input para poder escribir sobre el
    -blur  se le quita el focus al input
    - change - el contenido del input 
*/

    /**
      -Generar un estado
      -cada vez que el input reciba la nueva información 
        vamos a guardar los coambios de dicha informacion


     */

      const [value, setValue] = useState('')

      //const updateInput = (e) => setValue(e.target.value) Estan valida como la que esta en onChange
      


  return(
        <>
            <form>
                <label htmlFor="user-name">Nombre Usuario</label>
                <input 
                    type="text" 
                    id="user-name"
                    onChange={(e) => setValue(e.target.value)}
                    value={value}
                    placeholder="Esto es un placeholder"
                    />
            </form>
            <p>{value}</p>
        </>
    )

}

export default InputControlled