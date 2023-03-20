export default function SearchBar(props) {
   return (
      <div>
         <input type='search' />
         <button onClick={()=>props.onSearch('no sound id')}>Agregar</button>
      </div>
   );
}
