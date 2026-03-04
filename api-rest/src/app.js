import express from 'express'
import conexao from './app/database/conexao.js'
import SelecaoControllers from './app/controllers/SelecaoControllers.js'

const app = express()

// Indicar para o express ler o body como json
app.use(express.json())


//Mock
// const selecoes = [
//     {id:1, selecao: 'Brasil', grupo: 'C'},
//     {id:2, selecao: 'EUA', grupo: 'A'},
//     {id:1, selecao: 'Canada', grupo: 'B'},
//     {id:1, selecao: 'Alemanha', grupo: 'D'},
// ]

// function buscarSelecoesPorId(id){
//     return selecoes.filter(selecao => selecao.id ==id)
// }

// function buscarSelecoesIndex(id){
//     return selecoes.findIndex(selecao => selecao.id ==id)
// }


// Criando uma rota padrão (ou raiz)
// app.get('/selecoes', (req, res)=>{
//     // res.status(200).send(selecoes)
    
// })

app.get('/selecoes', SelecaoControllers.index)
    // (req, res)=>{
//     res.send(selecoes)
// }


app.get('/selecoes/:id', SelecaoControllers.show)
    // (req, res)=>{
   // let index = req.params.id
    //console.log(index)
    // let index = res.json(buscarSelecoesPorId(req.params.id))
    

app.post('/selecoes', (req, res)=>{
    // selecoes.push(req.body)
    // res.status(200).send('Seleção cadastrada com sucesso!')
    const selecao = req.body
    const sql = "INSERT INTO dbselecao.bdcopa SET ?;"
    conexao.query(sql, selecao, (erro, resultado)=>{
        if(erro){
            console.log(erro)
            //TODO: status 404 error
        }else{
            res.status(200).json(resultado)
        }
    })
})

app.delete('/selecoes/:id', (req, res)=>{
   // let index = req.params.id
    //console.log(index)
    // let index = res.buscarSelecoesIndex(req.params.id)
    // selecoes.splice(index,1)
    // res.send('Seleção excluida com sucesso')
    const id = req.params.id
    const sql = "DELETE FROM dbselecao.bdcopa WHERE id=?"
    conexao.query(sql, id, (erro, resultado)=>{
        const linha = resultado[0]
        if(erro){
            console.log(erro)
            //TODO: status 404 error
        }else{
            res.status(200).json(resultado)
        }
    })
})

app.put('/selecoes/:id', (req, res) => {
    // let index = buscarIndexSelecao(req.params.id)

    // if (index === -1) {
    //     return res.status(404).send("Seleção não encontrada!")
    // }

    // selecoes[index] = {
    //     id: selecoes[index].id,
    //     ...req.body
    // }

    // res.send("Seleção atualizada com sucesso!")
        const id = req.params.id
        const selecao = req.body
        const sql = "UPDATE dbselecao.bdcopa SET ? WHERE id=?;"
        conexao.query(sql, [selecao, id], (erro, resultado)=>{
        const linha = resultado[0]
        if(erro){
            console.log(erro)
            //TODO: status 404 error
        }else{
            res.status(200).json(resultado)
        }
    })
    
})






app.post('/selecoes', (req, res)=>{
    selecoes.push(req.body)
    res.status(200).send('Seleção cadastrada com sucesso!')
})







export default app