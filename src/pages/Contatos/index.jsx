import styles from './contatos.module.css'
import { GoMail } from 'react-icons/go'
import { BsInstagram, BsGithub, BsLinkedin } from "react-icons/bs"


function Contatos() {
    return(
        <section className={styles.contatos}>
            <h2>Contatos</h2>
            <h3>Entre em contato</h3>
            <p>Para que possamos conversar mais sobre.</p>

            <div className={styles.icones}>
                <a href='mailto:gabrielbalduino29@gmail.com' target='_blank' rel='noopener nooreferrer'>
                <GoMail className={styles.icone}/>
                </a>

                <a href='https://www.instagram.com/gabecyk/' target='_blank' rel='noopener nooreferrer'>
                <BsInstagram className={styles.icone}/>
                </a>
                
                <a href='https://github.com/Gabecyk' target='_blank' rel='noopener nooreferrer'>
                <BsGithub className={styles.icone}/>
                </a>

                <a href='https://www.linkedin.com/in/gabriel-balduino-9aa3a3227/' target='_blank' rel='noopener nooreferrer'>
                <BsLinkedin className={styles.icone}/>
                </a>
            </div>
        </section>
    )
}

export default Contatos