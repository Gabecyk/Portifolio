import styles from './footer.module.css'

function Footer() {
    return (
        <footer className={styles.footer}>
            Feito com <a href="https://react.dev/" target='_blank' className={styles.linkfooter}>React</a> + <a href="https://vite.dev/" target='_blank' className={styles.linkfooter}>Vite</a> © 2024
        </footer>
    )
}

export default Footer