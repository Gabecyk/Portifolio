import { Link } from 'react-router-dom';
import styles from './home.module.css'
import avatar from '../Sobre/images/avatar.svg'

function Home() {
    return(
        <section className={styles.home}>
            <div className={styles.apresentacao}>

            <p>
                Olá, sou <br/>
                <span>Gabriel Balduíno</span><br/>
                Dev Full Stack
            </p>

            <Link to="/sobre" className={`${styles.btn} ${styles.btn_red}`}>Saiba mais</Link>
            </div>
            <figure>
            <img className={styles.img_home} src={avatar} alt="Imagem de Home"/>
            </figure>
        </section>
    )
}

export default Home;