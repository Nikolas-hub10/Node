import express from 'express'
const app = express()

//Mock
const selecoes = [
    {id:1, selecao: 'Brasil', grupo: 'C'},
    {id:2, selecao: 'EUA', grupo: 'A'},
    {id:1, selecao: 'Canada', grupo: 'B'},
    {id:1, selecao: 'Alemanha', grupo: 'D'},
]
// Criando uma rota padrão (ou raiz)
app.get('/', (req, res)=>{
    res.send(selecoes)
})

app.get('/selecoes', (req, res)=>{
    res.send('Lista de seleções da copa do mundo!')
})





export default app