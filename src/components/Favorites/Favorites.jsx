import React from 'react'
import Card from '../Card/Card'
import style from './Favorites.module.css'
import { connect, useDispatch, useSelector } from 'react-redux'
import { removeFav ,orderCards , filterCards , reset} from '../../redux/actions/action'

export default function Favorites() {
  const {myFavorites} = useSelector((state) => state)
  const dispatch = useDispatch()

 function handleOrder (e) {
  e.preventDefault()
  const {name, value} = e.target
  dispatch(orderCards(value))
 }  
 
 function handleFilter (e) {
  e.preventDefault()
  const {name, value} = e.target
  dispatch(filterCards(value))
 }  

 function resetBtton(){
  dispatch(reset())
 }

  return (
    <div className={style.Favorites}>
      <select onChange={handleOrder} name='order' defaultValue={'DEFAULT'}>
        <option value='DEFAULT' disabled>Select Order</option>
        <option value='Ascendente'>Ascendente</option>
        <option value='Descendente'>Descendente</option>
      </select>

      <select onChange={handleFilter} name='filter' defaultValue={'DEFAULT'}>
        <option value='DEFAULT' disabled>Select Filter</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Genderless">Genderless</option>
        <option value="unknown">unknown</option>
      </select>
      <button onClick={resetBtton}>Reset</button>

        {
           myFavorites && myFavorites.map((character,index) => {
                return( 
                   <Card
                   id={character.id}
                   key={index}
                   name={character.name}
                   status={character.status}
                   species={character.species}
                   gender={character.gender}
                   origin={character.origin.name}
                   image={character.image}
                   />
                )
             })
        }
    </div>
  )
}

// function mapState(st){
//     return{
//         myFavorites: st.myFavorites,
//     }
// }



// export default connect(mapState)(Favorites)
