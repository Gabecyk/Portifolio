import { useEffect, useState } from "react"
import Card from "../../components/Card"
import styles from './projetos.module.css'

function Sobre() {

    const [ repository, setRepositories ] = useState([])

    useEffect(() => {
        const buscarRepositorios = async () => {
            const response = await fetch('https://api.github.com/users/Gabecyk/repos')
            const data = await response.json()
            setRepositories(data)
        }
        buscarRepositorios()
    }, [])

    return(
        <section className={styles.projetos}>
            <h2>Projetos</h2>
            {
                repository.length > 0 ? (
                    <section className={styles.lista}>
                        {
                            repository.map((repo) => (
                                <Card 
                                    key={repo.id} 
                                    name={repo.name} 
                                    description={repo.description} html_url={repo.html_url}
                                />
                            ))
                        }
                    </section>
                ) : (
                    <p>Carregando repositórios...</p>
                )
            }
        </section>
    )
}

export default Sobre