import styles from '../SearchBar/SearchBar.module.css'
import { useState } from 'react';

export default function SearchBar({onSearch}) {

   const [id,setId] = useState('')

   const handleChange = (evento) => {
      setId(evento.target.value)
   }

   return (
      <div className={styles.contenedor}>
         <input onChange={handleChange} value={id} type='search' />
         <button onClick={() => onSearch(id)}>Agregar</button>
      </div>
   );
}
