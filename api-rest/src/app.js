import express from 'express'
const app = express()

// Indicar para o express ler o body como json
app.use(express.json())


//Mock
const selecoes = [
    {id:1, selecao: 'Brasil', grupo: 'C'},
    {id:2, selecao: 'EUA', grupo: 'A'},
    {id:1, selecao: 'Canada', grupo: 'B'},
    {id:1, selecao: 'Alemanha', grupo: 'D'},
]

function buscarSelecoesPorId(id){
    return selecoes.filter(selecao => selecao.id ==id)
}

function buscarSelecoesIndex(id){
    return selecoes.findIndex(selecao => selecao.id ==id)
}


// Criando uma rota padrão (ou raiz)
app.get('/', (req, res)=>{
    res.status(200).send(selecoes)
})

app.get('/selecoes', (req, res)=>{
    res.send(selecoes)
})

app.get('/selecoes/:id', (req, res)=>{
   // let index = req.params.id
    //console.log(index)
    let index = res.json(buscarSelecoesPorId(req.params.id))
})

app.delete('/selecoes/:id', (req, res)=>{
   // let index = req.params.id
    //console.log(index)
    let index = res.buscarSelecoesIndex(req.params.id)
    selecoes.splice(index,1)
    res.send('Seleção excluida com sucesso')
})

app.put('/selecoes/:id', (req, res) => {
    let index = buscarIndexSelecao(req.params.id)

    if (index === -1) {
        return res.status(404).send("Seleção não encontrada!")
    }

    selecoes[index] = {
        id: selecoes[index].id,
        ...req.body
    }

    res.send("Seleção atualizada com sucesso!")
})


app.post('/selecoes', (req, res)=>{
    selecoes.push(req.body)
    res.status(200).send('Seleção cadastrada com sucesso!')
})







export default app