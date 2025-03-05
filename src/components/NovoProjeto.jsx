import ProjectForm from "../project/ProjectForm";
import Cabecalho from "./Cabecalho";
import Rodape from "./Rodape";
import styles from "./NovoProjeto.module.css";
import { useNavigate } from 'react-router-dom';

export default function NovoProjeto() {

    return (
        <div>
            <Cabecalho />
            <div className={styles.meio}>
                
                    <ProjectForm />
                
            </div>
            <Rodape />
        </div>
    )
}