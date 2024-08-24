import styles from './Banner.module.css';
import circuloColorido from 'assets/circulo_colorido.png';
import minhaFoto from 'assets/perfil.png';

export default function Banner(){
    return (
        <div className={styles.banner}>
            <div className={styles.apresentacao}>
                <h1 className={styles.titulo}>
                    Olá, Mundo"
                </h1>

                <p className={styles.paragrafo}> Boas vindas ao meu espaço pessoal! Eu sou Vinicius Dantas, instrutor pleno do Senac Petrolina - PE. Aqui compartilho vários conhecimentos, espero que aprenda algo novo :) </p>
            </div>
            <div className={styles.imagens}>
                <img className={styles.circuloColorido}
                src={circuloColorido}
                aria-hidden={true}/>
                <img className={styles.minhaFoto} 
                src={minhaFoto}
                alt="Foto sorrindo"/>
            </div>
        </div>
    )
}