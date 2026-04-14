import foto from "../foto.jpg";

function Sobre() {
  return (
    <section>
      <h2>Sobre mim</h2>

      <img src={foto} alt="Minha foto" className="foto" />

      <p>
        Olá! Meu nome é Ana Paula Lopes de Andrade.
        Sou estudante de Tecnologia em Sistemas para Internet e estou aprendendo desenvolvimento web.
      </p>
    </section>
  );
}

export default Sobre;