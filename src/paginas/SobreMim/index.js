import styles from "./SobreMim.module.css";
import PostModelo from "componentes/PostModelo";
import fotoCapa from "assets/sobre_mim_capa.png";
import fotoSobreMim from "assets/minhaFoto.jpg";

export default function SobreMim() {
  return (
    <PostModelo fotoCapa={fotoCapa} titulo="Sobre mim">
      <h3 className={styles.subtitulo}>Olá, eu sou o Wellington!</h3>
      <img
        src={fotoSobreMim}
        className={styles.fotoSobreMim}
        alt="Minha foto sorrindo"
      ></img>
      <p className={styles.paragrafo}>
        Olá, tudo bem? Sou um desenvolvedor Front-End brasileiro com experiência em HTML, CSS, JavaScript, React, Vite, PHP e Python.
      </p>
      <p className={styles.paragrafo}>
        Minha jornada na programação teve início antes mesmo da minha passagem pela faculdade Unopar, quando já havia concluído alguns cursos. Fiquei impressionado ao ver o código que escrevia ganhar vida na tela. Cursei Análise de Desenvolvimento de Sistemas na Unopar e, atualmente, estou aprimorando meus conhecimentos na Alura para avançar no Front-End.
      </p>
      <p className={styles.paragrafo}>
        Estou em busca da minha primeira oportunidade profissional, ansioso para demonstrar o conhecimento que adquiri e continuar aprendendo. Tenho a determinação de oferecer o meu melhor em qualquer equipe em que eu esteja, contribuindo para o sucesso do projeto.
      </p>
    </PostModelo>
  );
}
