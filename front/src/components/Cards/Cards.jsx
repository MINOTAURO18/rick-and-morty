import Card from '../Card/Card';

export default function Cards({characters, onClose}) {
   
   return (
      
      characters.map((character,index) => {
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
            onClose={onClose}
            />
         )
      })
   );
}
