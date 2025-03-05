import Cabecalho from './Cabecalho'
import './Empresa.css'
import Rodape from './Rodape'

export default function Empresa() {
    return (
        <>
        <Cabecalho/>
        <div className="empresa-container">
            <div className="empresa-content">
                <h1>Nossa Empresa</h1>
                <div className="empresa-info">
                    <div className="info-card">
                        <h2>Quem Somos</h2>
                        <p>Somos uma empresa especializada em desenvolvimento de soluções tecnológicas, 
                           com foco em qualidade e inovação.</p>
                    </div>
                    
                    <div className="info-card">
                        <h2>Nossa Missão</h2>
                        <p>Transformar ideias em soluções digitais que fazem a diferença na vida 
                           das pessoas e empresas.</p>
                    </div>

                    <div className="info-card">
                        <h2>Valores</h2>
                        <ul>
                            <li>Inovação</li>
                            <li>Qualidade</li>
                            <li>Compromisso</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <Rodape/>
        </>
    )
}
