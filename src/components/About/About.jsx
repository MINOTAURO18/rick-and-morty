import style from '../About/About.module.css'

const About = () => {
  return(
    <div className={style.About}>
     <h1>sobre el Proyecto de integracion</h1>
     <h2>John Alexander Muñoz cohorte 36B</h2>
     <p>proyecto de integracion de rick and morty por parte de Henry, para desarrolar habilidades en react y redux</p>

     <span>tecnologias utilizadas</span>
     <ul>
      <li>React</li>
      <li>Redux</li>
      <li>css</li>
     </ul>
    </div>
  );
}

export default About;