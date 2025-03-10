import { Link } from "react-router-dom";
import styles from './LinkButton.module.css';

export default function LinkButton({to,text}) {
    return (

        <Link to={to} className={styles.Link}>{text}</Link>
    )
}