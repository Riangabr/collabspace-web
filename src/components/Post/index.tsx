import Avatar from "../Avatar";

import { Container, Content, Divider, Hashtags } from "./styles";

const Post: React.FC = () => {
  return (
    <Container>
      <header>
        <div>
          <Avatar />

          <section>
            <h1>Rian Gabriel</h1>
            <p>riangabr2711@speedemail.com</p>
          </section>
        </div>

        <p>Publicado á 1h</p>
      </header>
      <main>
        <Content>
          <p>Rei Fraco</p>
          <p>Sabe como o Michael Jackson anda na rua?</p>
          <p></p>
        </Content>

        <Hashtags>
          <span> #cuspé </span>
        </Hashtags>
      </main>
      <Divider />

      <footer>
        <h1>Deixe seu comentário</h1>

        <textarea name=""></textarea>

        <button>Comentar</button>
      </footer>
    </Container>
  );
};

export default Post;
