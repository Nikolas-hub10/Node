import app from "./src/app.js"
import conexao from "./infra/conexao.js"
const port = 3000

// realizando a connection
conexao.connect((erro) =>{
    if (erro){
        console.log("Erro na conexão", erro)
    } else{
        console.log("Conexão com Sucesso")
    }
    app.listen(port, ()=>{
        console.log(`Servidor rodando http://localhost:${port}`)
        // Escutando a porta
})
})

        