import conexao from "../database/conexao.js"
class SelecaoController{
    //Listar tudo
    index(req,res){
        const slq = "SELECT * FROM dbselecao.bdcopa"
        conexao.query(slq, (erro, resultado) => {
            if (erro) {
                console.log(erro)
                //TODO: status 404 error
            } else {
                res.status(200).json(resultado)
            }
        })
    }

    //Listar por id
    show(req,res){

        const id = req.params.id
        const slq = "SELECT * FROM dbselecao.bdcopa WHERE id=?;"
        conexao.query(slq, id, (erro, resultado)=>{
        const linha = resultado[0]
        if(erro){
            console.log(erro)
            //TODO: status 404 error
        }else{
            res.status(200).json(resultado)
        }
    })
    }
    //Criar dados
    store() {}

    // Atualizar dados
    update() {
    }

    // Remover dados
    delete(){}
}
// Padrão singleton
export default new SelecaoController()