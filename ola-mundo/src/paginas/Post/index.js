import "./Post.css";
import { useParams } from "react-router-dom";
import posts from "json/posts.json";
import PostModelo from "componentes/PostModelo";
import ReactMarkdown from "react-markdown";
import NaoEncontrada from "paginas/NaoEncontrada";
import PaginaPadrao from "componentes/PaginaPadrao";
import { Routes, Route } from "react-router-dom";
export default function Post() {
  const parametros = useParams();
  const post = posts.find((post) => {
    return post.id === Number(parametros.id);
  });

  if (!post) {
    return (
      <h1>
        <NaoEncontrada />
      </h1>
    );
  }

  return (
    <Routes>
      <Route path="*" element={<PaginaPadrao/>}>
      <Route index element={
              <PostModelo
              FotoCapa={`/assets/posts/${post.id}/capa.png`}
              título={post.titulo}
            >
              <div className="post-markdown-container">
                <ReactMarkdown>{post.texto}</ReactMarkdown>
              </div>
            </PostModelo>
      } />

      </Route>

    </Routes>
  );
}
