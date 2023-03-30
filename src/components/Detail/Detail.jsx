import axios from "axios";
import { useState, useEffect  } from "react";
import {Link, useParams} from 'react-router-dom'
import style from '../Detail/Detail.module.css'

const Detail = () => {

  const { detailId } = useParams();

  const [character, setCharacter] = useState({});
  
  useEffect(() => {
    axios(`https://rickandmortyapi.com/api/character/${detailId}`).then(({ data }) => {
      if (data.name) {
        setCharacter(data);
      } else {
        window.alert('No hay personajes con ese ID');
      }
    });
    return setCharacter({});
  }, [detailId])
  
  
  return (
    <div className={style.Detail}>
      <button>

     <Link to='/home' >Home</Link>
      </button>
        <h1>{character?.name}</h1>
        <h2>status: {character?.status}</h2>
        <h2>species: {character?.species}</h2>
        <h2>gerder: {character?.gender}</h2>
        <h2>origin: {character?.origin?.name}</h2>
        <img src={character?.image} alt={character.name} />
    </div>
  );
}

export  default Detail;