import Cabecalho from "./Cabecalho";
import Rodape from "./Rodape";
import { useEffect, useState } from "react";
import axios from "axios";
import styles from "./Projeto.module.css";
import { useNavigate } from "react-router-dom";

export default function Projeto() {

    const [Projetos, setProjetos] = useState([])
    const [termoPesquisa, setTermoPesquisa] = useState(""); // Novo estado para o termo de pesquisa
    const [projetosFiltrados, setProjetosFiltrados] = useState([]); // Estado para projetos filtrados

    const navigate = useNavigate()


    // Função para realizar a pesquisa
    const handlePesquisa = () => {
        const resultadoFiltrado = Projetos.filter(projeto =>
            projeto.nomeDoProjeto.toLowerCase().includes(termoPesquisa.toLowerCase())
        );
        setProjetosFiltrados(resultadoFiltrado);
    };

    //Pega dados do API REST
    useEffect(() => {
        axios.get("http://localhost:5234/projects")
            .then(resposta => {
                setProjetos(resposta.data);
                setProjetosFiltrados(resposta.data); // Inicialmente, mostra todos os projetos
            })
            .catch((err) => console.log(err))
    }, []);

    //Manda para um AnalisaProjeto junto com a id 
    const handleReDirectAnalisa = (id, nome, budget, categoria, servicos) => {
        navigate(`/analisa/${id}`, {
            state: {
                nome: nome,
                budget: budget,
                categoria: categoria,
                servicos: servicos
            }
        });
    }
    // Função para buscar projetos
    const fetchProjetos = () => {
        axios.get("http://localhost:5234/projects")
            .then(resposta => {
                setProjetos(resposta.data);
                setProjetosFiltrados(resposta.data);
            })
            .catch((err) => console.log(err));
    };

    // UseEffect com array de dependências vazio
    useEffect(() => {
        fetchProjetos();
    }, []);

    // Função para deletar modificada
    const deletarServico = (id) => {
        axios.delete(`http://localhost:5234/projects/${id}`)
            .then(() => {
                // Atualiza ambos os estados após deletar
                const projetosAtualizados = Projetos.filter(obj => obj.id !== id);
                setProjetos(projetosAtualizados);
                setProjetosFiltrados(projetosAtualizados);
            })
            .catch((err) => console.log(err));
    };


    return (
        <>
            <Cabecalho />
            <div className={styles.meio}>
                <div className={styles.centro}>
                    <div className={styles.containerPesq}>
                        <input
                            type="text"
                            className={styles.pesqFiltra}
                            placeholder="Pesquisar um projeto"
                            value={termoPesquisa}
                            onChange={(e) => setTermoPesquisa(e.target.value)}
                        />
                        <button onClick={handlePesquisa}>Pesquisar</button>
                        <button
                            className={styles.outroBTN}
                            onClick={() => navigate('/novo-projeto')}
                        >
                            Criar Projeto
                        </button>

                    </div>
                    <div className={styles.flexProjeto}>
                        {projetosFiltrados.length > 0 ? (
                            projetosFiltrados.map(obj => (
                                <section key={obj.id} className={styles.caixa}>
                                    <div className={styles.projetoHeader}>
                                        <h1 className={styles.projetoTitulo}>
                                            {obj.nomeDoProjeto}
                                        </h1>
                                        <span className={styles.categoria}>
                                            {obj.categoriaDoProjeto}
                                        </span>
                                    </div>

                                    <div className={styles.projetoInfo}>
                                        <div className={styles.orcamento}>
                                            R$ {obj.budgetDoProjeto.toLocaleString()}
                                        </div>
                                    </div>

                                    <div className={styles.botoesContainer}>
                                        <button
                                            className={styles.btnEditar}
                                            onClick={() => handleReDirectAnalisa(
                                                obj.id,
                                                obj.nomeDoProjeto,
                                                obj.budgetDoProjeto,
                                                obj.categoriaDoProjeto,
                                                obj.servicos
                                            )}
                                        >
                                            Editar
                                        </button>
                                        <button
                                            className={styles.btnExcluir}
                                            onClick={() => deletarServico(obj.id)}
                                        >
                                            Excluir
                                        </button>
                                    </div>
                                </section>
                            ))
                        ) : (
                            <div className={styles.semContainer}>
                                <img src="/public/folder.svg" alt="Pasta vazia" />
                                <p className={styles.naoHa}>Não há projetos cadastrados.</p>
                            </div>
                        )}
                    </div>


                </div>
            </div>

            <Rodape />
        </>
    )
}