function InitialText() {
  const text =
    "Essa será a página que falará um pouco sobre mim e minha trajetória.";
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1>About me</h1>
      <h2>{text}</h2>
    </div>
  );
}
function About() {
  return (
    <html>
      <body>
        <InitialText />
      </body>
    </html>
  );
}
export default About;
