function InitialText(){
    const text = "Esse é o meu portfólio em construção, o qual será construído\n em paralelo com o meu projeto do curso.dev";
    return(
        <div style={{display: 'flex',flexDirection: 'column',justifyContent: 'center',alignItems: 'center'}}>
            <h1>Portfolio</h1>
             <h2>{text}</h2>   
        </div>
    )
}
function PortfolioPage() {
    return (
        <html>
            <body>
                <InitialText/>
            </body>
        </html> 
    )
}
export default PortfolioPage;