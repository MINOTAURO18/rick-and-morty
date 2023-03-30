import style from '../Card/Card.module.css'
import { Link } from 'react-router-dom';
import { connect , useDispatch } from 'react-redux';
import { addFav , removeFav } from '../../redux/actions/action';
import { useEffect, useState } from 'react';


function Card({id,name, status, species, gender, origin, image, onClose, addFav, removeFav, myFavorites}) {

const [isFav, setIsFav] = useState(false)

function handleFavorite(){
   if(isFav){
      setIsFav(false)
      removeFav(id)
   }else{
      setIsFav(true)
      addFav({id,name, status, species, gender, origin, image, onClose, addFav, removeFav});
   }
}

useEffect(() => {
   myFavorites.forEach((fav) => {
      if (fav.id === id) {
         setIsFav(true);
      }
   });
}, [myFavorites]);

   return ( 
      <div className={style.div}>
         {
   isFav ? (
      <button className={style.fav} onClick={handleFavorite}>❤️</button>
   ) : (
      <button className={style.fav} onClick={handleFavorite}>🤍</button>
   )
}
         <button className={style.boton} onClick={() => onClose(id)}>X</button>
         <img className={style.image} src={image} alt='' />
         <Link className={style.links} to={`/detail/${id}`}>
         <h2>name: {name}</h2>
         </Link>
         {/* <h2>status: {status}</h2> */}
         <h2>species: {species}</h2>
         {/* <h2>gender: {gender}</h2>
         <h2>origin: {origin}</h2> */}
      </div>
   );
}

function mapStateToProp(state){
   return{
     myFavorites: state.myFavorites
   }
}

function mapDispatchToProp(dispatch){
   return{
      addFav: (ch) => dispatch(addFav(ch)),
      removeFav: (id) => dispatch(removeFav(id)),
   }
}




export default connect(mapStateToProp, mapDispatchToProp)(Card)