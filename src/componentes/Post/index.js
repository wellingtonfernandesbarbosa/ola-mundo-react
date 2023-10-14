import { useParams } from "react-router-dom";
import "./Post.css";
import posts from "json/posts.json";
import PostModelo from "componentes/PostModelo";
import ReactMarkdown from "react-markdown";

export default function Post() {
  const params = useParams();
  const post = posts.find((post) => {
    return post.id === Number(params.id);
  });

  return (
    <PostModelo
      fotoCapa={`/assets/posts/${post.id}/capa.png`}
      titulo={post.titulo}
    >
      <div className="post-markdown-container">
        <ReactMarkdown>{post.texto}</ReactMarkdown>
      </div>
    </PostModelo>
  );
}
