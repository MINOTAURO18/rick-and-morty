import './App.css';
import Cards from './components/Cards/Cards';
import Nav from './components/Nav/Nav';
// import characters from './data.js';
import { useState , useEffect } from 'react';
import axios from 'axios'
import {Routes , Route , useLocation } from 'react-router-dom'
import About from './components/About/About';
import Detail from './components/Detail/Detail';
import Form from './components/Form/Form';
import { useNavigate } from 'react-router-dom';
import Favorites from './components/Favorites/Favorites';

function App() {

   const location = useLocation();
   const [characters, setCharacters] = useState([]);
   const [access, setAccess] = useState(false);
   const navigate = useNavigate();

   const EMAIL = 'alexander12345my@gmail.com';
   const PASSWORD = '123abc'


   const login = (userData) => {
      if (userData.password === PASSWORD && userData.email === EMAIL) {
         setAccess(true);
         navigate('/home');
      }
   }

   useEffect(() => {
      !access && navigate('/');
   }, [access]);


   const onSearch = (id) => {
      axios.get(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
      if (data.name && !characters.find(char => char.id === data.id)) {
         setCharacters((oldChars) => [...oldChars, data]);
      }
       else {
         window.alert('personaje repetido');
      }
   });
   }

   const onClose = (id) => {
      setCharacters(characters.filter((char) => char.id !== id));
   }
   

   return (
      <div className='App'>

         {location.pathname === '/' ? <Form login={login}/> : <Nav onSearch={onSearch} />}

         
         <Routes>
            <Route path='/home' element={
               <div className='hola'>

               <Cards characters={characters} onClose={onClose} />
             </div>
            }/>
            
            <Route path='/about' element={<About/>}/>
            <Route path='/favorites' element={<Favorites/>}/>
            <Route path='/detail/:detailId' element={<Detail/>}/>
         </Routes>
      
        
      </div>
   );
}

export default App;
