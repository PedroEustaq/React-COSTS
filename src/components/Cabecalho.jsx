// Cabecalho.jsx
import style from "./Cabecalho.module.css"
import { Link, useNavigate } from 'react-router-dom'
import { useState } from "react";
function Cabecalho() {
    const navigate = useNavigate();

    const [isOpen, setIsOpen] = useState(false);

    const toggleLista = () => {
        setIsOpen(!isOpen);
    };


    return (
        <>
            <header className={style.header}>
                <div className={style.logo}>
                    <img src="/public/COSTS.png" alt="" />
                </div>
                <div className={style.opcoes}>
                    <ul className={style.lista}>
                        <button onClick={() => navigate('/')} className={style.dentro}>Home</button>
                        <button onClick={() => navigate('/contato')} className={style.dentro}>Contato</button>
                        <button onClick={() => navigate('/empresa')} className={style.dentro}>Empresa</button>
                        <button onClick={() => navigate('/projeto')} className={style.dentroProj}>Projetos</button>

                    </ul>
                    {isOpen ? (<>

                        <div className={style.Aberto}>
                            <button onClick={toggleLista} className={style.close}>Fechar</button>
                            <button onClick={() => navigate('/')} className={style.dentro}>Home</button>
                            <button onClick={() => navigate('/contato')} className={style.dentro}>Contato</button>
                            <button onClick={() => navigate('/empresa')} className={style.dentro}>Empresa</button>
                            <button onClick={() => navigate('/projeto')} className={style.dentroProj}>Projetos</button>
                        </div>

                    </>) : (
                        <>
                            <div className={style.AbrirLista}>
                                <button onClick={toggleLista}>☰</button>
                            </div></>)}

                </div>
            </header>

        </>
    )
}

export default Cabecalho

