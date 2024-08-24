import styles from './PostModelo.module.css';

export default function PostModelo({ FotoCapa, título, children }) {
  return (
    <article className={styles.postModeloContainer}>
      <div className={styles.fotoCapa} style={{backgroundImage: `url(${FotoCapa})`}} />
      <h2 className={styles.titulo}>{título}</h2>
      <div className={styles.postConteudoContainer}>{children}</div>
    </article>
  )
} 