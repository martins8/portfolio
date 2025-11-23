function InitialText() {
  const text = "Essa será a página que irá expor meus projetos pessoais.";
  return (
    <div
      style={{
        flexDirection: "column",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1>Projetos</h1>
      <h2>{text}</h2>
    </div>
  );
}

function Projects() {
  return (
    <html>
      <body>
        <InitialText />
      </body>
    </html>
  );
}

export default Projects;
