import Cabecalho from './Cabecalho'
import './Contato.css'
import Rodape from './Rodape'

export default function Contato() {
    return (
        <>
            <Cabecalho />
            <div className="contato-container">
                <h2>Entre em Contato</h2>
                <div className="contato-content">
                    <form className="contato-form">
                        <div className="form-group">
                            <label htmlFor="nome">Nome:</label>
                            <input
                                type="text"
                                id="nome"
                                name="nome"
                                placeholder="Seu nome"
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">Email:</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Seu email"
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="mensagem">Mensagem:</label>
                            <textarea
                                id="mensagem"
                                name="mensagem"
                                placeholder="Sua mensagem"
                                required
                            ></textarea>
                        </div>

                        <button type="submit" className="submit-btn">Enviar</button>
                    </form>

                    <div className="contato-info">
                        <h3>Informações de Contato</h3>
                        <p><i className="fas fa-phone"></i>(11) 56921-1452</p>
                        <p><i className="fas fa-envelope"></i> contato@costs.com</p>
                        <p><i className="fas fa-map-marker-alt"></i> Rua Carlos Augusto Cornelsen, Curitiba</p>
                    </div>
                </div>
            </div>
            <Rodape />
        </>
    )
}
