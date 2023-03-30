import React from 'react'
import Card from '../Card/Card'
import { connect } from 'react-redux'
import { removeFav } from '../../redux/actions/action'

function Favorites({myFavorites, onClose, removeFav}) {

    function closeFavorite(id){
        onClose(id)
        removeFav(id)
    }
  return (
    <div>
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
                   onClose={() => closeFavorite(character.id)}
                   />
                )
             })
        }
    </div>
  )
}

function mapState(st){
    return{
        myFavorites: st.myFavorites,
    }
}

function mapDispatch(d){
    return{
        removeFav: (id) => d(removeFav(id))
    }
}

export default connect(mapState, mapDispatch)(Favorites)
