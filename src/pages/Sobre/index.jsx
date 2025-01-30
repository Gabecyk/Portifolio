import styles from './sobre.module.css'
import avatar from './images/avatar.svg'
import html from './images/icon-html.svg'
import css from './images/icon-css.svg'
import js from './images/icon-js.svg'
import react from './images/icon-react.svg'
import node from './images/icon-node.svg'

function Sobre() {
    return(
        <section className={styles.sobre}>
            <div className={styles.bio}>
                <img src={avatar} alt="Avatar" className={styles.avatar}/>
                <div className={styles.textos}>
                    <h2>Sobre</h2>
                    <p>
                        Sou <span>Gabriel Balduino</span> <br />
                        <strong>Dev Full Stack</strong>
                    </p>

                    <p>Sou apaixonado por transformar ideias em realidade.</p>

                    <p>Iniciante em criação de aplicações dinâmicas e intuitivas, <br /> com foco na experiência do usuário.</p>
                </div>
            </div>
            <div className={styles.techs}>
                <h3>Techs</h3>
                <div className={styles.icones}>
                    <img src={html} alt="Ícone"/>
                    <img src={css} alt="Ícone"/>
                    <img src={js} alt="Ícone"/>
                    <img src={react} alt="Ícone"/>
                    <img src={node} alt="Ícone"/>
                </div>
            </div>
        </section>
    )
}

export default Sobre