import style from './Rodape.module.css'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'

function Rodape() {
    return (
        <footer className={style.footer}>
            <div className={style.container}>
                <div className={style.row}>
                    {/* Coluna 1 - Sobre */}
                    <div className={style.column}>
                        <h3 className={style.title}>Sobre Nós</h3>
                        <p className={style.description}>
                            Somos uma empresa dedicada a gerenciar seus projetos de forma eficiente e profissional.
                        </p>
                    </div>

                    {/* Coluna 2 - Links Rápidos */}
                    <div className={style.column}>
                        <h3 className={style.title}>Links Rápidos</h3>
                        <ul className={style.links}>
                            <li><a href="#" className={style.link}>Home</a></li>
                            <li><a href="#" className={style.link}>Projetos</a></li>
                            <li><a href="#" className={style.link}>Serviços</a></li>
                            <li><a href="#" className={style.link}>Contato</a></li>
                        </ul>
                    </div>

                    {/* Coluna 3 - Contato */}
                    <div className={style.column}>
                        <h3 className={style.title}>Contato</h3>
                        <p className={style.contactInfo}>
                            Email: contato@costs.com<br />
                            Telefone: (11) 56921-1452<br />
                        </p>
                    </div>

                    {/* Coluna 4 - Redes Sociais */}
                    <div className={style.column}>
                        <h3 className={style.title}>Redes Sociais</h3>
                        <div className={style.socialLinks}>
                            <a href="#" className={style.socialIcon}><FaFacebook /></a>
                            <a href="#" className={style.socialIcon}><FaInstagram /></a>
                            <a href="#" className={style.socialIcon}><FaLinkedin /></a>
                            <a href="#" className={style.socialIcon}><FaTwitter /></a>
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className={style.copyright}>
                    <p>© 2024 Costs. Todos os direitos reservados.</p>
                </div>
            </div>
        </footer>
    )
}

export default Rodape
