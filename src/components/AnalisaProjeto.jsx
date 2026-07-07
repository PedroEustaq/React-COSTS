import { useLocation, useParams } from 'react-router-dom';
import Cabecalho from './Cabecalho';
import Rodape from './Rodape';
import { useState, useEffect } from 'react';
import styles from './AnalisaProjeto.module.css';
import api from '../services/api';

export default function AnalisaProjeto() {
    const location = useLocation();
    const { id } = useParams();
    const dados = location.state;

    const [nome, setNome] = useState(dados.nome);
    const [budget, setBudget] = useState(dados.budget);
    const [categoria, setCategoria] = useState(dados.categoria);
    const [servicos, setServicos] = useState(dados.servicos || []);
    const [criarnovoS, setCriarNovoS] = useState(false);
    const [taEditando, setTaEditando] = useState(false);
    // Criar novos serviços
    const [nomeServico, setNomeServico] = useState('');
    const [orcamentoServico, setOrcamentoServico] = useState('');
    const [descricaoServico, setDescricaoServico] = useState('');

    const categorias = [
        { id: 1, nome: "Desenvolvimento" },
        { id: 2, nome: "Design" },
        { id: 3, nome: "Planejamento" },
        { id: 4, nome: "Infraestrutura" }
    ]

    const handleEditToggle = () => {
        setTaEditando(!taEditando);
    }
    // função  de remover
    const remove = (index) => {
        if (window.confirm('Tem certeza que deseja excluir este serviço?')) {
            // Cria uma cópia do array de serviços excluindo o item do índice especificado
            const servicosAtualizados = servicos.filter((_, i) => i !== index);

            // Atualiza o projeto no backend com o novo array de serviços
            api.put(`/projects/${id}`, {
                nomeDoProjeto: nome,
                budgetDoProjeto: budget,
                categoriaDoProjeto: categoria,
                servicos: servicosAtualizados
            })
                .then(response => {
                    console.log('Serviço removido com sucesso!');
                    // Atualiza o estado local com os serviços atualizados
                    setServicos(servicosAtualizados);
                })
                .catch(error => {
                    console.error('Erro ao remover serviço:', error);
                });
        }
    }


    //Manda tudo de forma nova para o backend
    const handleSubmit = (e) => {
        e.preventDefault();

        api.put(`/projects/${id}`, {
            nomeDoProjeto: nome,
            budgetDoProjeto: budget,
            categoriaDoProjeto: categoria,
            servicos: servicos
        })
            .then(response => {
                console.log('Projeto atualizado com sucesso!');
            })
            .catch(error => {
                console.error('Erro ao atualizar:', error);
            });
    }

    // Busca os serviços atuais do projeto
    useEffect(() => {
        api.get(`/projects/${id}`)
            .then(response => {
                if (response.data.servicos) {
                    setServicos(response.data.servicos);
                }
            })
            .catch(error => console.error('Erro ao carregar serviços:', error));
    }, [id]);


    const handleNovoServico = (e) => {
        e.preventDefault();

        const novoServ = {
            nome: nomeServico,
            orcamento: parseFloat(orcamentoServico),
            descricao: descricaoServico
        };

        // Cria um novo array com todos os serviços existentes mais o novo
        const servicosAtualizados = [...servicos, novoServ];

        api.put(`/projects/${id}`, {
            nomeDoProjeto: nome,
            budgetDoProjeto: budget,
            categoriaDoProjeto: categoria,
            servicos: servicosAtualizados
        })
            .then(response => {
                console.log('Projeto atualizado com sucesso!');
                setServicos(servicosAtualizados);
                setNomeServico('');
                setOrcamentoServico('');
                setDescricaoServico('');
                setCriarNovoS(false);
            })
            .catch(error => {
                console.error('Erro ao atualizar:', error);
            });


    }
    const handleEditarProjeto = (e) => {
        e.preventDefault();

        api.put(`/projects/${id}`, {
            nomeDoProjeto: nome,
            budgetDoProjeto: budget,
            categoriaDoProjeto: categoria,
            servicos: servicos
        })
            .then(response => {
                console.log('Projeto atualizado com sucesso!');
                setTaEditando(false);
            })
            .catch(error => {
                console.error('Erro ao atualizar:', error);
            });
    }

    const totalGastoServicos = servicos.reduce((total, servico) => {
        return total + (servico.orcamento || 0);
    }, 0);


    const orcamentoRestante = budget - totalGastoServicos;

    return (
        <>
            <Cabecalho />
            <div className={styles.meio}>
                <div className={styles.container}>
                    {taEditando ? (
                        <div className={styles.ladoE}>
                            <form onSubmit={handleEditarProjeto}>
                                <input
                                    type="text"
                                    placeholder='Nome do projeto'
                                    value={nome}
                                    onChange={(e) => setNome(e.target.value)}
                                    required
                                />
                                <input
                                    type="number"
                                    placeholder='Orçamento do projeto'
                                    value={budget}
                                    onChange={(e) => setBudget(e.target.value)}
                                    required
                                />
                                <select
                                    value={categoria}
                                    onChange={(e) => setCategoria(e.target.value)}
                                    className={styles.select_categoria}
                                    required
                                >
                                    <option>Selecione uma categoria</option>
                                    {categorias.map((categoria) => (
                                        <option key={categoria.id} value={categoria.nome}>
                                            {categoria.nome}
                                        </option>
                                    ))}
                                </select>
                                <div className={styles.buttonGroup}>
                                    <button type="submit">Salvar</button>
                                    <button type="button" onClick={handleEditToggle}>Cancelar</button>
                                </div>
                            </form>
                        </div>

                    ) : (
                        <div className={styles.ladoE}>
                            <h1 className={styles.projetoTit}>Projeto: {nome}</h1>
                            <h2 className={styles.catego}>{categoria}</h2>
                            <div className={styles.orcameAnalisa}>
                                <h1 className={styles.peqDesc}>Orçamento Total</h1>
                                <span className={styles.budget}>R$: {budget}</span>
                            </div>
                            <div className={styles.orcameAnalisa}>
                                <h1 className={styles.peqDesc}>Total Gasto</h1>
                                <span className={styles.budgetGasto}>R$: {totalGastoServicos}</span>
                            </div>
                            <div className={styles.orcameAnalisa}>
                                <h1 className={styles.peqDesc}>Restante</h1>
                                <span className={styles.budgetRestante}>R$: {orcamentoRestante}</span>
                            </div>
                            <button onClick={handleEditToggle}>Editar</button>
                        </div>
                    )}





                    <div className={styles.servicosExistentes}>
                        <h2>Serviços do Projeto</h2>
                        <div className={styles.servicosGrid}>
                            {servicos.length === 0 ? (
                                <div className={styles.semServicos}>
                                    <p>Não há serviços cadastrados neste projeto</p>
                                    <span>😕</span>
                                </div>
                            ) : (
                                servicos.map((servico, index) => {
                                    // Calcula a porcentagem do orçamento
                                    const porcentagem = (servico.orcamento / budget) * 100;

                                    return (
                                        <div key={index} className={styles.servicoCard}>
                                            <h3>Subserviço: {servico.nome}</h3>
                                            <div className={styles.orcamentoInfo}>
                                                <p>Orçamento: R$ {servico.orcamento.toLocaleString()}</p>
                                                <div className={styles.progressBar}>
                                                    <div
                                                        className={styles.progressFill}
                                                        style={{
                                                            width: `${porcentagem}%`,
                                                            backgroundColor: porcentagem > 100 ? '#ff4444' : '#33cccc'
                                                        }}
                                                    ></div>
                                                </div>
                                                <p className={styles.porcentagem}>
                                                    Utiliza {porcentagem.toFixed(2)}% do orçamento total
                                                </p>
                                            </div>
                                            <p>Descrição: {servico.descricao}</p>
                                            <button
                                                onClick={() => remove(index)}
                                                className={styles.removeButton}
                                            >
                                                Remover
                                            </button>
                                        </div>
                                    );

                                })
                            )}
                        </div>
                    </div>

                    {criarnovoS ? (

                        <div className={styles.novoServicoForm}>
                            <h3>Adicionar Novo Serviço</h3>
                            <form onSubmit={handleNovoServico}>
                                <input
                                maxLength={20}
                                    type="text"
                                    placeholder='Nome do Serviço'
                                    value={nomeServico}
                                    onChange={(e) => setNomeServico(e.target.value)}
                                    required
                                />
                                <input
                                    type="number"
                                    placeholder='Orçamento do Serviço'
                                    value={orcamentoServico}
                                    onChange={(e) => setOrcamentoServico(e.target.value)}
                                    required
                                />
                                <input
                                    type="text"
                                    placeholder='Descrição do Serviço'
                                    value={descricaoServico}
                                    onChange={(e) => setDescricaoServico(e.target.value)}
                                    required
                                />
                                <div className={styles.buttonGroup}>
                                    <button type="submit">✅ Salvar Serviço</button>
                                    <button type="button" onClick={() => setCriarNovoS(false)}>❌ Cancelar</button>
                                </div>
                            </form>
                        </div>
                    ) : (
                        <div className={styles.novoServicoForm}>
                            <h3>Adicionar Novo Serviço</h3>
                            <form onSubmit={handleNovoServico}>
                                <input
                                maxLength={20}
                                    type="text"
                                    placeholder='Nome do Serviço'
                                    value={nomeServico}
                                    onChange={(e) => setNomeServico(e.target.value)}
                                    required
                                />
                                <input
                                    type="number"
                                    placeholder='Orçamento do Serviço'
                                    value={orcamentoServico}
                                    onChange={(e) => setOrcamentoServico(e.target.value)}
                                    required
                                />
                                <input
                                    type="text"
                                    placeholder='Descrição do Serviço'
                                    value={descricaoServico}
                                    onChange={(e) => setDescricaoServico(e.target.value)}
                                    required
                                />
                                <div className={styles.buttonGroup}>
                                    <button type="submit">Salvar Serviço</button>
                                </div>
                            </form>
                        </div>

                    )}
                </div>
            </div>


     
        </>
    );
}
