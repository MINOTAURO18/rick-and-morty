import style from '../Card/Card.module.css'
import { Link } from 'react-router-dom';


export default function Card({id,name, status, species, gender, origin, image, onClose}) {
   return ( 
      <div className={style.div}>
         <button className={style.boton} onClick={() => onClose(id)}>X</button>
         <img className={style.image} src={image} alt='' />
         <Link className={style.links} to={`/detail/${id}`}>
         <h2>name: {name}</h2>
         </Link>
         <h2>status: {status}</h2>
         <h2>species: {species}</h2>
         {/* <h2>gender: {gender}</h2>
         <h2>origin: {origin}</h2> */}
      </div>
   );
}
