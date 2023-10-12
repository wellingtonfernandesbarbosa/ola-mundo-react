import styles from "./Banner.module.css";
import circuloColorido from "assets/circulo_colorido.png";
import minhaFoto from 'assets/minhaFoto.jpg'

export default function Banner() {
  return (
    <div className={styles.banner}>
      <div className={styles.apresentacao}>
        <h1 className={styles.titulo}>Olá, Mundo!</h1>
        <p className={styles.paragrafo}>
          Bem-vindo ao meu espaço pessoal! Eu sou Wellington Fernandes,
          desenvolvedor Front-End. Gosto de compartilhar diversos conhecimentos
          por aqui e espero que você possa aprender algo novo :)
        </p>
      </div>
      <div className={styles.imagens}>
        <img
          className={styles.circuloColorido}
          src={circuloColorido}
          aria-hidden={true}
          alt="Circulo colorido com cores degradê indo do rosa ao azul"
        />
        <img className={styles.minhaFoto}
        src={minhaFoto}
        alt="Foto do Wellington Fernandes sorrindo"></img>
      </div>
    </div>
  );
}
