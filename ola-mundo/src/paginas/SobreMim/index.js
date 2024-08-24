import PostModelo from "componentes/PostModelo";
import fotoCapa from 'assets/sobre_mim_capa.png';
import styles from './SobreMim.module.css';
import fotoSobreMim from 'assets/perfil.png';

export default function SobreMim() {
    return (
        <PostModelo
            fotoCapa={fotoCapa}
            titulo="Sobre mim"
        >
            <h3 className={styles.subtitulo}>
                Olá, eu sou o Vinicius!
            </h3>

            <img
                src={fotoSobreMim}
                alt="Foto do Antônio Evaldo sorrindo"
                className={styles.fotoSobreMim}
            />
            <p className={styles.paragrafo}>
                Oi, tudo bem? Eu sou instrutor de do Senac Petrolina e estou feliz de te ver por aqui.
            </p>

            <p className={styles.paragrafo}>
                Minha história com programação começou no Instituto Federal do Sertão Pernambucano (IFSertão-PE), quando fiz o ensino médio integrado ao curso de Informática. Eu aprendi lógica de programação e o básico de várias linguagens, como PHP, Python, Java, mas sem aprofundar muito em cada uma delas. Eu gostava muito de estudar programação, mas na época não fazia ideia de que trabalharia com isso hoje.
            </p>

            <p className={styles.paragrafo}>
                No ensino superior, escolhi cursar licenciatura em Computação pela mesma instituição (UFPI). Lá eu tive a oportunidade de estudar desenvolvimento web no desenvolvimento de projetos de pesquisa em iniciação tecnológica e inovação.

                Com isso tive minha experiência de dev mais próxima da realidade, com prazos de implementação do sistema do projeto, e aprendi muito enquanto codificava.
            </p>

            <p className={styles.paragrafo}>
                Desde então, tem sido apenas aprendizados atrás de aprendizados. Atualmente sou Instrutor Pleno no Senac Petrolina - PE e em parceria com A Alura, que é uma escola não só para seus alunos e alunas, mas também para os colaboradores e colaboradoras. Hoje sou muito feliz de participar dessa formação/parceria e ter a oportunidade de trazer esses conteúdos ricos e encantadores para você. Espero que aprenda bastante!
            </p>


        </PostModelo>
    )
}