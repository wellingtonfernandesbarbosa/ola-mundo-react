import styles from "./Rodape.module.css"
import {ReactComponent as MarcaResgistrada} from "assets/marca_registrada.svg"

export default function Rodape() {
    return (
        <footer className={styles.rodape}>
            <MarcaResgistrada />
            Desenvolvido por Alura
        </footer>
    )
};
