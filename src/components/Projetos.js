function Projetos() {

  const projetos = [
    {
      nome: "Site Institucional",
      descricao: "Site desenvolvido com HTML e CSS"
    },
    {
      nome: "Calculadora em JavaScript",
      descricao: "Projeto com lógica de programação"
    },
    {
      nome: "Formulário de Cadastro",
      descricao: "Formulário com validação"
    }
  ];

  return (
    <section>
      <h2>Meus Projetos</h2>

      <div className="projetos-container">
        {projetos.map((projeto, index) => (
          <div className="card" key={index}>
            <h3>{projeto.nome}</h3>
            <p>{projeto.descricao}</p>
<a href="https://github.com/" target="_blank" rel="noreferrer">Ver projeto</a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projetos;
