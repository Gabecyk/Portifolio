import { FaCss3Alt, FaHtml5, FaJs, FaReact } from 'react-icons/fa'
import styles from './card.module.css'
import { BsArrowRight } from 'react-icons/bs'
import { Link } from 'react-router-dom'

// eslint-disable-next-line react/prop-types
function Card({ name, description, html_url }){
    return(
        <section className={styles.card}>
            <h3>{name}</h3>
            <p>{description}</p>
            <div className={styles.card_footer}>
                <div className={styles.card_icones}>
                    <FaHtml5/>
                    <FaCss3Alt/>
                    <FaJs/>
                    <FaReact/>
                </div>
                <Link to={html_url} className={styles.botao}>
                    <BsArrowRight/>
                </Link>
            </div>
        </section>
    )
}

export default Card