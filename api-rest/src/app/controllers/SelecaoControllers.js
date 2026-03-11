import SelecaoRepository from '../repositories/SelecaoRepository.js'

class SelecaoController {
    


    async index(req, res) {
        try {
            const resultado = await SelecaoRepository.findAll()
            res.status(200).json(resultado)
        } catch (erro) {
            res.status(404).json({ 'erro': erro })
        }
    }

    async show(req, res) {
        try {
            const id = req.params.id
            const resultado = await SelecaoRepository.findById(id)
            res.status(200).json(resultado[0])
        } catch (erro) {
            res.status(404).json({ 'erro': erro })
        }
    }

    async store(req, res) {
        try {
            const selecao = req.body
            const resultado = await SelecaoRepository.create(selecao)
            res.status(201).json(resultado)
        } catch (erro) {
            res.status(400).json({ 'erro': erro })
        }
    }

    async update(req, res) {
        try {
            const id = req.params.id
            const selecao = req.body
            const resultado = await SelecaoRepository.update(selecao, id)
            res.status(200).json(resultado)
        } catch (erro) {
            res.status(400).json({ 'erro': erro })
        }
    }

    async delete(req, res) {
        try {
            const id = req.params.id
            const resultado = await SelecaoRepository.delete(id)
            res.status(200).json(resultado)
        } catch (erro) {
            res.status(404).json({ 'erro': erro })
        }
    }
}

export default new SelecaoController()