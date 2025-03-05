import { useEffect, useState } from "react"
import styles from "./ProjectForm.module.css"
import axios from 'axios';
import { useNavigate } from "react-router-dom";

export default function ProjectForm() {
    const [categoriaEscolhida, setCategoriaEscolhida] = useState("")
    const [armazenaNome, setArmazenaNome] = useState("")
    const [budget,setBudget] = useState("");
    const [Projetos,setProjetos] = useState([])
    const navigate = useNavigate();
    
 // Função para adicionar valor ao orçamento
 const handleAddValue = (valueToAdd) => {
    const currentValue = Number(budget) || 0; // Se budget estiver vazio, usa 0
    setBudget(currentValue + valueToAdd);
    console.log(budget)
};

    // Função para determinar a classe do orçamento
    const getBudgetClass = (value) => {
        const numValue = Number(value);
        if (numValue <= 99) return styles.budget_low;
        if (numValue <= 499) return styles.budget_medium;
        if (numValue <= 999) return styles.budget_high;
        return styles.budget_super;
    }

    // Lista de categorias disponíveis
    const categorias = [
        { id: 1, nome: "Desenvolvimento" },
        { id: 2, nome: "Design" },
        { id: 3, nome: "Planejamento" },
        { id: 4, nome: "Infraestrutura" }
    ]

    //Pega dados do API REST
    useEffect(() => {
        axios.get("http://localhost:5234/projects")
        .then(resposta => setProjetos(resposta.data))
        .catch((err) => console.log(err))
    })

    //Muda clicar em uma categoria, seleciona ela
    const handleCategoriaChange = (e) => {
        setCategoriaEscolhida(e.target.value)
    }

    //Sobe um novo projeto para a API REST
    const handleSubmit = (e) => {
        e.preventDefault();

        if (categoriaEscolhida == "" || armazenaNome == "" || budget == 0) {
            window.alert("Preencha todos os campos.")
            return
        }
        const Projeto = {
        categoriaDoProjeto: categoriaEscolhida,
        nomeDoProjeto: armazenaNome,
        budgetDoProjeto: budget,
        servicos: []
        }

        axios.post("http://localhost:5234/projects", Projeto)
        .then(resposta => setProjetos([...Projetos], resposta.data))
        navigate('/projeto');
    }

    return (
    <>
           <form className={styles.form} onSubmit={handleSubmit}>
                <h1>Nome do Projeto</h1>
                <input 
                    type="text"  
                    maxLength={20}
                    placeholder="Insira o nome do Projeto" 
                    onChange={(e) => setArmazenaNome(e.target.value)} 
                />
                <h1>Orçamento</h1>
                <div className={styles.containerPreco}>
                <input 
                    type="number" 
                    maxLength={10}
                    value={budget}
                    placeholder="Insira o orçamento do Projeto" 
                    className={`${getBudgetClass(budget)}`}
                    onChange={(e) => setBudget(e.target.value)} 
                />
                <div className={styles.buttonGroup}>
                    <button 
                        type="button" 
                        onClick={() => handleAddValue(10)}
                        className={styles.addButton}
                    >
                        +R$10
                    </button>
                    <button 
                        type="button" 
                        onClick={() => handleAddValue(100)}
                        className={styles.addButton}
                    >
                        +R$100
                    </button>
                    <button 
                        type="button" 
                        onClick={() => handleAddValue(500)}
                        className={styles.addButton}
                    >
                        +R$500
                    </button>
                    </div>
                </div>
                <h1>Selecionar Categoria</h1>
                
                <div>
                    <select 
                        value={categoriaEscolhida} 
                        onChange={handleCategoriaChange}
                        className={styles.select_categoria}
                    >
                        <option >Selecione uma categoria</option>
                        {categorias.map((categoria) => (
                            <option key={categoria.id} value={categoria.nome}>
                                {categoria.nome}
                            </option>
                        ))}
                    </select>
                </div>
                
                <input type="submit" value="Criar Projeto"  />
            </form>
        </>
    )
}
