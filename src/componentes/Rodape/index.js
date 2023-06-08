import './Rodape.css'

const Rodape = () => {
    return (
        <footer className='footer'>
            <section>
                <ul>
                    <li>
                        <a href='https://github.com/luccarvalho'>
                            <img src='/imagens/github.png' alt='GitHub' />
                        </a>
                    </li>
                    <li>
                        <a href='http://www.linkedin.com/in/lucasalexandrecarvalho'>
                            <img src='/imagens/linkedin.png' alt='LinkedIn' />
                        </a>
                    </li>
                </ul>
            </section>
            <section>
                <img src='/imagens/logo.png' alt='Organo' />
            </section>
            <section>
                <p>
                    Desenvolvido por Lucas Carvalho
                </p>
            </section>
        </footer>
    )
}

export default Rodape;